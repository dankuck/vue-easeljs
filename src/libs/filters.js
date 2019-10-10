import easeljs from '../../easeljs/easel.js';
import FilterSet from './FilterSet.js';

const filters = new FilterSet();

[
    'AlphaMapFilter',
    'AlphaMaskFilter',
    'BlurFilter',
    'ColorFilter',
    'ColorMatrixFilter',
].forEach(name => filters.register(name, easeljs[name]));

export default {
    register: filters.register.bind(filters),
    build: filters.build.bind(filters),
};
