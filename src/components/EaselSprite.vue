<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import getDimensionsFromGetBounds from '../libs/get-dimensions-from-get-bounds.js';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    mixins: [EaselDisplayObject],
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
        getDimensions() {
            return getDimensionsFromGetBounds(this);
        },
    },
};
</script>
