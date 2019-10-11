import easeljs from '../easeljs/easel.js';
import FilterSet from './filters/FilterSet.js';
import ColorMatrixFilter from './filters/ColorMatrixFilter.js';
import StrokeFilter from './filters/StrokeFilter.js';

const filters = new FilterSet();

filters.register('BlurFilter', easeljs.BlurFilter);
filters.register('ColorFilter', easeljs.ColorFilter);
filters.register('ColorMatrixFilter', ColorMatrixFilter);
filters.register('StrokeFilter', StrokeFilter);

export default filters;
