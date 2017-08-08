<template>
    <div>
        <canvas ref="easel">
            <slot></slot>
        </canvas>
    </div>
</template>

<script>
import easeljs from '../easel.js';
export default {
    data() {
        return {
            stage: null,
        };
    },
    mounted() {
        this.stage = new easeljs.Stage(this.$refs.easel);
    },
};
</script>
