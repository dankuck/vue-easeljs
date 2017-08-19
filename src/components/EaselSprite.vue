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
        getBounds() {
            return new Promise((resolve, error) => {
                var getBounds = () => {
                    try {
                        if (!this.component) {
                            clearInterval(waiting);
                        } else if (this.component.getBounds()) {
                            clearInterval(waiting);
                            resolve(this.component.getBounds());
                        }
                    } catch (e) {
                        clearInterval(waiting);
                        throw e;
                    }
                }
                var waiting = setInterval(getBounds, 100);
                getBounds();
            });
        },
    },
};
</script>
