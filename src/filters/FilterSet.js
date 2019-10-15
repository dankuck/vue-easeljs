import easeljs from '../../easeljs/easel.js';

export default class FilterSet {

    constructor() {
        this.filters = [];
    }

    register(name, Filter) {
        if (Filter.prototype.applyFilter) {
            this.filters[name] = Filter;
        } else {
            const prototype = Filter.prototype || Filter.constructor.prototype;
            if (prototype.adjustContext) {
                prototype.usesContext = true;
                prototype.applyFilter = function (ctx, x, y, w, h, tctx, tx, ty) {
                    return this.adjustContext(ctx, x, y, w, h, tctx, tx, ty);
                };
            } else if (prototype.adjustImageData) {
                prototype.usesContext = false;
                prototype._applyFilter = function (imageData) {
                    return this.adjustImageData(imageData);
                };
            } else {
                throw new Error('Incompatible filter');
            }
            for (let field in easeljs.Filter.prototype) {
                if (!prototype[field]) {
                    prototype[field] = easeljs.Filter.prototype[field];
                }
            }
            this.filters[name] = Filter;
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
