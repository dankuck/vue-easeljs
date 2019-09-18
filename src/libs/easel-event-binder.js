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

import intersection from 'lodash.intersection';

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

const componentDemandsEventType = function (component, eventType) {
    return Boolean(
        component.$options._parentListeners
        && component.$options._parentListeners[eventType]
    );
};

const augmentEvent = function (component, event) {
    event.component = component;
    if (event.stageX && event.stageY && component.easelCanvas.translateCoordinates) {
        const [x, y] = component.easelCanvas.translateCoordinates(event.stageX, event.stageY);
        event.viewportX = x;
        event.viewportY = y;
    }
    return event;
};

export default {
    bindEvents(vueComponent, easelComponent) {
        eventTypes.forEach(eventType => {
            if (!componentDemandsEventType(vueComponent, eventType)) {
                return;
            }
            easelComponent.addEventListener(
                eventType,
                (event) => vueComponent.$emit(eventType, augmentEvent(vueComponent, event))
            );
        });
    }
};
