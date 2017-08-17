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
    data() {
        return {
            children: [],
        };
    },
    computed: {
        stage() {
            return this.component;
        },
    },
    methods: {
        init() {
            this.component = new easeljs.Container();
            this.displayObjectInit();
            for (var i = 0; i < this.children.length; i++) {
                this.component.addChild(this.children[i].component);
            }
        },
        addChild(vueChild) {
            this.removeChild(vueChild);
            this.children.push(vueChild);
            if (this.component) {
                this.component.addChild(vueChild.component);
            }
        },
        removeChild(vueChild) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i] === vueChild) {
                    this.children.splice(i, 1);
                    if (this.component) {
                        this.component.removeChild(vueChild.component);
                    }
                    return vueChild;
                }
            }
            return null;
        },
    },
};
</script>
