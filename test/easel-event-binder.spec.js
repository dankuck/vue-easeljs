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
        EaselEventBinder.bindEvents(
            {
                $options: {
                    _parentListeners: fauxParentListeners,
                },
                $emit(eventType, event) {
                    got[eventType] = event;
                },
            },
            {
                addEventListener(event, handler) {
                    handler({type: event});
                },
            }
        );
        eventTypes.forEach(eventType => {
            assert(got[eventType]);
        });
    });

    it('should only bind dblclick', function () {
        const got = {};
        EaselEventBinder.bindEvents(
            {
                $options: {
                    _parentListeners: {
                        dblclick() {},
                        NOT_A_REAL_EVENT_TYPE() {},
                    },
                },
                $emit(eventType, event) {
                    got[eventType] = event;
                },
            },
            {
                addEventListener(event, handler) {
                    handler({type: event});
                },
            }
        );
        assert(Object.keys(got).length === 1, 'bound too many things');
        assert(got.dblclick);
    });

    it('should not bind', function () {
        const got = {};
        EaselEventBinder.bindEvents(
            {
                $options: {
                },
                $emit(eventType, event) {
                    got[eventType] = event;
                },
            },
            {
                addEventListener(event, handler) {
                    handler({type: event});
                },
            }
        );
        assert(Object.keys(got).length === 0, 'bound too many things');
    });
});
