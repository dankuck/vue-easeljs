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
import PromiseParty from '../libs/PromiseParty.js';

const passthroughProps = ['rotation', 'cursor', 'name'];

export default {
    inject: ['easelParent', 'easelCanvas'],
    props: {
        x: {},
        y: {},
        flip: {},
        rotation: {},
        scale: {},
        alpha: {},
        shadow: {},
        cursor: {},
        visible: {
            default: true,
        },
        name: {},
    },
    data() {
        return {
            component: null,
            forceInvisiblePromises: new PromiseParty()
                .on('change', count => this.forceInvisible = count > 0),
            forceInvisible: false,
        };
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
        // These just get copied directly onto the component; no funny business
        passthroughProps.forEach(prop => {
            this.$watch(prop, () => {
                if (this.component) {
                    this.component[prop] = this[prop];
                }
            });
        });
        this.$watch('x', () => {
            if (this.component) {
                this.component.x = this.x || 0;
            }
        });
        this.$watch('y', () => {
            if (this.component) {
                this.component.y = this.y || 0;
            }
        });
        this.$watch('flip', () => {
            if (this.component) {
                this.updateScales();
            }
        });
        this.$watch('scale', () => {
            if (this.component) {
                this.updateScales();
            }
        });
        this.$watch('alpha', () => {
            if (this.component) {
                this.updateAlpha();
            }
        });
        this.$watch('shadow', () => {
            if (this.component) {
                this.updateShadow();
            }
        });
        this.$watch('shouldBeVisible', () => {
            if (this.component) {
                this.updateVisibility();
            }
        });
    },
    computed: {
        shouldBeVisible() {
            return this.visible && !this.forceInvisible;
        },
    },
    destroyed() {
        this.displayObjectBreakdown();
    },
    methods: {
        displayObjectInit() {
            EaselEventBinder.bindEvents(this, this.component);
            this.component.x = this.x || 0;
            this.component.y = this.y || 0;
            passthroughProps.forEach(prop => {
                this.component[prop] = this[prop];
            });
            this.updateScales();
            this.updateAlpha();
            this.updateShadow();
            this.updateVisibility();
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
        updateVisibility() {
            this.component.visible = this.shouldBeVisible;
        },
        /**
         * Force visible = false until this promise has resolved or rejected.
         * Returns a Promise that resolves when the given one does.
         * @param  {Promise} promise
         * @return {Promise}
         */
        remainInvisibleUntil(promise) {
            this.forceInvisiblePromises.add(promise);
            return promise;
        },
    },
};
