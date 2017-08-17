/*
|--------------------------------------------------------------------------
| EaselParent
|--------------------------------------------------------------------------
|
| This mixin lets a Vue component act as a container for an Easel Vue 
| component.
|
*/

import easeljs from '../easel.js';

module.exports = {
    provide() {
        return {
            easel: this,
        };
    },
    data() {
        return {
            children: [],
        };
    },
    methods: {
        addPendingChildren() {
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
