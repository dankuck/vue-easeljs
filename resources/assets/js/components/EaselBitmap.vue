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
    },
};
</script>
