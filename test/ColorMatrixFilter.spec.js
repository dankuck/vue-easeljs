import ColorMatrixFilter from '../src/filters/ColorMatrixFilter.js';
import easeljs from '../easeljs/easel.js';
import assert from 'assert';
const {deepStrictEqual: equal} = assert;

describe('ColorMatrixFilter', function () {

    it('instantiates', function () {
        new ColorMatrixFilter();
    });

    it('has a ColorMatrix', function () {
        const filter = new ColorMatrixFilter(1, 2, 3, 4);
        assert(filter.matrix);
        equal(filter.matrix.toArray(), new easeljs.ColorMatrix(1, 2, 3, 4).toArray());
    });
});
