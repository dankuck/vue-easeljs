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
    watch: {
        'easel.stage': function () {
            this.shape = new easeljs.Shape();
            this.refresh();
            this.easel.stage.addChild(this.shape);
        },
        x() {          this.refresh() },
        y() {          this.refresh() },
        shape() {      this.refresh() },
        file() {       this.refresh() },
        dimensions() { this.refresh() },
    },
    methods: {
        refresh() {
            console.log('refreshing shape');
            if (this.shape) {
                console.log('yes we have a shape');
                this.shape.graphics.beginFill(this.fill);
                if (this.form === 'circle') {
                    this.shape.graphics.drawCircle(this.dimensions[0], this.dimensions[1], this.dimensions[2]);
                }
                this.shape.x = this.x;
                this.shape.y = this.y;
            }
        },
    },
};
</script>
