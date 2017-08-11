<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import easeljs from '../easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import _ from 'lodash';

export default {
    provide() {
        return {
            easel: this,
        };
    },
    mixins: [EaselDisplayObject],
    computed: {
        stage() {
            return this.component;
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Container();
            this.displayObjectInit();
        },
    },
};
</script>
