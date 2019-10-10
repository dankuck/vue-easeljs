import easeljs from '../easeljs/easel.js';
import FilterSet from './filters/FilterSet.js';
import ColorMatrixFilter from './filters/ColorMatrixFilter.js';

const filters = new FilterSet();

filters.register('AlphaMapFilter', easeljs.AlphaMapFilter);
filters.register('AlphaMaskFilter', easeljs.AlphaMaskFilter);
filters.register('BlurFilter', easeljs.BlurFilter);
filters.register('ColorFilter', easeljs.ColorFilter);
filters.register('ColorMatrixFilter', ColorMatrixFilter);

export default filters;
