<script>
import easeljs from '../easel.js';
import EaselEventBinder from '../EaselEventBinder.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    inject: ['spriteSheet', 'easel'],
    props: ['animation'],
    mixins: [EaselDisplayObject],
    data() {
        return {
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
            this.easel.stage.removeChild(this.component);
        }
    },
    watch: {
        'easel.stage': function () {
            this.init();
        },
        'animation': function () {
            if (this.component) {
                this.component.gotoAndPlay(this.animation);
            }
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Sprite(this.spriteSheet);
            this.displayObjectInit();
            EaselEventBinder.bindEvents(this, this.component);
            if (this.animation) {
                this.component.gotoAndPlay(this.animation);
            }
            this.easel.stage.addChild(this.component);
        },
    },
};
</script>
