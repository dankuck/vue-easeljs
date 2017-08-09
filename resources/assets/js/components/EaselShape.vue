<template>
    <span></span>
</template>

<script>
import easeljs from '../easel.js';
export default {
    inject: ['easel'],
    props: ['x', 'y', 'form', 'fill', 'dimensions', 'showCenter'],
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
                this.drawForm();
                this.shape.x = this.x;
                this.shape.y = this.y;
            }
        },
        drawForm() {
            if (this.form === 'circle') {
                this.shape.graphics.drawCircle(0, 0, this.dimensions);
            } else if (this.form === 'ellipse') {
                this.shape.graphics.drawEllipse(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1]);
            } else if (this.form === 'rect') {
                this.shape.graphics.drawRect(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1]);
            } else if (this.form === 'round-rect') {
                var radiuses;
                // If 4 radius dimensions were given, use them.
                // Otherwise, assume just 1 radius dimension was given 
                // and use it four times
                if (this.dimensions.length === 6) {
                    radiuses = this.dimensions.slice(2, 6);
                } else {
                    radiuses = [this.dimensions[2], this.dimensions[2], this.dimensions[2], this.dimensions[2]];
                }
                this.shape.graphics.drawRoundRectComplex(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1], radiuses[0], radiuses[1], radiuses[2], radiuses[3]);
            } else if (this.form === 'star') {
                this.shape.graphics.drawPolyStar(0, 0, this.dimensions[0], this.dimensions[1], this.dimensions[2], 0);
            }

            if (this.showCenter) {
                this.shape.graphics.beginFill('black').drawCircle(0, 0, 1);
            }
        },
    },
};
</script>
