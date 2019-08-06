import EaselDisplayObject from '../../src/mixins/EaselDisplayObject.js';
import easeljs from '../../src/easel.js';

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
        getBounds() {
            return Promise.resolve(new easeljs.Rectangle(0, 0, 32, 48));
        },
    },
};
