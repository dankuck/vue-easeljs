<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import easeljs from '../easel.js';
import EaselEventBinder from '../EaselEventBinder.js';

export default {
    provide() {
        return {
            easel: this,
        };
    },
    data() {
        return {
            component: null,
            children: [],
        };
    },
    destroyed() {
        easeljs.Touch.disable(this.component);
    },
    computed: {
        stage() {
            return this.component;
        },
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.easel);
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener("tick", (event) => this.component.update(event));
        for (var i = 0; i < this.children.length; i++) {
            this.component.addChild(this.children[i].component);
        }
    },
    methods: {
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
