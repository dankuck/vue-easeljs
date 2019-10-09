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
        filters[name] = Filter;
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
