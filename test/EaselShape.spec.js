import $ from 'jquery';
import _ from 'lodash';
import assert from 'assert';
import EaselCanvas from '../src/components/EaselCanvas.vue';
import EaselShape from '../src/components/EaselShape.vue';
import Vue from 'vue';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick'];

describe('EaselShape', function () {
    var eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');
    var vm = new Vue({
        template: `
            <easel-canvas ref="easelCanvas">
                <easel-shape ref="theShape"
                    v-if="showShape"
                    :x=100
                    :y=100
                    fill="DeepSkyBlue"
                    stroke="#00FFFF"
                    :form="shapeData.form"
                    :dimensions="shapeData.dimensions"
                    :align="['center', 'center']"
                    ${eventHandlerCode}
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
                shapeData: {
                    form: 'circle',
                    dimensions: 50,
                },
                eventLog: [],
            };
        },
        methods: {
            logEvent(event) {
                this.eventLog.push(event);
            },
            clearEventLog() {
                this.eventLog = [];
            },
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

    it('should have component field', function () {
        assert(shape.component);
    });

    it('should have same component as parent', function () {
        assert(canvas === shape.easel);
    });

    it('should have a parent', function () {
        assert(shape.component.parent);
    });

    it('should have the right parent', function () {
        assert(canvas.component === shape.component.parent);
    });

    it('should go away when gone', function (done) {
        vm.showShape = false;
        Vue.nextTick()
            .then(() => {
                assert(canvas.component.children.length === 0);
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape; // make sure others get the new var
            })
            .then(done, done);
    });

    it('should make a blue shape', function () {
        shape.refresh();
        assert(shape.component.graphics._fill.style === 'DeepSkyBlue');
    });

    it('should make a shape with cyan stroke', function () {
        shape.refresh();
        assert(shape.component.graphics._stroke.style === '#00FFFF');
    });

    it('should make a circle', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'circle';
        vm.shapeData.dimensions = 50;
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 50, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 50, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radius === 50, 'Wrong radius of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 50, 'Wrong regX: ' + shape.component.regX);
                assert(shape.component.regY === 50, 'Wrong regY: ' + shape.component.regY);
            })
            .then(done, done);
    });

    it('should make a rectangle', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'rect';
        vm.shapeData.dimensions = [50, 60];
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 0, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 0, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].w === 50, 'Wrong w of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].h === 60, 'Wrong h of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 25, 'regX: ' + shape.component.regX);
                assert(shape.component.regY === 30, 'regY: ' + shape.component.regY);
            })
            .then(done, done);
    });

    it('should make a rounded corners rectangle', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'rect';
        vm.shapeData.dimensions = [50, 60, 5];
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 0, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 0, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].w === 50, 'Wrong w of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].h === 60, 'Wrong h of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusTL === 5, 'Wrong radiusTL of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusTR === 5, 'Wrong radiusTR of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusBL === 5, 'Wrong radiusBL of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusBR === 5, 'Wrong radiusBR of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 25);
                assert(shape.component.regY === 30);
            })
            .then(done, done);
    });

    it('should make a rounded corners rectangle with different radiuses', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'rect';
        vm.shapeData.dimensions = [50, 60, 5, 6, 7, 8];
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 0, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 0, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].w === 50, 'Wrong w of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].h === 60, 'Wrong h of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusTL === 5, 'Wrong radiusTL of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusTR === 6, 'Wrong radiusTR of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusBR === 7, 'Wrong radiusBR of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radiusBL === 8, 'Wrong radiusBL of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 25);
                assert(shape.component.regY === 30);
            })
            .then(done, done);
    });

    it('should make a star', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'star';
        vm.shapeData.dimensions = [50, 5, .5];
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 50, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 50, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].radius === 50, 'Wrong radius of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].sides === 5, 'Wrong sides of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].pointSize === .5, 'Wrong pointSize of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 50, 'Wrong regX: ' + shape.component.regX);
                assert(shape.component.regY === 50, 'Wrong regY: ' + shape.component.regY);
            })
            .then(done, done);
    });

    it('should make an ellipse', function (done) {
        vm.showShape = false;
        vm.shapeData.form = 'ellipse';
        vm.shapeData.dimensions = [50, 60];
        Vue.nextTick()
            .then(() => {
                vm.showShape = true;
                return Vue.nextTick();
            })
            .then(() => {
                shape = vm.$refs.theShape;
                assert(shape.component.graphics._activeInstructions.length === 1, 'Wrong number of instructions: ' + shape.component.graphics._activeInstructions.length);
                assert(shape.component.graphics._activeInstructions[0].x === 0, 'Wrong x of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].y === 0, 'Wrong y of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].w === 50, 'Wrong w of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.graphics._activeInstructions[0].h === 60, 'Wrong h of instruction: ' + JSON.stringify(shape.component.graphics._activeInstructions[0]));
                assert(shape.component.regX === 25);
                assert(shape.component.regY === 30);
            })
            .then(done, done);
    });

    _.each(eventTypes, (type) => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            shape.component.dispatchEvent(type);
            assert(vm.eventLog.length === 1);
        });
    });
});
