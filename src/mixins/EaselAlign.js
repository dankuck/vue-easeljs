/*
|--------------------------------------------------------------------------
| EaselDisplayObject
|--------------------------------------------------------------------------
|
| This mixin gives an Easel Vue component the required elements to be
| visible on the canvas.
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
        normalizedAlign() {
            return normalizeAlignment(this.align || ['', '']);
        },
    },
    methods: {
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
        getAlignDimensions() {
            // Components should override this
            throw new Error('EaselAlign components must define a `getAlignDimensions` method');
        },
    },
};
