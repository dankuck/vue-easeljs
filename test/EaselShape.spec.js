import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';
import EaselShape from '../resources/assets/js/components/EaselShape.vue';
import $ from 'jquery';

describe('EaselShape', function () {
    var vm = new Vue({
        template: `
            <easel-canvas ref="easelCanvas">
                <easel-shape ref="theShape"
                    :x=100
                    :y=100
                    fill="DeepSkyBlue"
                    form="circle"
                    :dimensions="[0, 0, 50]"
                    >
                </easel-shape>
            </easel-canvas>
        `,
        components: {
            'easel-canvas': EaselCanvas,
            'easel-shape': EaselShape,
        },
    }).$mount();

    var canvas = vm.$refs.easelCanvas;
    var shape = vm.$refs.theShape;

    it('should exist', function () {
        assert(shape);
    });

    it('should have $el', function () {
        assert(shape.$el);
    });

    it('should have shape field', function () {
        assert(shape.shape);
    });

    it('should have same stage as parent', function () {
        assert(canvas.easel.stage === shape.easel.stage);
    });

    it('should have a parent', function () {
        assert(shape.shape.parent);
    });

    it('should have the right parent', function () {
        assert(canvas.easel.stage === shape.shape.parent);
    });

    it('should make a blue circle', function () {
        console.log(shape.shape);
        assert(false);
    });
});
