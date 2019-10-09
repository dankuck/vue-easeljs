import easeljs from '../../easeljs/easel.js';

const filters = {
    AlphaMapFilter:    easeljs.AlphaMapFilter,
    AlphaMaskFilter:   easeljs.AlphaMaskFilter,
    BlurFilter:        easeljs.BlurFilter,
    ColorFilter:       easeljs.ColorFilter,
    ColorMatrixFilter: easeljs.ColorMatrixFilter,
};

export default {
    registerFilter(name, Filter) {
        if (Filter.prototype.applyFilter || Filter.prototype._applyFilter) {
            filters[name] = Filter;
        } else {
            const Wrapper = function Wrapper() {
                Filter.apply(this, arguments);
            };
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
            filters[name] = Wrapper;

        }
    },
    buildFilter(filterArray) {
        const filterName = filterArray[0];
        const args = [null, ...filterArray.slice(1)];
        const Filter = filters[filterName];
        if (!Filter) {
            throw new Error(`No such filter registered: ${filterName}`);
        }
        return new (Function.prototype.bind.apply(Filter, args));
    },
};
