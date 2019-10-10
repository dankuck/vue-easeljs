import easeljs from '../../easeljs/easel.js';

export default class FilterSet {

    constructor() {
        this.filters = [];
    }

    register(name, Filter) {
        if (Filter.prototype.applyFilter) {
            this.filters[name] = Filter;
        } else {
            const Wrapper = function Wrapper () {
                Filter.apply(this, arguments);
            };
            easeljs.extend(Wrapper, easeljs.Filter);
            const {adjustContext, adjustImageData} = Filter.prototype;
            if (adjustContext) {
                Wrapper.prototype.usesContext = true;
                Wrapper.prototype.applyFilter = function () {
                    return adjustContext.apply(this, arguments);
                };
            } else if (adjustImageData) {
                Wrapper.prototype.usesContext = false;
                Wrapper.prototype._applyFilter = function () {
                    return adjustImageData.apply(this, arguments);
                };
            } else {
                throw new Error('Incompatible filter');
            }
            this.filters[name] = Wrapper;
        }
    }

    build(filterArray) {
        const filterName = filterArray[0];
        const args = [null, ...filterArray.slice(1)];
        const Filter = this.filters[filterName];
        if (!Filter) {
            throw new Error(`No such filter registered: ${filterName}`);
        }
        return new (Function.prototype.bind.apply(Filter, args));
    }
};
