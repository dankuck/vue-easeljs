<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import EaselParent from '../mixins/EaselParent.js';

export default {
    mixins: [EaselDisplayObject, EaselParent],
    methods: {
        init() {
            this.component = new easeljs.Container();
            this.displayObjectInit();
        },
        getDimensions() {
            // A Container is actually just a point. Didn't know that, did
            // you?
            // Well, it's kind of an infinite plane centered on a particular
            // point.
            // Treating it like a point means alignment isn't a thing.
            return Promise.resolve({width: 0, height: 0});
        },
    },
};
</script>
