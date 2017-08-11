import assert from 'assert';
import Vue from 'vue';
import EaselCanvas from '../resources/assets/js/components/EaselCanvas.vue';
import $ from 'jquery';
import _ from 'lodash';

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

    it('should have an easel object with a stage object', function () {
        assert(canvas.stage);
    });

    it('should update a bunch', function (done) {
        var update = canvas.stage.update;
        canvas.stage.update = function (event) {
            assert(event);
            canvas.stage.update = update;
            done();
        };
    });

    _.each(eventTypes, (type) => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            canvas.stage.dispatchEvent(type);
            assert(vm.eventLog.length === 1);
        });
    });
});
