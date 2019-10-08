import easeljs from '../../easeljs/easel.js';
import VueEaseljs from '../../src/index.js';

export default {
    props: ['filters'],
    mounted() {
        this.cacheWhen(() => this.filters && this.filters.length > 0);
        this.beforeCache(() => {
            if (this.filters && this.filters.length > 0) {
                this.component.filters = this.filters.map(VueEaseljs.buildFilter);
            }
        });
    },
};
