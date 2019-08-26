<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import EaselAlign from '../mixins/EaselAlign.js';
import EaselCache from '../mixins/EaselCache.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';

export default {
    mixins: [EaselDisplayObject, EaselAlign, EaselCache],
    props: ['text', 'font', 'color'],
    updatesEaselCache: ['text', 'font', 'color'],
    render() {
        return '<!-- text -->';
    },
    watch: {
        text() {
            this.component.text = this.text;
        },
        font() {
            this.component.font = this.font;
        },
        color() {
            this.component.color = this.color;
        },
    },
    mounted() {
        this.component = new easeljs.Text(this.text, this.font, this.color);
    },
    methods: {
        updateAlign() {
            this.component.textAlign = this.normalizedAlign[0] || 'left';
            const vertical = this.normalizedAlign[1] || 'top';
            this.component.textBaseline = vertical === 'center' ? 'middle' : vertical;
        },
        getCacheBounds() {
            return getDimensionsFromGetBounds(this)
                .then(({x, y, width, height}) => {
                    return {x, y, width, height};
                });
        },
    },
};
</script>
