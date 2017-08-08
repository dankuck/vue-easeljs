import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';
import $ from 'jquery';

describe('EaselCanvas', function () {
    var vm = new Vue({
        template: '<easel-canvas ref="easelCanvas"><span id="im-in-a-slot"></span></easel-canvas>',
        components: {
            'easel-canvas': EaselCanvas,
        },
    }).$mount();

    it('should have a canvas object', function () {
        assert(vm.$el.nodeName === 'CANVAS');
    });

    it('should have the slot stuff we put in', function () {
        assert($(vm.$el).find('#im-in-a-slot'));
    });

    it('should have an easel object', function () {
        assert(vm.$refs.easelCanvas.easel);
    });
});
