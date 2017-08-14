<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    mixins: [EaselDisplayObject],
    props: ['text', 'font', 'color', 'align'],
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
        align() {
            this.component.textAlign = this.align[0];
            this.component.textBaseline = this.align[1] || 'alphabetic';
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Text(this.text, this.font, this.color);
            if (this.align) {
                this.component.textAlign = this.align[0];
                this.component.textBaseline = this.align[1] || 'alphabetic';
            }
            this.displayObjectInit();
        },
    },
};
</script>
