import easeljs from '../../easeljs/easel.js';

/**
 |------------------------
 | StrokeFilter
 |------------------------
 | Add a stroke to an element
 */
export default class StrokeFilter {

    constructor(stroke = []) {
        this.strokeRed = stroke[0] || 0;
        this.strokeGreen = stroke[1] || 0;
        this.strokeBlue = stroke[2] || 0;
        this.strokeAlpha = stroke[3] || 255;
    }

    adjustImageData(imageData) {
        const {strokeRed, strokeGreen, strokeBlue, strokeAlpha} = this;
        const {data, width, height} = imageData;
        const length = data.length;
        const copy = data.slice(0);
        const activatePixel = (x, y) => {
            if (x < 0 || y < 0 || x >= width || y >= height) {
                return;
            }
            const i = (y * width + x) * 4;
            if (!data[i + 3]) {
                 data[i + 0] = strokeRed;
                 data[i + 1] = strokeGreen;
                 data[i + 2] = strokeBlue;
                 data[i + 3] = strokeAlpha;
            }
        };
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                if (copy[(y * width + x) * 4 + 3] > 0) {
                    const up = y - 1;
                    const down = y + 1;
                    const left = x - 1;
                    const right = x + 1;

                    activatePixel(left, up);
                    activatePixel(x, up);
                    activatePixel(right, up);

                    activatePixel(left, y);
                    // activatePixel(x, y); // already set!
                    activatePixel(right, y);

                    activatePixel(left, down);
                    activatePixel(x, down);
                    activatePixel(right, down);
                }
            }
        }
        return true;
    }
};
