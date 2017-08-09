require('vue-resource');

Vue.component('easel-canvas', require('./components/EaselCanvas.vue'));
Vue.component('easel-shape', require('./components/EaselShape.vue'));

const app = new Vue({
    el: '#app'
});

app.log = console.log;
