import easeljs from '../../easeljs/easel.js';

export default {
    props: ['filters'],
    mounted() {
        this.cacheWhen(() => this.filters && this.filters.length > 0);
        this.beforeCache(() => {
            if (this.filters && this.filters.length > 0) {
                this.component.filters = this.filters.map(filterArray => {
                    const filterName = filterArray[0];
                    const args = [null, ...filterArray.slice(1)];
                    const Filter = easeljs[filterName];
                    if (!Filter) {
                        throw new Error(`No such filter registered: ${filterName}`);
                    }
                    return new (Function.prototype.bind.apply(Filter, args));
                });
            }
        });
    },
};
