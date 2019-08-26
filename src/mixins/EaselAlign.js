/*
|--------------------------------------------------------------------------
| EaselAlign
|--------------------------------------------------------------------------
| This mixin provides alignment support to a component. It handles the
| `align` prop.
|
| Any component mixing this in should also mix in EaselDisplayObject.
|
| A component that mixes this in should provide:
| * getAlignDimensions - A method that returns a Promise that resolves with
|                        an object formatted as `{x, y, width, height}`.
|
*/

import easeljs from '../../easeljs/easel.js';
import normalizeAlignment from '../libs/normalize-alignment.js';

export default {
    props: ['align'],
    watch: {
        align() {
            if (this.component) {
                this.updateAlign();
            }
        },
    },
    mounted() {
        this.$nextTick(() => this.updateAlign());
    },
    computed: {
        /**
         * Normalizes the `align` prop's value by ensuring it is an array and
         * horizontal value comes before vertical value.
         * @return {Array}
         */
        normalizedAlign() {
            return normalizeAlignment(this.align || ['', '']);
        },
    },
    methods: {
        /**
         * Sets the offset values for this element to those set by the align
         * prop. Returns a Promise that resolves with dimensions that were
         * passed to this method.
         * @return Promise
         */
        updateAlign() {
            return this.getAlignDimensions()
                .then(
                    dimensions => {
                        const w = dimensions.width,
                            h = dimensions.height,
                            hAlign = this.normalizedAlign[0] || 'left',
                            vAlign = this.normalizedAlign[1] || 'top';
                        if (hAlign === 'left') {
                            this.component.regX = 0;
                        } else if (hAlign === 'center') {
                            this.component.regX = w / 2;
                        } else if (hAlign === 'right') {
                            this.component.regX = w;
                        }
                        if (vAlign === 'top') {
                            this.component.regY = 0;
                        } else if (vAlign === 'center') {
                            this.component.regY = h / 2;
                        } else if (vAlign === 'bottom') {
                            this.component.regY = h;
                        }
                        return dimensions;
                    },
                    error => {
                        console.error('Cannot align:', error);
                        throw error;
                    }
                );
        },
        /**
         * Returns a Promise that resolves with an object like
         * `{width, height}` so that alignment can be calculated. Subclasses
         * must define this method.
         * @return {Object}
         */
        getAlignDimensions() {
            // Components should override this
            throw new Error('EaselAlign components must define a `getAlignDimensions` method');
        },
    },
};
