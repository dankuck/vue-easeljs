import easeljs from '../../easeljs/easel.js';
import filters from '../filters.js';

const build = filters.build.bind(filters);

export default {
    props: ['filters'],
    mounted() {
        this.cacheWhen(() => this.filters && this.filters.length > 0);
        this.beforeCache(() => {
            if (this.filters && this.filters.length > 0) {
                this.component.filters = this.filters.map(build);
            } else {
                this.component.filters = null;
            }
        });
    },
};
