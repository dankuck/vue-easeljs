<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import easeljs from '../easel.js';

export default {
    provide() {
        return {
            easel: this.easel,
        };
    },
    data() {
        return {
            easel: {
                stage: null,
            },
        };
    },
    mounted() {
        this.easel.stage = new easeljs.Stage(this.$refs.easel);
        easeljs.Ticker.addEventListener("tick", (event) => this.updateStage(event));
    },
    methods: {
        updateStage(event) {
            this.easel.stage.update(event);
        },
    },
};
</script>
