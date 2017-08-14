<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    inject: ['spriteSheet'],
    props: ['animation'],
    mixins: [EaselDisplayObject],
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
        updateAlign() {
            var w = this.spriteSheet._frameWidth,
                h = this.spriteSheet._frameHeight,
                hAlign = (this.align && this.align[0]) || 'center',
                vAlign = (this.align && this.align[1]) || 'bottom';
            if (hAlign === 'left') {
                this.component.regX = 0;
            } else if (hAlign === 'center') {
                this.component.regX = w / 2;
            } else if (hAlign === 'right') {
                this.component.regX = w;
            }
            if (vAlign === 'top') {
                this.component.regY = 0;
            } else if (vAlign === 'center') {
                this.component.regY = h / 2;
            } else if (vAlign === 'bottom') {
                this.component.regY = h;
            }
        },
    },
};
</script>
