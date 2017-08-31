window.Vue = require('vue');
Vue.use(require('vue-easeljs'));

Vue.component('gary', require('./Gary.vue'));
Vue.component('exampler', require('./Exampler.vue'));

// fancy foot work to require all the examples
var examplesContext = require.context('../examples', true, /.*\.html/);
var examples = examplesContext.keys().map(examplesContext);

var tab = 'gary';

if (location.hash) {
    tab = location.hash.substr(1).split(/\./)[0];
}

var app = new Vue({
    el: '#app',
    data() {
        return {
            tab: tab,
            examples: examples,
        };
    },
});
