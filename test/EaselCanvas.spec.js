import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';
import $ from 'jquery';

describe('EaselCanvas', function () {
    var vm = new Vue({
        template: '<easel-canvas background-color="grey" ref="easelCanvas"><span id="im-in-a-slot"></span></easel-canvas>',
        components: {
            'easel-canvas': EaselCanvas,
        },
    }).$mount();

    var canvas = vm.$refs.easelCanvas;

    it('should have a canvas object', function () {
        assert(vm.$el.nodeName === 'CANVAS');
    });

    it('should have the slot stuff we put in', function () {
        assert($(vm.$el).find('#im-in-a-slot'));
    });

    it('should have an easel object with a stage object', function () {
        assert(canvas.easel);
        assert(canvas.easel.stage);
    });

    it('should update a bunch', function (done) {
        var update = canvas.easel.stage.update;
        canvas.easel.stage.update = function (event) {
            assert(event);
            canvas.easel.stage.update = update;
            done();
        };
    });
});
