import assert from 'assert';
import EaselEventBinder from '../resources/assets/js/EaselEventBinder.js';
import _ from 'lodash';

var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];

describe('EaselEventBinder', function () {

    it('should bind all the things', function () {
        var got = {};
        EaselEventBinder.bindEvents(
            {
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
});
