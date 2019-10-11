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
                easeljs.Filter.apply(this);
                Filter.apply(this, arguments);
            };
            for (let field in easeljs.Filter.prototype) {
                Wrapper.prototype[field] = easeljs.Filter.prototype[field];
            }
            for (let field in Filter.prototype) {
                Wrapper.prototype[field] = Filter.prototype[field];
            }
            if (Wrapper.prototype.adjustContext) {
                Wrapper.prototype.usesContext = true;
                Wrapper.prototype.applyFilter = function (ctx, x, y, w, h, tctx, tx, ty) {
                    return this.adjustContext(ctx, x, y, w, h, tctx, tx, ty);
                };
            } else if (Wrapper.prototype.adjustImageData) {
                Wrapper.prototype.usesContext = false;
                Wrapper.prototype._applyFilter = function (imageData) {
                    return this.adjustImageData(imageData);
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
