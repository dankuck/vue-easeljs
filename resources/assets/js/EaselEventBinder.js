/*
|--------------------------------------------------------------------------
| EaselEventBinder
|--------------------------------------------------------------------------
|
| Binds all known EaselJS events to a Vue component
|
*/

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
        _.each(eventTypes, eventType => {
            object.addEventListener(eventType, (event) => component.$emit(eventType, event));
        });
    }
};
