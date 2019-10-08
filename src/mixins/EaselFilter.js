import easeljs from '../../easeljs/easel.js';

export default {
    props: ['filters'],
    mounted() {
        this.$watch('component', () => {
            this.updateFilters();
        });
        this.$watch('filters', () => {
            this.updateFilters();
        }, {immediate: true});
    },
    methods: {
        updateFilters() {
            if (this.filters) {
                this.component.filters = this.filters.map(filterArray => {
                    const filterName = filterArray[0];
                    const args = [null, ...filterArray.slice(1)];
                    const Filter = easeljs[filterName];
                    return new (Function.prototype.bind.apply(Filter, args));
                });
            }
        },
    },
};
