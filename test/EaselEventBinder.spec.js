import assert from 'assert';
import EaselEventBinder from '../src/EaselEventBinder.js';
import _ from 'lodash';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];
var fauxParentListeners = {};
_.each(eventTypes, (type) => {
    fauxParentListeners[type] = function () {};
});

describe('EaselEventBinder', function () {

    it('should bind all the things', function () {
        var got = {};
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
        _.each(eventTypes, eventType => {
            assert(got[eventType]);
        });
    });

    it('should only bind dblclick', function () {
        var got = {};
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
        var got = {};
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
