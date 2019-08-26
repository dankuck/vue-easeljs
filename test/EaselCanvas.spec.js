import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../src/components/EaselCanvas.vue';
import easeljs from '../easeljs/easel.js';
import isAnEaselParent from './includes/is-an-easel-parent.js';
import doesEvents from './includes/does-events.js';

describe('EaselCanvas', function () {

    describe('is an easel parent that', isAnEaselParent(EaselCanvas));

    describe('does events and', doesEvents(EaselCanvas));

    const buildVm = function () {
        const vm = new Vue({
            template: `
                <easel-canvas
                    background-color="grey"
                    ref="easelCanvas"
                    :anti-alias="antiAlias"
                    :height="height"
                    :width="width"
                    :viewport-height="vheight"
                    :viewport-width="vwidth"
                >
                    <span id="im-in-a-slot"></span>
                </easel-canvas>
            `,
            data() {
                return {
                    eventLog: [],
                    antiAlias: true,
                    height: 300,
                    width: 400,
                    vheight: null,
                    vwidth: null,
                };
            },
            components: {
                'easel-canvas': EaselCanvas,
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

        const canvas = vm.$refs.easelCanvas;

        return {vm, canvas};
    };

    it('should have a canvas object', function () {
        const {vm, canvas} = buildVm();
        assert(vm.$el.nodeName === 'CANVAS');
    });

    it('should have the slot stuff we put in', function () {
        const {vm, canvas} = buildVm();
        assert(vm.$el.querySelector('#im-in-a-slot'));
    });

    it('should have an easel object with a component object', function () {
        const {vm, canvas} = buildVm();
        assert(canvas.component);
    });

    it('should have a component that calls update on its own', function (done) {
        const {vm, canvas} = buildVm();
        const update = canvas.component.update;
        canvas.component.update = function (event) {
            assert(event);
            canvas.component.update = update;
            done();
        };
    });

    it('should be able to anti-alias', function (done) {
        const {vm, canvas} = buildVm();
        Vue.nextTick()
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === true, 'Not smoothing: ' + canvas.context.imageSmoothingEnabled);
            })
            .then(done, done);
    });

    it('should not use anti-alias', function (done) {
        const {vm, canvas} = buildVm();
        vm.antiAlias = false;
        Vue.nextTick()
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === false, 'Smoothing, but should not: ' + canvas.context.imageSmoothingEnabled);
            })
            .then(done, done);
    });

    it('should keep anti-alias off after resize', function (done) {
        const {vm, canvas} = buildVm();
        vm.antiAlias = false;
        Vue.nextTick()
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === false, 'Smoothing, but should not: ' + canvas.context.imageSmoothingEnabled);
                canvas.context.imageSmoothingEnabled = true;
                window.dispatchEvent(new Event('resize'));
                return Vue.nextTick();
            })
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === false, 'Smoothing again, but should not: ' + canvas.context.imageSmoothingEnabled);
            })
            .then(done, done);
    });

    it('should default anti-alias to true', function (done) {
        const {vm, canvas} = buildVm();
        vm.antiAlias = undefined;
        Vue.nextTick()
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === true, 'Not smoothing, but should: ' + canvas.context.imageSmoothingEnabled);
            })
            .then(done, done);
    });

    it('should provide canvases to any code it wraps', function () {
        const {vm, canvas} = buildVm();
        canvas.createCanvas(() => {
            assert(easeljs.createCanvas, 'createCanvas does not exist');
        });
        assert(!easeljs.createCanvas, 'createCanvas exists');
    });

    it('should provide different canvases to any code it wraps twice', function () {
        const {vm, canvas} = buildVm();
        let firstCreateCanvas,
            secondCreateCanvas,
            firstCreateCanvasAgain;
        canvas.createCanvas(() => {
            firstCreateCanvas = easeljs.createCanvas;
            canvas.createCanvas(() => {
                secondCreateCanvas = easeljs.createCanvas;
            });
            firstCreateCanvasAgain = easeljs.createCanvas;
        });
        assert(firstCreateCanvas, 'firstCreateCanvas should exist');
        assert(secondCreateCanvas, 'secondCreateCanvas should exist');
        assert(firstCreateCanvasAgain, 'firstCreateCanvasAgain should exist');
        assert(secondCreateCanvas !== firstCreateCanvas, '1st and 2nd should not be the same');
        assert(firstCreateCanvas === firstCreateCanvasAgain, '1st and 3rd should be the same');
        assert(!easeljs.createCanvas, 'createCanvas should not exist');
    });

    it('should scale to device pixel ratio', function () {
        window.devicePixelRatio = 2;
        const {vm, canvas} = buildVm();
        const htmlCanvas = canvas.$refs.easel;
        assert(htmlCanvas.width === 800, `${htmlCanvas.width} !== 800`);
        assert(htmlCanvas.height === 600, `${htmlCanvas.height} !== 600`);
        assert(htmlCanvas.style.width === '400px', `${htmlCanvas.style.width} !== 400px`);
        assert(htmlCanvas.style.height === '300px', `${htmlCanvas.style.height} !== 300px`);
        assert(canvas.component.scale === 2, `${canvas.component.scale} !== 2`);
    });

    it('should rescale on device pixel ratio change', function (done) {
        window.devicePixelRatio = 2;
        const {vm, canvas} = buildVm();
        const htmlCanvas = canvas.$refs.easel;
        window.devicePixelRatio = 3;
        window.dispatchEvent(new Event('resize'));
        Vue.nextTick()
            .then(() => {
                assert(htmlCanvas.width === 1200, `${htmlCanvas.width} !== 1200`);
                assert(htmlCanvas.height === 900, `${htmlCanvas.height} !== 900`);
                assert(htmlCanvas.style.width === '400px', `${htmlCanvas.style.width} !== 400px`);
                assert(htmlCanvas.style.height === '300px', `${htmlCanvas.style.height} !== 300px`);
                assert(canvas.component.scale === 3, `${canvas.component.scale} !== 3`);
            })
            .then(done, done);
    });

    it('should rescale on width and height change', function (done) {
        window.devicePixelRatio = 2;
        const {vm, canvas} = buildVm();
        const htmlCanvas = canvas.$refs.easel;
        vm.height = 301;
        Vue.nextTick()
            .then(() => {
                assert(htmlCanvas.width === 800, `${htmlCanvas.width} !== 800`);
                assert(htmlCanvas.height === 602, `${htmlCanvas.height} !== 602`);
                assert(htmlCanvas.style.width === '400px', `${htmlCanvas.style.width} !== 400px`);
                assert(htmlCanvas.style.height === '301px', `${htmlCanvas.style.height} !== 301px`);
                assert(canvas.component.scale === 2, `${canvas.component.scale} !== 2`);
                vm.width = 401;
                return Vue.nextTick();
            })
            .then(() => {
                assert(htmlCanvas.width === 802, `${htmlCanvas.width} !== 802`);
                assert(htmlCanvas.height === 602, `${htmlCanvas.height} !== 602`);
                assert(htmlCanvas.style.width === '401px', `${htmlCanvas.style.width} !== 401px`);
                assert(htmlCanvas.style.height === '301px', `${htmlCanvas.style.height} !== 301px`);
                assert(canvas.component.scale === 2, `${canvas.component.scale} !== 2`);
            })
            .then(done, done);
    });

    it('should have viewport-height and viewport-width', function (done) {
        window.devicePixelRatio = 1;
        const {vm, canvas} = buildVm();
        vm.vheight = 300;
        vm.vwidth = 400;
        Vue.nextTick()
            .then(() => {
                assert(canvas.viewportHeight === 300);
                assert(canvas.viewportWidth === 400);
                assert(canvas.component.scaleY === 1);
                assert(canvas.component.scaleX === 1);
            })
            .then(done, done);
    });

    it('should change scaleX and scaleY with viewport-height and viewport-width', function (done) {
        window.devicePixelRatio = 1;
        const {vm, canvas} = buildVm();
        vm.vheight = 600; // twice the canvas height
        vm.vwidth = 200; // half the canvas width
        Vue.nextTick()
            .then(() => {
                assert(canvas.component.scaleY === .5, JSON.stringify([canvas.viewport, canvas.viewportScale, canvas.component.scaleY, canvas.viewportHeight]));
                assert(canvas.component.scaleX === 2);
            })
            .then(done, done);
    });

    it('should change scaleX and scaleY with viewport-height and viewport-width', function (done) {
        window.devicePixelRatio = 1;
        const {vm, canvas} = buildVm();
        // cause scale to double
        vm.vheight = 150;
        vm.vwidth = 200;
        Vue.nextTick()
            .then(() => {
                // cause scale to double again
                window.devicePixelRatio = 2;
                window.dispatchEvent(new Event('resize'));
                return Vue.nextTick();
            })
            .then(() => {
                assert(canvas.component.scaleY === 4);
                assert(canvas.component.scaleX === 4);
            })
            .then(done, done);
    });

    it('should have touch', function () {
        const Touch = easeljs.Touch;
        let sawEnable, sawDisable;
        easeljs.Touch = {
            enable(component) {
                sawEnable = component;
            },
            disable(component) {
                sawDisable = component;
            },
        };
        const vm = new Vue({
            template: `
                <easel-canvas></easel-canvas>
            `,
            components: {
                'easel-canvas': EaselCanvas,
            },
        }).$mount();
        vm.$destroy();
        assert(sawEnable, 'did not see enable');
        assert(sawDisable, 'did not see disable');
        easeljs.Touch = Touch;
    });
});
