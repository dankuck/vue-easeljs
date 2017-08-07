
const assert = require('assert');
const _ = require('lodash');
import Vue from 'vue';
import Example from '../resources/assets/js/components/Example.vue';

describe('Example Class', function() {
    describe('#method1', function() {
        it('should do something', function() {
            var vm = new Vue({
                template: '<div><example text="ohai"></example></div>',
                components: {
                    'example': Example,
                },
            }).$mount();
            assert(/ohai/.test(vm.$el.innerHTML));
        });
    });
});
