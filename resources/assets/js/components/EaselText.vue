<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    mixins: [EaselDisplayObject],
    props: ['text'],
    render() {
        return '<!-- text -->';
    },
    watch: {
        text() {
            this.component.text = this.text;
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Text(this.text);
            this.displayObjectInit();
        },
    },
};
</script>
