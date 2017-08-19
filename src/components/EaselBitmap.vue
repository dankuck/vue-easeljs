<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

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
