
function install(Vue) {
    Vue.component('easel-bitmap', require('./components/EaselBitmap.vue'));
    Vue.component('easel-canvas', require('./components/EaselCanvas.vue'));
    Vue.component('easel-container', require('./components/EaselContainer.vue'));
    Vue.component('easel-shape', require('./components/EaselShape.vue'));
    Vue.component('easel-sprite', require('./components/EaselSprite.vue'));
    Vue.component('easel-sprite-sheet', require('./components/EaselSpriteSheet.vue'));
    Vue.component('easel-text', require('./components/EaselText.vue'));
};

export default {
    install
};
