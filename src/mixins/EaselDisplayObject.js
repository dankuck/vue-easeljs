/*
|--------------------------------------------------------------------------
| EaselDisplayObject
|--------------------------------------------------------------------------
|
| This mixin gives an Easel Vue component the required elements to be
| visible on the canvas.
|
*/

import EaselEventBinder from '../libs/easel-event-binder.js';
import easeljs from '../../easeljs/easel.js';
import normalizeAlignment from '../libs/normalize-alignment.js';

export default {
    inject: ['easel'],
    props: ['x', 'y', 'flip', 'rotation', 'scale', 'alpha', 'shadow', 'align'],
    data() {
        return {
            component: null,
        };
    },
    watch: {
        x() {
            if (this.component) {
                this.component.x = this.x || 0;
            }
        },
        y() {
            if (this.component) {
                this.component.y = this.y || 0;
            }
        },
        flip() {
            if (this.component) {
                this.updateScales();
            }
        },
        scale() {
            if (this.component) {
                this.updateScales();
            }
        },
        rotation() {
            if (this.component) {
                this.component.rotation = this.rotation;
            }
        },
        alpha() {
            if (this.component) {
                this.updateAlpha();
            }
        },
        shadow() {
            if (this.component) {
                this.updateShadow();
            }
        },
        align() {
            if (this.component) {
                this.updateAlign();
            }
        },
    },
    mounted() {
        this.init();
    },
    destroyed() {
        this.displayObjectBreakdown();
    },
    computed: {
        normalizedAlign() {
            return normalizeAlignment(this.align || ['', '']);
        },
    },
    methods: {
        displayObjectInit() {
            EaselEventBinder.bindEvents(this, this.component);
            this.component.x = this.x || 0;
            this.component.y = this.y || 0;
            this.component.rotation = this.rotation;
            this.updateScales();
            this.updateAlpha();
            this.updateShadow();
            this.updateAlign();
            this.easel.addChild(this);
        },
        displayObjectBreakdown() {
            this.easel.removeChild(this);
        },
        updateScales() {
            if (this.component) {
                const scale = this.scale || 1;
                this.component.scaleX = this.flip === 'horizontal' || this.flip === 'both' ? -scale : scale;
                this.component.scaleY = this.flip === 'vertical' || this.flip === 'both' ? -scale : scale;
            }
        },
        updateAlpha() {
            this.component.alpha = isNaN(this.alpha) || this.alpha === null ? 1 : this.alpha;
        },
        updateShadow() {
            if (this.shadow) {
                this.component.shadow = new easeljs.Shadow(this.shadow[0], this.shadow[1], this.shadow[2], this.shadow[3]);
            } else {
                this.component.shadow = null;
            }
        },
        updateAlign() {
            this.getBounds()
                .then(bounds => {
                    const w = bounds.width,
                        h = bounds.height,
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
                });
        },
        getBounds() {
            // Components should override this
            return Promise.reject('No bounds available');
        },
    },
};
