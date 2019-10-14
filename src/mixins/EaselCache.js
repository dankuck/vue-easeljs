/**
 |-----------------------------------------------------------------------------
 | EaselCache
 |-----------------------------------------------------------------------------
 | This mixin provides cache support to a component. It handles the `cache`
 | prop at initialization and any updates.
 |
 | It operates transparently, so it should be impossible to tell it's active
 | except that the code may operate more speedily.
 |
 | Any component mixing this in should also mix in EaselDisplayObject.
 |
 | A component that mixes this in should provide:
 | * updatesEaselCache - A top-level Array of the names of props or properties
 |                       to watch for changes that should trigger a cache
 |                       refresh
 | * getCacheBounds    - A method that returns a Promise which resolves with
 |                       an object formatted as `{x, y, width, height}`.
 |
 */

import Vue from 'vue';

// Not working, possibly due to double-loading Vue
// Vue.config.optionMergeStrategies.updatesEaselCache = (a, b) => (a || []).concat(b || []);

export default {
    props: ['cache'],
    /**
     * Components that mix this in should replace this with an array of props
     * or properties that should trigger cache refreshes when they change.
     * @type {Array}
     */
    updatesEaselCache: ['scale'],
    data() {
        return {
            cacheStarted: false,
            cacheNeedsUpdate: false,
            beforeCaches: [],
            cacheWhens: [],
        };
    },
    mounted() {
        this.updateCacheOnChange = () => {
            this.cacheNeedsUpdate = true;
            this.setParentCacheNeedsUpdate();
        };
        const setupOnChange = () => {
            if (this.component) {
                this.component.on('change', this.updateCacheOnChange);
            }
        };
        window.addEventListener('resize', this.updateCacheOnChange);
        setupOnChange();
        this.$watch('component', setupOnChange);
        this.$options.updatesEaselCache.forEach(prop => {
            this.$watch(prop, () => this.cacheNeedsUpdate = true);
        });
        Object.keys(this.$options.props).forEach(prop => {
            this.$watch(prop, () => this.setParentCacheNeedsUpdate());
        });
        this.$nextTick(() => this.cacheInit());
    },
    destroyed() {
        window.removeEventListener('resize', this.updateCacheOnChange);
    },
    watch: {
        shouldCache() {
            if (this.shouldCache) {
                this.cacheInit();
            } else {
                this.cacheDestroy();
            }
        },
        cacheNeedsUpdate() {
            if (this.cacheNeedsUpdate && this.shouldCache) {
                this.$nextTick(() => {
                    if (this.component && this.component.cacheCanvas) {
                        this.cacheDestroy();
                        this.cacheInit();
                        // Didn't use updateCache() because it has a bug in
                        // which it gives a new cache the same size as the
                        // existing cache.
                    }
                });
            }
        },
    },
    computed: {
        shouldCache() {
            return this.cache
                || this.cacheWhens.reduce((result, callback) => result || callback(), false);
        },
        cacheScale() {
            let scale = this.scale || 1;
            let parent = this.easelParent;
            while (parent) {
                if (parent.viewportScale) {
                    scale *= parent.viewportScale.scaleX;
                } else {
                    scale *= parent.scale || 1;
                }
                parent = parent.easelParent;
            }
            return scale;
        },
    },
    methods: {
        beforeCache(callback) {
            this.beforeCaches.push(callback);
        },
        triggerBeforeCaches() {
            this.beforeCaches.forEach(callback => callback());
        },
        cacheWhen(callback) {
            this.cacheWhens.push(callback);
        },
        cacheInit() {
            if (this.shouldCache) {
                this.getCacheBounds()
                    .then(({x, y, width, height}) => {
                        this.triggerBeforeCaches();

                        this.easelCanvas.createCanvas(() => {
                            this.component.cache(x, y, width, height, this.cacheScale * window.devicePixelRatio);
                        });
                        this.cacheStarted = true;
                        this.cacheNeedsUpdate = false;
                    })
                    .catch((error) => console.error(`Cannot cache: ${error}`, error));
            }
        },
        cacheDestroy() {
            this.component.uncache();
            this.cacheStarted = false;
            this.cacheNeedsUpdate = false;
        },
        setParentCacheNeedsUpdate() {
            if (this.easelParent && 'cacheNeedsUpdate' in this.easelParent) {
                this.easelParent.cacheNeedsUpdate = true;
            }
        },
        /**
         * Get the bounds of a rectangle containing the element. This must be
         * defined by the subclass. It must return `{x, y, width, height}`.
         * These values are passed directly to EaselJS's cache() method. See
         * its documentation.
         * @return {Object}
         */
        getCacheBounds() {
            return Promise.reject('EaselCache components must define a `getCacheBounds` method');
        },
        /**
         * Get the cache bounds as they would be seen from the parent's
         * perspective, and large enough to contain the element rotated to any
         * degree along with its shadow, if any.
         * EaselContainer uses this to calculate its own cache bounds.
         * @return {object}
         */
        getRelativeCacheBounds() {
            return this.getCacheBounds()
                .then(bounds => {
                    const x = ((this.x || 0) - this.component.regX) + bounds.x;
                    const y = ((this.y || 0) - this.component.regY) + bounds.y;
                    return {
                        x,
                        y,
                        width: bounds.width,
                        height: bounds.height,
                    };
                })
                .then(bounds => this.expandForShadow(bounds))
                .then(bounds => this.getSmallestSquare(bounds))
        },
        /**
         * Return the bounds of the smallest square that can contain the given
         * bounds rotated to any degree.
         * @param  {Object} bounds
         * @return {Object}
         */
        getSmallestSquare({x, y, width, height}) {
            // Use width and height as the legs of a right triangle and figure
            // out the hypotenuse. Thanks, Pythagoras.
            // The hypotenuse is the longest possible length that the object
            // could extend.
            const hypotenuse = Math.sqrt(
                Math.pow(width, 2)
                + Math.pow(height, 2)
            );
            return {
                x: -hypotenuse,
                y: -hypotenuse,
                width: hypotenuse * 2,
                height: hypotenuse * 2,
            };

        },
        /**
         * Return the smallest bounds that can contain both bounds
         * @param  {Object} a
         * @param  {Object} b
         * @return {Object}
         */
        getSmallestCombination(a, b) {
            const x = Math.min(a.x, b.x);
            const y = Math.min(a.y, b.y);
            const width = Math.max(
                (b.x - x) + b.width,
                (a.x - x) + a.width
            );
            const height = Math.max(
                (b.y - y) + b.height,
                (a.y - y) + a.height
            );
            return {
                x,
                y,
                width,
                height,
            };
        },
        /**
         * If a shadow exists, add its dimensions as padding on all sides
         * @return {Object}
         */
        expandForShadow(bounds) {
            if (!this.shadow) {
                return bounds;
            }
            // Expand bounds to cover the shadow offsets and blurriness
            // in every direction. Needs to be every direction, since
            // rotation is applied before shadow.
            const [color, offsetX, offsetY, blurriness] = this.shadow;
            // Find the longest possible edge and expand the bounds in
            // every direction. We cannot be less naive, because we
            // want to account for every rotation.
            const padding = Math.max(offsetX, offsetY) + blurriness;
            return {
                x: bounds.x - padding,
                y: bounds.y - padding,
                width: bounds.width + padding * 2,
                height: bounds.height + padding * 2,
            };
        },
    },
};
