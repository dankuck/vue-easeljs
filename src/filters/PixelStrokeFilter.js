import easeljs from '../../easeljs/easel.js';

/**
 |------------------------
 | PixelStrokeFilter
 |------------------------
 | Add a stroke to an element
 */

const calculatedBrushes = {};

export default class PixelStrokeFilter {

    constructor(stroke = [], size = 1, options = {}) {
        this.strokeRed = stroke[0] || 0;
        this.strokeGreen = stroke[1] || 0;
        this.strokeBlue = stroke[2] || 0;
        this.strokeAlpha = stroke[3] || 255;
        this.size = size;
        this.brush = this.calculateBrush(size);
        this.alphaCache = {};
        this.options = options;
    }

    adjustImageData(imageData) {
        const {strokeRed, strokeGreen, strokeBlue, strokeAlpha} = this;
        const antiAlias = typeof this.options.antiAlias === 'undefined' ? true : this.options.antiAlias;
        const {data, width, height} = imageData;
        const length = data.length;
        const copy = data.slice(0);
        const activatePixel = (x, y, a) => {
            if (x < 0 || y < 0 || x >= width || y >= height) {
                return;
            }
            const i = (y * width + x) * 4;
            const alpha = antiAlias
                ? this.alphaCache[a] || (this.alphaCache[a] = Math.round(Math.floor(strokeAlpha * a)))
                : strokeAlpha;
            if (!copy[i + 3] && data[i + 3] < alpha) {
                 data[i + 0] = strokeRed;
                 data[i + 1] = strokeGreen;
                 data[i + 2] = strokeBlue;
                 data[i + 3] = alpha;
            }
        };
        const applyBrush = (sx, sy) => {
            for (let i = 0; i < this.brush.length; i++) {
                const {y, minX, maxX, a} = this.brush[i];
                activatePixel(sx + minX, sy + y, a);
                activatePixel(sx + maxX, sy + y, a);
                for (let j = minX + 1; j <= maxX - 1; j++) {
                    activatePixel(sx + j, sy + y, 1);
                }
            }
        }
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                if (copy[(y * width + x) * 4 + 3] > 0) {
                    applyBrush(x, y);
                }
            }
        }
        return true;
    }

    calculateBrush(size) {
        if (calculatedBrushes[size]) {
            return calculatedBrushes[size];
        }
        /*
        Imagine a circle like this
               1 | 2
             \       /
           8           3
           -           -
           7           4
             /       \
               6 | 5
        */
        const map = {};
        // Figure out sector 4
        for (let y = 0; y <= size; y++) {
            const tan = y / size;
            const angle = Math.atan(tan);
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const realX = cos * size;
            const realY = sin * size;
            const ceilX = Math.ceil(realX);
            const ceilY = Math.ceil(realY);
            const intensityX = realX - Math.floor(realX);
            const intensityY = realY - Math.floor(realY);
            let intensity = (intensityX + intensityY) / 2;
            if (intensity === 0) {
                intensity = 1;
            }
            map[ceilY] = {
                x: ceilX,
                y: ceilY,
                a: intensity,
            };
        }
        // Flip sector 4's x and y to get sector 5
        for (let field in map) {
            const {x: y, y: x, a} = map[field];
            if (!map[y]) {
                map[y] = {
                    x,
                    y,
                    a,
                };
            }
        }
        // Use that to build horizontal lines
        // from 7 to 4
        // from 6 to 5
        // from 1 to 2
        // from 8 to 3
        const lines = [];
        for (let field in map) {
            const {x, y, a} = map[field];
            lines.push({
                y,
                minX: -x,
                maxX: x,
                a,
            });
            if (y !== 0) {
                lines.push({
                    y: -y,
                    minX: -x,
                    maxX: x,
                    a,
                });
            }
        }
        calculatedBrushes[size] = lines;
        return calculatedBrushes[size];
    }

    getBounds(rect = null) {
        return (rect || new easeljs.Rectangle()).pad(this.size, this.size, this.size, this.size);
    }
};

