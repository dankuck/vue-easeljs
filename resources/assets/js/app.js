require('vue-resource');

Vue.component('easel-canvas', require('./components/EaselCanvas.vue'));
Vue.component('easel-shape', require('./components/EaselShape.vue'));
Vue.component('easel-sprite-sheet', require('./components/EaselSpriteSheet.vue'));

const app = new Vue({
    el: '#app'
});

app.log = console.log;
