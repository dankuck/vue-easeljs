<template>
    <span></span>
</template>

<script>
import easeljs from '../easel.js';
export default {
    inject: ['easel'],
    data() {
        return {
            shape: null,
        };
    },
    watch: {
        'easel.stage': function () {
            this.shape = new easeljs.Shape();
            this.easel.stage.addChild(this.shape);
        },
    },
};
</script>
