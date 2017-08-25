window.Vue = require('vue');
require('vue-easeljs');

Vue.component('gary', require('./Gary.vue'));
Vue.component('exampler', require('./Exampler.vue'));

Vue.component('example1', require('./Example1.vue'));
Vue.component('example2', require('./Example2.vue'));
Vue.component('example3', require('./Example3.vue'));
Vue.component('example4', require('./Example4.vue'));

var app = new Vue({
    el: '#app',
    data() {
        return {
            tab: 'readme',
            example1: require('../examples/example1.html'),
            example2: require('../examples/example2.html'),
            example3: require('../examples/example3.html'),
            example4: require('../examples/example4.html'),
        };
    },
});

