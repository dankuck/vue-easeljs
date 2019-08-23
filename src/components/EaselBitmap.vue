<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';
import EaselAlign from '../mixins/EaselAlign.js';
import EaselCache from '../mixins/EaselCache.js';

export default {
    props: ['image'],
    updatesEaselCache: ['component'],
    mixins: [EaselDisplayObject, EaselAlign, EaselCache],
    render() {
        return '<!-- bitmap -->';
    },
    watch: {
        image() {
            if (this.component) {
                this.init();
            }
        },
    },
    methods: {
        init() {
            if (this.component) {
                this.displayObjectBreakdown();
            }
            this.component = new easeljs.Bitmap(this.image);
            this.displayObjectInit();
        },
        getAlignDimensions() {
            return getDimensionsFromGetBounds(this);
        },
        getCacheBounds() {
            return getDimensionsFromGetBounds(this)
                .then(({width, height}) => {
                    return {
                        x: this.component.regX,
                        y: this.component.regY,
                        width,
                        height,
                    };
                });
        },
    },
};
</script>
