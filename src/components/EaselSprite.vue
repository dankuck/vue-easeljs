<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';

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
        getBounds() {
            return new Promise((resolve, error) => {
                const getBounds = () => {
                    try {
                        if (!this.component) {
                            // Component not initialized or went away, abandon
                            // Promise
                            clearInterval(waiting);
                        } else if (this.component.getBounds()) {
                            // Got the bounds, resolve with them
                            clearInterval(waiting);
                            resolve(this.component.getBounds());
                        }
                        // else Keep waiting...
                    } catch (e) {
                        clearInterval(waiting);
                        throw e;
                    }
                }
                const waiting = setInterval(getBounds, 100);
                getBounds();
            });
        },
    },
};
</script>
