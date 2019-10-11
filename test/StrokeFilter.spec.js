import PixelStrokeFilter from '../src/filters/PixelStrokeFilter.js';
import easeljs from '../easeljs/easel.js';
import assert from 'assert';
const {deepStrictEqual: equal} = assert;

const stringify = (data) => {
    return data.map((n, i) => ('0' + n.toString(16)).substr(-2) + (i % 4 === 3 ? ' ' : '')).join('');
};

describe('PixelStrokeFilter', function () {

    it('instantiates', function () {
        new PixelStrokeFilter();
    });

    it('draws a stroke around a tic-tac-toe center', function () {
        const imageData = {
            data: [
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
                0, 0, 0, 0,     255, 255, 255, 255,   0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter().adjustImageData(imageData);
        equal(
            stringify([
                0, 0, 0, 255,     0, 0, 0, 255,           0, 0, 0, 255,
                0, 0, 0, 255,     255, 255, 255, 255,     0, 0, 0, 255,
                0, 0, 0, 255,     0, 0, 0, 255,           0, 0, 0, 255,
            ]),
            stringify(imageData.data)
        );
    });

    it('draws a stroke around a tic-tac-toe bottom-right corner', function () {
        const imageData = {
            data: [
                0, 0, 0, 0,     0, 0, 0, 0,      0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,      0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,      255, 255, 255, 255,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter().adjustImageData(imageData);
        equal(
            stringify([
                0, 0, 0, 0,     0, 0, 0, 0,       0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 255,     0, 0, 0, 255,
                0, 0, 0, 0,     0, 0, 0, 255,     255, 255, 255, 255,
            ]),
            stringify(imageData.data)
        );
    });

    it('draws a stroke around a tic-tac-toe bottom-right corner', function () {
        const imageData = {
            data: [
                255, 255, 255, 255,     0, 0, 0, 0,      0, 0, 0, 0,
                0, 0, 0, 0,             0, 0, 0, 0,      0, 0, 0, 0,
                0, 0, 0, 0,             0, 0, 0, 0,      0, 0, 0, 0,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter().adjustImageData(imageData);
        equal(
            stringify([
                255, 255, 255, 255,     0, 0, 0, 255,    0, 0, 0, 0,
                0, 0, 0, 255,           0, 0, 0, 255,    0, 0, 0, 0,
                0, 0, 0, 0,             0, 0, 0, 0,      0, 0, 0, 0,
            ]),
            stringify(imageData.data)
        );
    });

    it('draws a colored stroke around a colored tic-tac-toe center', function () {
        const rand255 = () => Math.floor(Math.random() * 255);
        const sr = rand255();
        const sg = rand255();
        const sb = rand255();
        const sa = rand255() || 255;
        const pr = rand255();
        const pg = rand255();
        const pb = rand255();
        const pa = rand255() || 255;
        const imageData = {
            data: [
                0, 0, 0, 0,     0, 0, 0, 0,        0, 0, 0, 0,
                0, 0, 0, 0,     pr, pg, pb, pa,    0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,        0, 0, 0, 0,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter([sr, sg, sb, sa]).adjustImageData(imageData);
        equal(
            stringify([
                sr, sg, sb, sa,   sr, sg, sb, sa,   sr, sg, sb, sa,
                sr, sg, sb, sa,   pr, pg, pb, pa,   sr, sg, sb, sa,
                sr, sg, sb, sa,   sr, sg, sb, sa,   sr, sg, sb, sa,
            ]),
            stringify(imageData.data)
        );
    });
});
