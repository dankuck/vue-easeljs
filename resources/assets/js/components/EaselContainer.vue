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
    },
};
</script>
