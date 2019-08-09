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

    it('should update a bunch', function (done) {
        const {vm, canvas} = buildVm();
        const update = canvas.component.update;
        canvas.component.update = function (event) {
            assert(event);
            canvas.component.update = update;
            done();
        };
    });

    it('should be able to anti-alias', function () {
        const {vm, canvas} = buildVm();
        assert(canvas.context.imageSmoothingEnabled === true, 'Not smoothing: ' + canvas.context.imageSmoothingEnabled);
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
