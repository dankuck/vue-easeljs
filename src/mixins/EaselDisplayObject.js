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

export default {
    inject: ['easelParent'],
    props: ['x', 'y', 'flip', 'rotation', 'scale', 'alpha', 'shadow'],
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
    },
    mounted() {
        this.$watch('component', (now, old) => {
            if (old) {
                this.displayObjectBreakdown(old);
            }
            if (now) {
                this.displayObjectInit();
            }
        });
    },
    destroyed() {
        this.displayObjectBreakdown();
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
            this.easelParent.addChild(this);
        },
        displayObjectBreakdown(easelComponent = null) {
            this.easelParent.removeChild(this, easelComponent);
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
    },
};
