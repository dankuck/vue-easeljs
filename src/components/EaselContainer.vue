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
    },
};
</script>
