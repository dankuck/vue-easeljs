/*
|--------------------------------------------------------------------------
| EaselEventBinder
|--------------------------------------------------------------------------
|
| Binds all known EaselJS events to a Vue component
|
*/

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
        var listenerNames = Object.keys(component.$options._parentListeners);
        var requestedEvents = _.intersection(eventTypes, listenerNames);
        _.each(requestedEvents, eventType => {
            object.addEventListener(eventType, (event) => component.$emit(eventType, event));
        });
    }
};
