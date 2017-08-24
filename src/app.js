window.Vue = require('vue');
require('vue-easeljs');

Vue.component('gary', require('./Gary.vue'));
Vue.component('example1', require('./Example1.vue'));
Vue.component('example2', require('./Example2.vue'));
Vue.component('example3', require('./Example3.vue'));

var app = new Vue({
    el: '#app',
    data() {
        return {
            tab: 'readme',
        };
    },
});

