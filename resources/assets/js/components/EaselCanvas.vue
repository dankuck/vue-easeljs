<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import EaselEventBinder from '../EaselEventBinder.js';
import easeljs from '../easel.js';
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
            this.context.imageSmoothingEnabled = this.antiAlias;
            this.context.mozImageSmoothingEnabled = this.antiAlias;
            this.context.webkitImageSmoothingEnabled = this.antiAlias;
            this.context.msImageSmoothingEnabled = this.antiAlias;
        },
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.easel);
        this.context = this.component.canvas.getContext('2d');
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener("tick", (event) => this.component.update(event));
        if (typeof this.antiAlias !== 'undefined') {
            this.context.imageSmoothingEnabled = this.antiAlias;
            this.context.mozImageSmoothingEnabled = this.antiAlias;
            this.context.webkitImageSmoothingEnabled = this.antiAlias;
            this.context.msImageSmoothingEnabled = this.antiAlias;
        }
        this.addPendingChildren();
    },
};
</script>
