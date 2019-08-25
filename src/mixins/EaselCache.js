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
                            console.log('caching', {x:-x, y:-y, width, height});
                            this.component.cache(-x, -y, width, height, .5/*window.devicePixelRatio * (this.scale || 1)*/);
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
         * perspective.
         * @return {object}
         */
        getRelativeCacheBounds() {
            return this.getCacheBounds()
                .then(bounds => {
                    console.log('relative', {x:this.x,y:this.y}, bounds);
                    const minX = (this.x || 0) - this.component.regX + bounds.x;
                    const minY = (this.y || 0) - this.component.regY + bounds.y;
                    return {
                        minX: minX,
                        minY: minY,
                        width: bounds.width,
                        height: bounds.height,
                    };
                });
        },
    },
};
