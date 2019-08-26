import EaselDisplayObject from '../../src/mixins/EaselDisplayObject.js';
import EaselCache from '../../src/mixins/EaselCache.js';
import easeljs from '../../easeljs/easel.js';

/**
 * A fake component that uses EaselDisplayObject.
 * It uses a generic Shape internally.
 * It has the size of a 32x48 rectangle.
 */
export default {
    template: '<!---->',
    mixins: [EaselDisplayObject, EaselCache],
    mounted() {
        this.component = new easeljs.Shape();
    },
    methods: {
        getAlignDimensions() {
            return Promise.resolve({width: 32, height: 48});
        },
        getCacheBounds() {
            return Promise.resolve({x: -10, y: -20, width: 30, height: 40});
        },
    },
};
