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
                    v-if="showShape"
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
        data() {
            return {
                showShape: true,
            };
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

    it('should go away when gone', function (done) {
        vm.showShape = false;
        Vue.nextTick()
            .then(() => {
                assert(canvas.easel.stage.children.length === 0);
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape; // make sure others get the new var
                done();
            });
    });

    it('should refresh on start', function (done) {
        // Replace the default refresh() method
        // Then check that it's called on mount
        // Then put the original back.
        var refreshed = false,
            refresh = EaselShape.methods.refresh;
        vm.showShape = false;
        EaselShape.methods.refresh = function () {
            refreshed = true;
        };
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                EaselShape.methods.refresh = refresh;
                done();
            });
    });

    it('should make a blue circle', function () {
        // Replace the default graphics object
        // Then check that it's called on refresh()
        // Then put back the original graphics object
        var drewCircle = false, 
            beganFill = false,
            graphics = shape.shape.graphics;
        shape.shape.graphics = {
            drawCircle() {
                drewCircle = true;
            },
            beginFill() {
                beganFill = true;
            },
        };
        shape.refresh();
        shape.shape.graphics = graphics;
        assert(beganFill);
        assert(drewCircle);
        assert(shape.shape.x === 100);
        assert(shape.shape.y === 100);
    });
});
