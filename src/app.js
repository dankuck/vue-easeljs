window.Vue = require('vue');
require('vue-easeljs');

Vue.component('gary', require('./Gary.vue'));
Vue.component('exampler', require('./Exampler.vue'));

// fancy foot work to require all the examples
var examplesContext = require.context('../examples', true, /.*\.html/);
var examples = examplesContext.keys().map(examplesContext);

var app = new Vue({
    el: '#app',
    data() {
        return {
            tab: 'readme',
            examples: examples,
        };
    },
});

Vue.app = app;