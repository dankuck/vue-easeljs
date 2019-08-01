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
import sortByDom from '../libs/sort-by-dom.js';

module.exports = {
    provide() {
        return {
            easel: this,
        };
    },
    data() {
        return {
            // not guaranteed to be in order
            children: [],
        };
    },
    watch: {
        children() {
            this.addPendingChildren();
        },
    },
    methods: {
        addPendingChildren() {
            if (this.component) {
                sortByDom(this.children).forEach((vueChild, i) => {
                    const atPosition = this.component.numChildren >= i ? this.component.getChildAt(i) : null;
                    if (vueChild.component === atPosition) {
                        return;
                    }
                    this.component.addChildAt(vueChild.component, i);
                });
            }
        },
        addChild(vueChild) {
            if (!this.hasChild(vueChild)) {
                this.children.push(vueChild);
            }
        },
        removeChild(vueChild) {
            const index = this.indexOfChild(vueChild);
            if (index < 0) {
                return false;
            }
            this.children.splice(index, 1);
            if (this.component) {
                this.component.removeChild(vueChild.component);
            }
            return true;
        },
        hasChild(vueChild) {
            return this.indexOfChild(vueChild) > -1;
        },
        indexOfChild(vueChild) {
            return _.findIndex(this.children, vueChild);
        },
    },
};
