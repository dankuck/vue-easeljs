import easeljs from '../easeljs/easel.js';

const filters = {
    AlphaMapFilter:    easeljs.AlphaMapFilter,
    AlphaMaskFilter:   easeljs.AlphaMaskFilter,
    BlurFilter:        easeljs.BlurFilter,
    ColorFilter:       easeljs.ColorFilter,
    ColorMatrixFilter: easeljs.ColorMatrixFilter,
};

module.exports = {
    createjs:         easeljs,
    easeljs:          easeljs,
    EaselBitmap:      require('./components/EaselBitmap.vue'),
    EaselCanvas:      require('./components/EaselCanvas.vue'),
    EaselContainer:   require('./components/EaselContainer.vue'),
    EaselShape:       require('./components/EaselShape.vue'),
    EaselSprite:      require('./components/EaselSprite.vue'),
    EaselSpriteSheet: require('./components/EaselSpriteSheet.vue'),
    EaselText:        require('./components/EaselText.vue'),
    install(Vue) {
        Vue.component('easel-bitmap', this.EaselBitmap);
        Vue.component('easel-canvas', this.EaselCanvas);
        Vue.component('easel-container', this.EaselContainer);
        Vue.component('easel-shape', this.EaselShape);
        Vue.component('easel-sprite', this.EaselSprite);
        Vue.component('easel-sprite-sheet', this.EaselSpriteSheet);
        Vue.component('easel-text', this.EaselText);
    },
    registerFilter(name, Filter) {
        filters[name] = Filter;
    },
    buildFilter(filterArray) {
        const filterName = filterArray[0];
        const args = [null, ...filterArray.slice(1)];
        const Filter = filters[filterName];
        if (!Filter) {
            throw new Error(`No such filter registered: ${filterName}`);
        }
        return new (Function.prototype.bind.apply(Filter, args));
    },
};
