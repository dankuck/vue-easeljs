import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../src/components/EaselCanvas.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../src/easel.js';
import isAnEaselParent from './includes/is-an-easel-parent.js';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];

describe('EaselCanvas', function () {

    describe('is an easel parent', isAnEaselParent(EaselCanvas));

    var eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');
    var vm = new Vue({
        template: `
            <easel-canvas
                background-color="grey"
                ref="easelCanvas"
                :anti-alias="antiAlias"
                ${eventHandlerCode}
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

    var canvas = vm.$refs.easelCanvas;

    it('should have a canvas object', function () {
        assert(vm.$el.nodeName === 'CANVAS');
    });

    it('should have the slot stuff we put in', function () {
        assert($(vm.$el).find('#im-in-a-slot'));
    });

    it('should have an easel object with a component object', function () {
        assert(canvas.component);
    });

    it('should update a bunch', function (done) {
        var update = canvas.component.update;
        canvas.component.update = function (event) {
            assert(event);
            canvas.component.update = update;
            done();
        };
    });

    _.each(eventTypes, (type) => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            canvas.component.dispatchEvent(type);
            assert(vm.eventLog.length === 1);
        });
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
        var Touch = easeljs.Touch;
        var sawEnable, sawDisable;
        easeljs.Touch = {
            enable(component) {
                sawEnable = component;
            },
            disable(component) {
                sawDisable = component;
            },
        };
        var vm = new Vue({
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
