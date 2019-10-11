import easeljs from '../easeljs/easel.js';
import FilterSet from './filters/FilterSet.js';
import ColorMatrixFilter from './filters/ColorMatrixFilter.js';
import PixelStrokeFilter from './filters/PixelStrokeFilter.js';

const filters = new FilterSet();

filters.register('BlurFilter', easeljs.BlurFilter);
filters.register('ColorFilter', easeljs.ColorFilter);
filters.register('ColorMatrixFilter', ColorMatrixFilter);
filters.register('PixelStrokeFilter', PixelStrokeFilter);

export default filters;
