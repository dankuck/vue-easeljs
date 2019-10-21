<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';
import EaselAlign from '../mixins/EaselAlign.js';
import EaselCache from '../mixins/EaselCache.js';
import EaselFilter from '../mixins/EaselFilter.js';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    updatesEaselCache: ['animation', 'scale'],
    mixins: [EaselDisplayObject, EaselAlign, EaselCache, EaselFilter],
    render() {
        return '<!-- sprite -->';
    },
    watch: {
        animation() {
            if (this.component) {
                this.component.gotoAndPlay(this.animation);
            }
        },
    },
    mounted() {
        this.component = new easeljs.Sprite(this.spriteSheet);
        if (this.animation) {
            this.component.gotoAndPlay(this.animation);
        }
    },
    methods: {
        getAlignDimensions() {
            return getDimensionsFromGetBounds(this);
        },
        getCacheBounds() {
            return this.updateAlign()
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
