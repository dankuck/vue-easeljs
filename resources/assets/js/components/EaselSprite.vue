<script>
import easeljs from '../easel.js';
import _ from 'lodash';

export default {
    inject: ['spriteSheet', 'easel'],
    props: ['animation'],
    data() {
        return {
            sprite: null,
        };
    },
    render() {
        return '<!-- sprite -->';
    },
    mounted() {
        if (this.easel.stage) {
            this.init();
        }
    },
    watch: {
        'easel.stage': function () {
            this.init();
        },
        'animation': function () {
            if (this.sprite) {
                this.sprite.gotoAndPlay(this.animation);
            }
        },
    },
    methods: {
        init() {
            this.sprite = new easeljs.Sprite(this.spriteSheet);
            if (this.animation) {
                this.sprite.gotoAndPlay(this.animation);
            }
        },
    },
};
</script>
