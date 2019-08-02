/*
|--------------------------------------------------------------------------
| easel-event-binder.js
|--------------------------------------------------------------------------
|
| Binds all requested EaselJS events to a Vue component
|
*/

// Need to add and test these events for Canvas
// * drawend
// * drawstart
// * mouseenter
// * mouseleave
// * stagemousedown
// * stagemousemove
// * stagemouseup
// * tickend
// * tickstart

import {intersection} from 'lodash';

export const eventTypes = [
    'added',
    'animationend',
    'change',
    'click',
    'dblclick',
    'mousedown',
    'mouseout',
    'mouseover',
    'pressmove',
    'pressup',
    'removed',
    'rollout',
    'rollover',
    'tick',
];

export default {
    bindEvents(component, object) {
        const listenerNames = Object.keys(component.$options._parentListeners || {});
        const requestedEvents = intersection(eventTypes, listenerNames);
        requestedEvents.forEach(eventType => {
            object.addEventListener(eventType, (event) => component.$emit(eventType, event));
        });
    }
};
