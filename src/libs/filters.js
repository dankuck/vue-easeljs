import easeljs from '../../easeljs/easel.js';
import FilterSet from './FilterSet.js';

const filters = new FilterSet();

filters.register('AlphaMapFilter', easeljs.AlphaMapFilter);
filters.register('AlphaMaskFilter', easeljs.AlphaMaskFilter);
filters.register('BlurFilter', easeljs.BlurFilter);
filters.register('ColorFilter', easeljs.ColorFilter);
filters.register('ColorMatrixFilter', easeljs.ColorMatrixFilter);

export default filters;
