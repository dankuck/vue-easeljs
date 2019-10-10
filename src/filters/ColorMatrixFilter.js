import easeljs from '../../easeljs/easel.js';

/**
 |------------------------
 | ColorMatrixFilter
 |------------------------
 | A version of the ColorMatrixFilter that accepts scalar constructor
 | parameters for ease-of-use.
 |
 | The constructor creates a ColorMatrix using the constructor params and
 | passes it to the EaselJS ColorMatrixFilter constructor.
 */
export default class ColorMatrixFilter extends easeljs.ColorMatrixFilter {

    constructor(brightness, contrast, saturation, hue) {
        const matrix = new easeljs.ColorMatrix(brightness, contrast, saturation, hue);
        easeljs.ColorMatrixFilter.apply(this, [matrix]);
    }
};
