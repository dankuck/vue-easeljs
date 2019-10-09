import easeljs from '../../easeljs/easel.js';
import filters from '../libs/filters.js';

export default {
    props: ['filters'],
    mounted() {
        this.cacheWhen(() => this.filters && this.filters.length > 0);
        this.beforeCache(() => {
            if (this.filters && this.filters.length > 0) {
                this.component.filters = this.filters.map(filters.buildFilter);
            } else {
                this.component.filters = null;
            }
        });
    },
};
