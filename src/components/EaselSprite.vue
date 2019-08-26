<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';
import EaselAlign from '../mixins/EaselAlign.js';
import EaselCache from '../mixins/EaselCache.js';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    updatesEaselCache: ['animation'],
    mixins: [EaselDisplayObject, EaselAlign, EaselCache],
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
    methods: {
        init() {
            this.component = new easeljs.Sprite(this.spriteSheet);
            if (this.animation) {
                this.component.gotoAndPlay(this.animation);
            }
            this.displayObjectInit();
        },
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
