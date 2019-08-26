import assert from 'assert';
import EaselCanvas from '../src/components/EaselCanvas.vue';
import EaselShape from '../src/components/EaselShape.vue';
import Vue from 'vue';
import isADisplayObject from './includes/is-a-display-object.js';
import canCache from './includes/can-cache.js';
import isAlignable from './includes/is-alignable.js';

describe('EaselShape', function () {

    describe('is a display object that', isADisplayObject(EaselShape, 'form="circle" dimensions="50"'));

    describe('is cacheable and', canCache(EaselShape, {}, [
        {
            name: 'fill',
            value: 'black',
            changeTo: 'blue',
            shouldUpdateSameObject: true,
        },
        {
            name: 'stroke',
            value: 'black',
            changeTo: 'blue',
            shouldUpdateSameObject: true,
        },
        {
            name: 'dimensions',
            value: 50,
            changeTo: 100,
            shouldUpdateSameObject: true,
        },
        {
            name: 'form',
            value: 'circle',
            changeTo: 'rect',
            shouldUpdateSameObject: true,
        },
    ]));

    describe('is alignable and', isAlignable(EaselShape, {width: 100, height: 100}, 'form="circle" dimensions="50"'));

    const buildVm = function () {
        const vm = new Vue({
            template: `
                <easel-canvas ref="easelCanvas">
                    <easel-shape ref="theShape"
                        v-if="showShape"
                        :x=100
                        :y=100
                        :fill="shapeData.fill"
                        :stroke="shapeData.stroke"
                        :form="shapeData.form"
                        :dimensions="shapeData.dimensions"
                        :align="shapeData.align"
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
                        fill: 'DeepSkyBlue',
                        stroke: '#00FFFF',
                        align: 'center-center',
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

        const shape = vm.$refs.theShape;

        return {vm, shape};
    };

    it('should exist', function () {
        const {vm, shape} = buildVm();
        assert(shape);
    });

    it('should have $el', function () {
        const {vm, shape} = buildVm();
        assert(shape.$el);
    });

    it('should have component field', function () {
        const {vm, shape} = buildVm();
        assert(shape.component);
    });

    it('should make a blue shape', function () {
        const {vm, shape} = buildVm();
        assert(shape.component.graphics._fill.style === 'DeepSkyBlue');
    });

    it('should change the color to red', function (done) {
        const {vm, shape} = buildVm();
        vm.shapeData.fill = 'red';
        Vue.nextTick()
            .then(() => {
                assert(shape.component.graphics._fill.style === 'red');
            })
            .then(done, done);
    });

    it('should make a shape with cyan stroke', function () {
        const {vm, shape} = buildVm();
        assert(shape.component.graphics._stroke.style === '#00FFFF');
    });

    it('should change the stroke to yellow', function (done) {
        const {vm, shape} = buildVm();
        vm.shapeData.stroke = 'yellow';
        Vue.nextTick()
            .then(() => {
                assert(shape.component.graphics._stroke.style === 'yellow');
            })
            .then(done, done);
    });

    it('should make a circle', function (done) {
        let {vm, shape} = buildVm();
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
        let {vm, shape} = buildVm();
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
        let {vm, shape} = buildVm();
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
        let {vm, shape} = buildVm();
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
        let {vm, shape} = buildVm();
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
        let {vm, shape} = buildVm();
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

    ['center-left', 'top-left', 'bottom-right']
        .forEach(align => {
            it('should get cache bounds for a circle (no matter the align)', function (done) {
                const {vm, shape} = buildVm();
                vm.shapeData.form = 'circle';
                vm.shapeData.dimensions = 50;
                vm.shapeData.align = align;
                Vue.nextTick()
                    .then(() => shape.getCacheBounds())
                    .then(({x, y, width, height}) => {
                        assert(x === 0, `x is wrong: ${x}`);
                        assert(y === 0, `y is wrong: ${y}`);
                        assert(width === 100, `width is wrong: ${width}`);
                        assert(height === 100, `height is wrong: ${height}`);
                    })
                    .then(done, done);
            });

            it('should get cache bounds for a star (no matter the align)', function (done) {
                const {vm, shape} = buildVm();
                vm.shapeData.form = 'star';
                vm.shapeData.dimensions = [40, 5, .5];
                vm.shapeData.align = align;
                Vue.nextTick()
                    .then(() => shape.getCacheBounds())
                    .then(({x, y, width, height}) => {
                        assert(x === 0, `x is wrong: ${x}`);
                        assert(y === 0, `y is wrong: ${y}`);
                        assert(width === 80, `width is wrong: ${width}`);
                        assert(height === 80, `height is wrong: ${height}`);
                    })
                    .then(done, done);
            });

            it('should get cache bounds for a square (no matter the align)', function (done) {
                const {vm, shape} = buildVm();
                vm.shapeData.form = 'rect';
                vm.shapeData.dimensions = [40, 50];
                vm.shapeData.align = align;
                Vue.nextTick()
                    .then(() => shape.getCacheBounds())
                    .then(({x, y, width, height}) => {
                        assert(x === 0, `x is wrong: ${x}`);
                        assert(y === 0, `y is wrong: ${y}`);
                        assert(width === 40, `width is wrong: ${width}`);
                        assert(height === 50, `height is wrong: ${height}`);
                    })
                    .then(done, done);
            });
        });
});
