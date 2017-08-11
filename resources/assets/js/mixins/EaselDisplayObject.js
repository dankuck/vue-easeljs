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

module.exports = {
    inject: ['easel'],
    props: ['x', 'y', 'flip'],
    data() {
        return {
            component: null,
        };
    },
    watch: {
        'x': function () {
            this.component.x = this.x;
        },
        'y': function () {
            this.component.y = this.y;
        },
        'flip': function () {
            this.updateScales();
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
            this.easel.stage.removeChild(this.component);
        }
    },
    methods: {
        displayObjectInit() {
            EaselEventBinder.bindEvents(this, this.component);
            this.component.x = this.x;
            this.component.y = this.y;
            this.updateScales();
            this.easel.stage.addChild(this.component);
        },
        updateScales() {
            if (this.component) {
                this.component.scaleX = this.flip === 'horizontal' || this.flip === 'both' ? -1 : 1;
                this.component.scaleY = this.flip === 'vertical' || this.flip === 'both' ? -1 : 1;
            }
        },
    },
};
