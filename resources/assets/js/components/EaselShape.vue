<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    mixins: [EaselDisplayObject],
    props: ['form', 'fill', 'stroke', 'dimensions', 'showCenter'],
    render() {
        return '<!-- shape -->';
    },
    watch: {
        form() {       this.refresh() },
        fill() {       this.refresh() },
        dimensions() { this.refresh() },
    },
    methods: {
        init() {
            this.component = new easeljs.Shape();
            this.refresh();
            this.displayObjectInit();
        },
        refresh() {
            if (this.component) {
                this.component.graphics.clear();
                if (this.fill) {
                    this.component.graphics.beginFill(this.fill);
                }
                if (this.stroke) {
                    this.component.graphics.beginStroke(this.stroke);
                }
                this.drawForm();
            }
        },
        drawForm() {
            if (this.form === 'circle') {
                this.component.graphics.drawCircle(0, 0, this.dimensions);
            } else if (this.form === 'ellipse') {
                this.component.graphics.drawEllipse(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1]);
            } else if (this.form === 'rect') {
                // If no radius dimensions were given, draw a rectangle.
                if (this.dimensions.length === 2) {
                    this.component.graphics.drawRect(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1]);
                } else {
                    var radiuses;
                    // If 4 radius dimensions were given, use them.
                    // Otherwise, assume just 1 radius dimension was given 
                    // and use it four times
                    if (this.dimensions.length === 6) {
                        radiuses = this.dimensions.slice(2, 6);
                    } else {
                        radiuses = [this.dimensions[2], this.dimensions[2], this.dimensions[2], this.dimensions[2]];
                    }
                    this.component.graphics.drawRoundRectComplex(-this.dimensions[0] / 2, -this.dimensions[1] / 2, this.dimensions[0], this.dimensions[1], radiuses[0], radiuses[1], radiuses[2], radiuses[3]);
                }
            } else if (this.form === 'star') {
                this.component.graphics.drawPolyStar(0, 0, this.dimensions[0], this.dimensions[1], this.dimensions[2], 0);
            }

            if (this.showCenter) {
                this.component.graphics.beginFill('black').drawCircle(0, 0, 1);
            }
        },
    },
};
</script>
