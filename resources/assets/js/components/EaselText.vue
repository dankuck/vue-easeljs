<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    mixins: [EaselDisplayObject],
    props: ['text', 'font', 'color'],
    render() {
        return '<!-- text -->';
    },
    watch: {
        text() {
            this.component.text = this.text;
        },
        font() {
            this.component.font = this.font;
        },
        color() {
            this.component.color = this.color;
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Text(this.text, this.font, this.color);
            this.displayObjectInit();
        },
    },
};
</script>
