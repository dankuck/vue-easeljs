/*
|--------------------------------------------------------------------------
| EaselEventBinder
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

import _ from 'lodash';

var eventTypes = [
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

module.exports = {
    bindEvents(component, object) {
        var listenerNames = Object.keys(component.$options._parentListeners || {});
        var requestedEvents = _.intersection(eventTypes, listenerNames);
        _.each(requestedEvents, eventType => {
            object.addEventListener(eventType, (event) => component.$emit(eventType, event));
        });
    }
};
