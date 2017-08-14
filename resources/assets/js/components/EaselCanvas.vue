<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import easeljs from '../easel.js';
import EaselEventBinder from '../EaselEventBinder.js';

export default {
    provide() {
        return {
            easel: this,
        };
    },
    data() {
        return {
            component: null,
        };
    },
    destroyed() {
        easeljs.Touch.disable(this.component);
    },
    computed: {
        stage() {
            return this.component;
        },
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.easel);
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener("tick", (event) => this.component.update(event));
    },
};
</script>
