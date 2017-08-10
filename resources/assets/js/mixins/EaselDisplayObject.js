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
    props: ['x', 'y'],
    watch: {
        'x': function () {
            this.component.x = this.x;
        },
        'y': function () {
            this.component.y = this.y;
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
            this.easel.stage.addChild(this.component);
        }
    },
    data() {
        return {
            component: null,
        };
    },
};
