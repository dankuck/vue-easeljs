<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import EaselEventBinder from '../libs/easel-event-binder.js';
import easeljs from '../../easeljs/easel.js';
import EaselParent from '../mixins/EaselParent.js';

export default {
    mixins: [EaselParent],
    props: ['antiAlias'],
    data() {
        return {
            component: null,
            context: null,
        };
    },
    destroyed() {
        easeljs.Touch.disable(this.component);
    },
    watch: {
        antiAlias() {
            this.updateAntiAlias();
        },
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.easel);
        this.context = this.component.canvas.getContext('2d');
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener("tick", (event) => this.component.update(event));
        if (typeof this.antiAlias !== 'undefined') {
            this.updateAntiAlias();
        }
    },
    methods: {
        updateAntiAlias() {
            this.context.imageSmoothingEnabled = this.antiAlias;
            this.context.mozImageSmoothingEnabled = this.antiAlias;
            this.context.webkitImageSmoothingEnabled = this.antiAlias;
            this.context.msImageSmoothingEnabled = this.antiAlias;
        },
    },
};
</script>
