<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';
import EaselAlign from '../mixins/EaselAlign.js';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    mixins: [EaselDisplayObject, EaselAlign],
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
    },
};
</script>
