import PixelStrokeFilter from '../src/filters/PixelStrokeFilter.js';
import easeljs from '../easeljs/easel.js';
import assert from 'assert';
const {deepStrictEqual: equal} = assert;

const stringify = (data) => {
    return data.map((n, i) => ('0' + n.toString(16)).substr(-2) + (i % 4 === 3 ? ' ' : '')).join('');
};

describe('PixelStrokeFilter', function () {

    it('instantiates', function () {
        new PixelStrokeFilter([], 1, {antiAlias: false});
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
        new PixelStrokeFilter([], 1, {antiAlias: false}).adjustImageData(imageData);
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
        new PixelStrokeFilter([], 1, {antiAlias: false}).adjustImageData(imageData);
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
        new PixelStrokeFilter([], 1, {antiAlias: false}).adjustImageData(imageData);
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
        new PixelStrokeFilter([sr, sg, sb, sa], 1, {antiAlias: false}).adjustImageData(imageData);
        equal(
            stringify([
                sr, sg, sb, sa,   sr, sg, sb, sa,   sr, sg, sb, sa,
                sr, sg, sb, sa,   pr, pg, pb, pa,   sr, sg, sb, sa,
                sr, sg, sb, sa,   sr, sg, sb, sa,   sr, sg, sb, sa,
            ]),
            stringify(imageData.data)
        );
    });

    it('calculates a size 1 circle', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 1);
        const expected = {
            '1': {y: 1, minX: -1, maxX: 1, a: Math.sin(Math.PI / 4)},
            '0': {y: 0, minX: -1, maxX: 1, a: 1},
            '-1': {y: -1, minX: -1, maxX: 1, a: Math.sin(Math.PI / 4)},
        };
        equal(Object.keys(expected).length, filter.brush.length, JSON.stringify(filter.brush));
        filter.brush.forEach(point => {
            equal(expected[point.y], point, JSON.stringify(filter.brush));
        });
    });

    it('calculates a size 2 circle', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 2);
        const expected = {
            '-2': {"y":-2, "minX":-2, "maxX":2, "a":0.41421356237309503},
            '-1': {"y":-1, "minX":-2, "maxX":2, "a":0.8416407864998738},
            '0':  {"y":0, "minX":-2, "maxX":2, "a":1},
            '1':  {"y":1, "minX":-2, "maxX":2, "a":0.8416407864998738},
            '2':  {"y":2, "minX":-2, "maxX":2, "a":0.41421356237309503},
        };
        equal(Object.keys(expected).length, filter.brush.length, JSON.stringify(filter.brush));
        filter.brush.forEach(point => {
            equal(expected[point.y], point, JSON.stringify(filter.brush));
        });
    });

    it('calculates a size 20 circle', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 20);
        const expected = {
            '-20': {"y":-20,"minX":0,"maxX":0,"a":1},
            '-19': {"y":-19,"minX":-7,"maxX":7,"a":0.7},
            '-18': {"y":-18,"minX":-9,"maxX":9,"a":0.9},
            '-17': {"y":-17,"minX":-11,"maxX":11,"a":0.8},
            '-16': {"y":-16,"minX":-12,"maxX":12,"a":1},
            '-15': {"y":-15,"minX":-15,"maxX":15,"a":0.1},
            '-14': {"y":-14,"minX":-15,"maxX":15,"a":0.6},
            '-13': {"y":-13,"minX":-16,"maxX":16,"a":0.6},
            '-12': {"y":-12,"minX":-16,"maxX":16,"a":1},
            '-11': {"y":-11,"minX":-17,"maxX":17,"a":0.8},
            '-10': {"y":-10,"minX":-18,"maxX":18,"a":0.6},
            '-9': {"y":-9,"minX":-18,"maxX":18,"a":0.9},
            '-8': {"y":-8,"minX":-19,"maxX":19,"a":0.5},
            '-7': {"y":-7,"minX":-19,"maxX":19,"a":0.7},
            '-6': {"y":-6,"minX":-20,"maxX":20,"a":0.5},
            '-5': {"y":-5,"minX":-20,"maxX":20,"a":0.6},
            '-4': {"y":-4,"minX":-20,"maxX":20,"a":0.8},
            '-3': {"y":-3,"minX":-20,"maxX":20,"a":0.9},
            '-2': {"y":-2,"minX":-20,"maxX":20,"a":0.9},
            '-1': {"y":-1,"minX":-20,"maxX":20,"a":1},
            '0': {"y":0,"minX":-20,"maxX":20,"a":1},
            '1': {"y":1,"minX":-20,"maxX":20,"a":1},
            '2': {"y":2,"minX":-20,"maxX":20,"a":0.9},
            '3': {"y":3,"minX":-20,"maxX":20,"a":0.9},
            '4': {"y":4,"minX":-20,"maxX":20,"a":0.8},
            '5': {"y":5,"minX":-20,"maxX":20,"a":0.6},
            '6': {"y":6,"minX":-20,"maxX":20,"a":0.5},
            '7': {"y":7,"minX":-19,"maxX":19,"a":0.7},
            '8': {"y":8,"minX":-19,"maxX":19,"a":0.5},
            '9': {"y":9,"minX":-18,"maxX":18,"a":0.9},
            '10': {"y":10,"minX":-18,"maxX":18,"a":0.6},
            '11': {"y":11,"minX":-17,"maxX":17,"a":0.8},
            '12': {"y":12,"minX":-16,"maxX":16,"a":1},
            '13': {"y":13,"minX":-16,"maxX":16,"a":0.6},
            '14': {"y":14,"minX":-15,"maxX":15,"a":0.6},
            '15': {"y":15,"minX":-15,"maxX":15,"a":0.1},
            '16': {"y":16,"minX":-12,"maxX":12,"a":1},
            '17': {"y":17,"minX":-11,"maxX":11,"a":0.8},
            '18': {"y":18,"minX":-9,"maxX":9,"a":0.9},
            '19': {"y":19,"minX":-7,"maxX":7,"a":0.7},
            '20': {"y":20,"minX":0,"maxX":0,"a":1},
        };
        equal(Object.keys(expected).length, filter.brush.length, JSON.stringify(filter.brush));
        filter.brush.map(({y, minX, maxX, a}) => { return {y, minX, maxX, a: Math.round(a * 10) / 10}; })
            .forEach(point => {
                equal(expected[point.y], point, JSON.stringify({expected: expected[point.y], actual: point}));
            });
    });

    it('expands a rectangle to include radius of brush', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 20);
        const sourceRect = new easeljs.Rectangle(0, 0, 100, 100);
        const rect = filter.getBounds(sourceRect);
        equal(
            new easeljs.Rectangle(-40, -40, 180, 180),
            rect
        );
        assert(sourceRect === rect);
    });

    it('creates a rectangle to include radius of brush', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 20);
        const rect = filter.getBounds();
        equal(
            new easeljs.Rectangle(-40, -40, 80, 80),
            rect
        );
    });

    it('draws an anti-aliased stroke around a tic-tac-toe center', function () {
        const imageData = {
            data: [
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
                0, 0, 0, 0,     255, 255, 255, 255,   0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter([], 1, {antiAlias: true}).adjustImageData(imageData);
        const cosine_of_45_degrees = .707;
        const alpha = Math.round(255 * cosine_of_45_degrees);
        equal(
            stringify([
                0, 0, 0, alpha,     0, 0, 0, 255,           0, 0, 0, alpha,
                0, 0, 0, 255,       255, 255, 255, 255,     0, 0, 0, 255,
                0, 0, 0, alpha,     0, 0, 0, 255,           0, 0, 0, alpha,
            ]),
            stringify(imageData.data)
        );
    });

    it('draws an anti-aliased stroke around a half-alpha tic-tac-toe center', function () {
        const imageData = {
            data: [
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
                0, 0, 0, 0,     255, 255, 255, 127,   0, 0, 0, 0,
                0, 0, 0, 0,     0, 0, 0, 0,           0, 0, 0, 0,
            ],
            width: 3,
            height: 3,
        };
        new PixelStrokeFilter([], 1, {antiAlias: true}).adjustImageData(imageData);
        const cosine_of_45_degrees = .707;
        const alpha = Math.round(255 * cosine_of_45_degrees);
        equal(
            stringify([
                0, 0, 0, alpha,     0, 0, 0, 255,           0, 0, 0, alpha,
                0, 0, 0, 255,       255, 255, 255, 127,     0, 0, 0, 255,
                0, 0, 0, alpha,     0, 0, 0, 255,           0, 0, 0, alpha,
            ]),
            stringify(imageData.data)
        );
    });
});
