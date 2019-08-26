export default {
    props: ['cache'],
    updatesEaselCache: [],
    data() {
        return {
            cacheStarted: false,
            cacheNeedsUpdate: false,
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
    watch: {
        cache() {
            if (this.cache) {
                this.cacheInit();
            } else {
                this.cacheDestroy();
            }
        },
        cacheNeedsUpdate() {
            if (this.cacheNeedsUpdate && this.cache) {
                this.$nextTick(() => {
                    if (this.component && this.component.cacheCanvas) {
                        this.component.updateCache();
                        this.cacheNeedsUpdate = false;
                    }
                });
            }
        },
    },
    methods: {
        cacheInit() {
            if (this.cache) {
                this.getCacheBounds()
                    .then(
                        ({x, y, width, height}) => {
                            this.component.cache(x, y, width, height, window.devicePixelRatio * (this.scale || 1));
                            this.cacheStarted = true;
                            this.cacheNeedsUpdate = false;
                        },
                        (error) => console.error('Cannot cache:', error)
                    );
            }
        },
        cacheDestroy() {
            this.component.uncache();
            this.cacheStarted = false;
            this.cacheNeedsUpdate = false;
        },
        setParentCacheNeedsUpdate() {
            if (this.easel && 'cacheNeedsUpdate' in this.easel) {
                this.easel.cacheNeedsUpdate = true;
            }
        },
        getCacheBounds() {
            return Promise.reject('EaselCache components must define a `getCacheBounds` method');
        },
        /**
         * Get the cache bounds as they would be seen from the parent's
         * perspective, and large enough to contain the element rotated to any
         * degree.
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
                .then(this.getSmallestSquare)
                .then((arg) => {console.log(arg); return arg});
        },
        /**
         * Return the bounds of the smallest square that can contain the given
         * bounds rotated to any degree.
         * @param  {Object} bounds
         * @return {Object}
         */
        getSmallestSquare({x, y, width, height}) {
            const longest = Math.max(
                Math.abs(x),
                Math.abs(y),
                x + width,
                y + height
            );
            return {
                x: -longest,
                y: -longest,
                width: longest * 2,
                height: longest * 2,
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
    },
};
