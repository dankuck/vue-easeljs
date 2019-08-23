import EaselDisplayObject from '../../src/mixins/EaselDisplayObject.js';
import easeljs from '../../easeljs/easel.js';

/**
 * A fake component that uses EaselDisplayObject.
 * It uses a generic Shape internally.
 * It has the size of a 32x48 rectangle.
 */
export default {
    template: '<!---->',
    mixins: [EaselDisplayObject],
    methods: {
        init() {
            this.component = new easeljs.Shape();
            this.displayObjectInit();
        },
        getDimensions() {
            return Promise.resolve({width: 32, height: 48});
        },
    },
};
