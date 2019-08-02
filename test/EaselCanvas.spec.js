import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../src/components/EaselCanvas.vue';
import easeljs from '../src/easel.js';
import isAnEaselParent from './includes/is-an-easel-parent.js';
import doesEvents from './includes/does-events.js';

describe('EaselCanvas', function () {

    describe('is an easel parent', isAnEaselParent(EaselCanvas));

    describe('does events', doesEvents(EaselCanvas));

    const vm = new Vue({
        template: `
            <easel-canvas
                background-color="grey"
                ref="easelCanvas"
                :anti-alias="antiAlias"
            >
                <span id="im-in-a-slot"></span>
            </easel-canvas>
        `,
        data() {
            return {
                eventLog: [],
                antiAlias: true,
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

    it('should have a canvas object', function () {
        assert(vm.$el.nodeName === 'CANVAS');
    });

    it('should have the slot stuff we put in', function () {
        assert(vm.$el.querySelector('#im-in-a-slot'));
    });

    it('should have an easel object with a component object', function () {
        assert(canvas.component);
    });

    it('should update a bunch', function (done) {
        const update = canvas.component.update;
        canvas.component.update = function (event) {
            assert(event);
            canvas.component.update = update;
            done();
        };
    });

    it('should be able to anti-alias', function () {
        assert(canvas.context.imageSmoothingEnabled === true, 'Not smoothing: ' + canvas.context.imageSmoothingEnabled);
    });

    it('should not use anti-alias', function (done) {
        vm.antiAlias = false;
        Vue.nextTick()
            .then(() => {
                assert(canvas.context.imageSmoothingEnabled === false, 'Smoothing, but should not: ' + canvas.context.imageSmoothingEnabled);
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
