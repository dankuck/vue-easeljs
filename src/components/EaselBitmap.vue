<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';

export default {
    props: ['image'],
    mixins: [EaselDisplayObject],
    render() {
        return '<!-- bitmap -->';
    },
    watch: {
        image() {
            if (this.component) {
                this.init();
            }
        },
    },
    methods: {
        init() {
            if (this.component) {
                this.displayObjectBreakdown();
            }
            this.component = new easeljs.Bitmap(this.image);
            this.displayObjectInit();
        },
        getBounds() {
            return new Promise((resolve, error) => {
                const getBounds = () => {
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
                const waiting = setInterval(getBounds, 100);
                getBounds();
            });
        },
    },
};
</script>
