<script>
import easeljs from '../easel.js';
import _ from 'lodash';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];

export default {
    inject: ['spriteSheet', 'easel'],
    props: ['animation', 'x', 'y'],
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
    destroyed() {
        if (this.easel.stage) {
            this.easel.stage.removeChild(this.sprite);
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
        'x': function () {
            this.sprite.x = this.x;
        },
        'y': function () {
            this.sprite.y = this.y;
        },
    },
    methods: {
        init() {
            this.sprite = new easeljs.Sprite(this.spriteSheet);
            this.addListeners();
            this.sprite.x = this.x;
            this.sprite.y = this.y;
            if (this.animation) {
                this.sprite.gotoAndPlay(this.animation);
            }
            this.easel.stage.addChild(this.sprite);
        },
        addListeners() {
            _.each(eventTypes, type => {
                this.sprite.addEventListener(type, event => this.$emit(type, event));
            });
        },
    },
};
</script>
