/*
|--------------------------------------------------------------------------
| EaselDisplayObject
|--------------------------------------------------------------------------
|
| This mixin gives an Easel Vue component the required elements to be 
| visible on the canvas.
|
*/

import EaselEventBinder from '../EaselEventBinder.js';
import easeljs from '../easel.js';

module.exports = {
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
                this.component.x = this.x;
            }
        },
        y() {
            if (this.component) {
                this.component.y = this.y;
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
        'easel.stage': function () {
            this.init();
        },
    },
    mounted() {
        if (this.easel.stage) {
            this.init();
        }
    },
    destroyed() {
        if (this.easel.stage) {
            this.displayObjectBreakdown();
        }
    },
    methods: {
        displayObjectInit() {
            EaselEventBinder.bindEvents(this, this.component);
            this.component.x = this.x;
            this.component.y = this.y;
            this.component.rotation = this.rotation;
            this.updateScales();
            this.updateAlpha();
            this.updateShadow();
            this.updateAlign();
            this.easel.stage.addChild(this.component);
        },
        displayObjectBreakdown() {
            this.easel.stage.removeChild(this.component);
        },
        updateScales() {
            if (this.component) {
                var scale = this.scale || 1;
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
                    var w = bounds.width,
                        h = bounds.height,
                        hAlign = (this.align && this.align[0]) || 'center',
                        vAlign = (this.align && this.align[1]) || 'bottom';
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
            return Promise.reject('No bounds available');
        },
    },
};
