<template>
    <span></span>
</template>

<script>
import easeljs from '../easel.js';
export default {
    inject: ['easel'],
    props: ['x', 'y', 'form', 'fill', 'dimensions'],
    data() {
        return {
            shape: null,
        };
    },
    mounted() {
        if (this.easel.stage) {
            this.init();
        }
    },
    destroyed() {
        this.easel.stage.removeChild(this.shape);
    },
    watch: {
        'easel.stage': function () {
            this.init();
        },
        x() {          this.refresh() },
        y() {          this.refresh() },
        form() {       this.refresh() },
        fill() {       this.refresh() },
        dimensions() { this.refresh() },
    },
    methods: {
        init() {
            this.shape = new easeljs.Shape();
            this.refresh();
            this.easel.stage.addChild(this.shape);
        },
        refresh() {
            if (this.shape) {
                this.shape.graphics.clear();
                this.shape.graphics.beginFill(this.fill);
                if (this.form === 'circle') {
                    this.shape.graphics.drawCircle(0, 0, this.dimensions);
                }
                this.shape.x = this.x;
                this.shape.y = this.y;
            }
        },
    },
};
</script>
