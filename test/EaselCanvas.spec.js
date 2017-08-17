import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];

describe('EaselCanvas', function () {
    
    var eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');
    var vm = new Vue({
        template: `
            <easel-canvas 
                background-color="grey" 
                ref="easelCanvas"
                ${eventHandlerCode}
            >
                <span id="im-in-a-slot"></span>
            </easel-canvas>
        `,
        data() {
            return {
                eventLog: [],
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
/*
    describe('adding and removing sub-objects:', function () {
        var canvasComponent = canvas.component;
        var fakeChild = {component: {}};
        
        it('should save objects on xaddChild without component', function () {
            canvas.component = null;
            canvas.xaddChild(fakeChild);
            assert(canvas.xchildren[0] === fakeChild);
        });

        it('should remove objects on xremoveChild without component', function () {
            canvas.component = null;
            canvas.xremoveChild(fakeChild);
            assert(canvas.xchildren.length === 0);
        });

        it('should not error on xremoveChild if child is missing', function () {
            canvas.component = null;
            canvas.xremoveChild(fakeChild);
            assert(canvas.xchildren.length === 0);
        });

        it('should add components on xaddChild with component', function () {
            var added;
            canvas.component = {
                xaddChild(component) {
                    added = component;
                },
            };
            canvas.xaddChild(fakeChild);
            assert(canvas.xchildren[0] === fakeChild);
            assert(added === fakeChild.component);
        });

        it('should remove components on xremoveChild with component', function () {
            var removed;
            canvas.component = {
                xremoveChild(component) {
                    removed = component;
                },
            };
            canvas.xremoveChild(fakeChild);
            assert(canvas.xchildren.length === 0);
            assert(removed === fakeChild.component);
        });

        it('should not remove components on xremoveChild if child is missing', function () {
            var removed = null;
            canvas.component = {
                xremoveChild(component) {
                    removed = component;
                },
            };
            canvas.xremoveChild(fakeChild);
            assert(canvas.xchildren.length === 0);
            assert(removed === null);
        });

        //canvas.component = canvasComponent;
    });*/
});
