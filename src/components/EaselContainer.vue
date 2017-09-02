<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';
import EaselParent from '../mixins/EaselParent.js';

export default {
    mixins: [EaselDisplayObject, EaselParent],
    methods: {
        init() {
            this.component = new easeljs.Container();
            this.displayObjectInit();
            this.addPendingChildren();
        },
        getBounds() {
            // A Container is actually just a point. Didn't know that, did 
            // you?
            // Well, it's kind of an infinite plane centered on a particular 
            // point.
            // Treating it like a point may help with alignment.
            return Promise.resolve(new easeljs.Rectangle(0, 0, 0, 0));
        },
    },
};
</script>
