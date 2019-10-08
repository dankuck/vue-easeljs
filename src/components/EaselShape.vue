<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import EaselCache from '../mixins/EaselCache.js';
import EaselFilter from '../mixins/EaselFilter.js';
import EaselAlign from '../mixins/EaselAlign.js';

export default {
    mixins: [EaselDisplayObject, EaselAlign, EaselCache, EaselFilter],
    props: ['form', 'fill', 'stroke', 'dimensions'],
    updatesEaselCache: ['form', 'fill', 'stroke', 'dimensions'],
    render() {
        return '<!-- shape -->';
    },
    watch: {
        form() {       this.refresh() },
        fill() {       this.refresh() },
        stroke() {     this.refresh() },
        dimensions() { this.refresh() },
    },
    computed: {
        radiuses() {
            // If no radius dimensions were given, empty array.
            // If 4 radius dimensions were given, use them.
            // Otherwise, assume just 1 radius dimension was given
            // and use it four times
            if (this.dimensions.length <= 2) {
                return [];
            } else if (this.dimensions.length === 6) {
                return this.dimensions.slice(2, 6);
            } else {
                return [this.dimensions[2], this.dimensions[2], this.dimensions[2], this.dimensions[2]];
            }
        },
    },
    mounted() {
        this.component = new easeljs.Shape();
        this.refresh();
    },
    methods: {
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
                const radiuses = this.radiuses;
                // If no radius dimensions were given, draw a rectangle.
                if (radiuses.length === 0) {
                    this.component.graphics.drawRect(0, 0, this.dimensions[0], this.dimensions[1]);
                } else {
                    this.component.graphics.drawRoundRectComplex(0, 0, this.dimensions[0], this.dimensions[1], radiuses[0], radiuses[1], radiuses[2], radiuses[3]);
                }
            } else if (this.form === 'star') {
                this.component.graphics.drawPolyStar(this.dimensions[0], this.dimensions[0], this.dimensions[0], this.dimensions[1], this.dimensions[2], 0);
            }
        },
        getAlignDimensions() {
            if (this.form === 'rect' || this.form === 'ellipse') {
                return Promise.resolve({
                    width: this.dimensions[0],
                    height: this.dimensions[1],
                });
            } else if (this.form === 'circle') {
                return Promise.resolve({
                    width: this.dimensions * 2,
                    height: this.dimensions * 2,
                });
            } else if (this.form === 'star') {
                return Promise.resolve({
                    width: this.dimensions[0] * 2,
                    height: this.dimensions[0] * 2,
                });
            } else {
                return Promise.reject(`No dimensions available for form ${this.form}`);
            }
        },
        getCacheBounds() {
            return this.updateAlign() // make sure that's in place
                .then(({width, height}) => {
                    return {
                        x: 0,
                        y: 0,
                        width,
                        height,
                    };
                });
        },
    },
};
</script>
