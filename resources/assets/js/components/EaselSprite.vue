<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    mixins: [EaselDisplayObject],
    data() {
        return {
        };
    },
    render() {
        return '<!-- sprite -->';
    },
    watch: {
        'animation': function () {
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
    },
};
</script>
