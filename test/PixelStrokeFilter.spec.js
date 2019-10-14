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
            '-20': {"y":-20, "minX":0, "maxX":0, "a":1},
            '-19': {"y":-19, "minX":-7, "maxX":7, "a":0.7420878109412348},
            '-18': {"y":-18, "minX":-9, "maxX":9, "a":0.9164078649987388},
            '-17': {"y":-17, "minX":-11, "maxX":11, "a":0.8343196689605117},
            '-16': {"y":-16, "minX":-12, "maxX":12, "a":1},
            '-15': {"y":-15, "minX":-15, "maxX":15, "a":0.14213562373095012},
            '-14': {"y":-14, "minX":-15, "maxX":15, "a":0.6374889550910687},
            '-13': {"y":-13, "minX":-16, "maxX":16, "a":0.5958773785499982},
            '-12': {"y":-12, "minX":-16, "maxX":16, "a":1},
            '-11': {"y":-11, "minX":-17, "maxX":17, "a":0.8343196689605117},
            '-10': {"y":-10, "minX":-18, "maxX":18, "a":0.5813465844880294},
            '-9':  {"y":-9, "minX":-18, "maxX":18, "a":0.9164078649987388},
            '-8':  {"y":-8, "minX":-19, "maxX":19, "a":0.4986736723936298},
            '-7':  {"y":-7, "minX":-19, "maxX":19, "a":0.7420878109412348},
            '-6':  {"y":-6, "minX":-20, "maxX":20, "a":0.4517417078749686},
            '-5':  {"y":-5, "minX":-20, "maxX":20, "a":0.6267812518166496},
            '-4':  {"y":-4, "minX":-20, "maxX":20, "a":0.7669681082910411},
            '-3':  {"y":-3, "minX":-20, "maxX":20, "a":0.8727680579854207},
            '-2':  {"y":-2, "minX":-20, "maxX":20, "a":0.9454090923098815},
            '-1':  {"y":-1, "minX":-20, "maxX":20, "a":0.9868995582173695},
            '0':   {"y":0, "minX":-20, "maxX":20, "a":1},
            '1':   {"y":1, "minX":-20, "maxX":20, "a":0.9868995582173695},
            '2':   {"y":2, "minX":-20, "maxX":20, "a":0.9454090923098815},
            '3':   {"y":3, "minX":-20, "maxX":20, "a":0.8727680579854207},
            '4':   {"y":4, "minX":-20, "maxX":20, "a":0.7669681082910411},
            '5':   {"y":5, "minX":-20, "maxX":20, "a":0.6267812518166496},
            '6':   {"y":6, "minX":-20, "maxX":20, "a":0.4517417078749686},
            '7':   {"y":7, "minX":-19, "maxX":19, "a":0.7420878109412348},
            '8':   {"y":8, "minX":-19, "maxX":19, "a":0.4986736723936298},
            '9':   {"y":9, "minX":-18, "maxX":18, "a":0.9164078649987388},
            '10':  {"y":10, "minX":-18, "maxX":18, "a":0.5813465844880294},
            '11':  {"y":11, "minX":-17, "maxX":17, "a":0.8343196689605117},
            '12':  {"y":12, "minX":-16, "maxX":16, "a":1},
            '13':  {"y":13, "minX":-16, "maxX":16, "a":0.5958773785499982},
            '14':  {"y":14, "minX":-15, "maxX":15, "a":0.6374889550910687},
            '15':  {"y":15, "minX":-15, "maxX":15, "a":0.14213562373095012},
            '16':  {"y":16, "minX":-12, "maxX":12, "a":1},
            '17':  {"y":17, "minX":-11, "maxX":11, "a":0.8343196689605117},
            '18':  {"y":18, "minX":-9, "maxX":9, "a":0.9164078649987388},
            '19':  {"y":19, "minX":-7, "maxX":7, "a":0.7420878109412348},
            '20':  {"y":20, "minX":0, "maxX":0, "a":1},
        };
        equal(Object.keys(expected).length, filter.brush.length, JSON.stringify(filter.brush));
        filter.brush.forEach(point => {
            equal(expected[point.y], point, JSON.stringify(filter.brush));
        });
    });

    it('expands a rectangle to include radius of brush', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 20);
        const sourceRect = new easeljs.Rectangle(0, 0, 100, 100);
        const rect = filter.getBounds(sourceRect);
        equal(
            new easeljs.Rectangle(-20, -20, 140, 140),
            rect
        );
        assert(sourceRect === rect);
    });

    it('creates a rectangle to include radius of brush', function () {
        const filter = new PixelStrokeFilter([0, 0, 0, 1], 20);
        const rect = filter.getBounds();
        equal(
            new easeljs.Rectangle(-20, -20, 40, 40),
            rect
        );
    });
});
