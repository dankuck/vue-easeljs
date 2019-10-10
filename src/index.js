import easeljs from '../easeljs/easel.js';
import filters from './libs/filters.js';

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
    registerFilter(...args) {
        return filters.register(...args);
    },
};
