<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';

export default {
    mixins: [EaselDisplayObject],
    props: ['form', 'fill', 'stroke', 'dimensions'],
    render() {
        return '<!-- shape -->';
    },
    watch: {
        form() {       this.refresh() },
        fill() {       this.refresh() },
        stroke() {     this.refresh() },
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
                this.updateAlign();
            }
        },
        drawForm() {
            if (this.form === 'circle') {
                this.component.graphics.drawCircle(this.dimensions, this.dimensions, this.dimensions);
            } else if (this.form === 'ellipse') {
                this.component.graphics.drawEllipse(0, 0, this.dimensions[0], this.dimensions[1]);
            } else if (this.form === 'rect') {
                // If no radius dimensions were given, draw a rectangle.
                if (this.dimensions.length === 2) {
                    this.component.graphics.drawRect(0, 0, this.dimensions[0], this.dimensions[1]);
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
                    this.component.graphics.drawRoundRectComplex(0, 0, this.dimensions[0], this.dimensions[1], radiuses[0], radiuses[1], radiuses[2], radiuses[3]);
                }
            } else if (this.form === 'star') {
                this.component.graphics.drawPolyStar(this.dimensions[0], this.dimensions[0], this.dimensions[0], this.dimensions[1], this.dimensions[2], 0);
            }
        },
        getBounds() {
            if (this.form === 'rect' || this.form === 'ellipse') {
                return Promise.resolve(new easeljs.Rectangle(0, 0, this.dimensions[0], this.dimensions[1]));
            } else if (this.form === 'circle') {
                return Promise.resolve(new easeljs.Rectangle(0, 0, this.dimensions * 2, this.dimensions * 2));
            } else if (this.form === 'star') {
                return Promise.resolve(new easeljs.Rectangle(0, 0, this.dimensions[0] * 2, this.dimensions[0] * 2));
            }
            return Promise.reject('No bounds available');
        },
    },
};
</script>
