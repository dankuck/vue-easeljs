import assert from 'assert';
import EaselEventBinder from '../src/libs/easel-event-binder.js';

const eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];
const fauxParentListeners = {};
eventTypes.forEach(type => {
    fauxParentListeners[type] = function () {};
});

describe('easel-event-binder.js', function () {

    it('should bind all the things', function () {
        const got = {};
        const vueComponent = {
            $options: {
                _parentListeners: fauxParentListeners,
            },
            $emit(eventType, event) {
                got[eventType] = event;
            },
        };
        const easelComponent = {
            addEventListener(event, handler) {
                handler({type: event});
            },
        };
        EaselEventBinder.bindEvents(
            vueComponent,
            easelComponent
        );
        eventTypes.forEach(eventType => {
            assert(got[eventType]);
        });
    });

    it('should only bind dblclick', function () {
        const got = {};
        const vueComponent = {
            $options: {
                _parentListeners: {
                    dblclick() {},
                    NOT_A_REAL_EVENT_TYPE() {},
                },
            },
            $emit(eventType, event) {
                got[eventType] = event;
            },
        };
        const easelComponent = {
            addEventListener(event, handler) {
                handler({type: event});
            },
        };
        EaselEventBinder.bindEvents(
            vueComponent,
            easelComponent
        );
        assert(Object.keys(got).length === 1, 'bound too many things');
        assert(got.dblclick);
    });

    it('should not bind', function () {
        const got = {};
        const vueComponent = {
            $options: {
            },
            $emit(eventType, event) {
                got[eventType] = event;
            },
        };
        const easelComponent = {
            addEventListener(event, handler) {
                handler({type: event});
            },
        };
        EaselEventBinder.bindEvents(
            vueComponent,
            easelComponent
        );
        assert(Object.keys(got).length === 0, 'bound too many things');
    });

    it('should add viewportX and viewportY to an event', function () {
        const event = {
            stageX: 100,
            stageY: 200,
        };
        const easelCanvas = {
            translateCoordinates(x, y) {
                return [300, 400];
            },
        };
        const vueComponent = {
            easelCanvas,
            $options: {
                _parentListeners: {
                    click() {},
                },
            },
            $emit() {},
        };
        const easelComponent = {
            addEventListener(eventType, handler) {
                handler(event);
            },
        };
        EaselEventBinder.bindEvents(vueComponent, easelComponent);
        assert(event.viewportX === 300);
        assert(event.viewportY === 400);
    });
});
