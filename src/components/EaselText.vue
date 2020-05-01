<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import EaselAlign from '../mixins/EaselAlign.js';
import EaselCache from '../mixins/EaselCache.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';
import EaselFilter from '../mixins/EaselFilter.js';

export default {
    mixins: [EaselDisplayObject, EaselAlign, EaselCache, EaselFilter],
    props: ['text', 'font', 'color'],
    updatesEaselCache: ['text', 'font', 'color', 'scale'],
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
            const [horizontal, vertical] = this.normalizedAlign;
            this.component.textAlign = horizontal || 'left';
            this.component.textBaseline = vertical === 'center' ? 'middle' : (vertical || 'top');
        },
        getAlignDimensions() {
            return this.getCacheBounds();
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
