import assert from 'assert';
import EaselContainer from '../src/components/EaselContainer.vue';
import easeljs from '../easeljs/easel.js';
import Vue from 'vue';
import isAnEaselParent from './includes/is-an-easel-parent.js';
import EaselFake from './fixtures/EaselFake.js';
import isADisplayObject from './includes/is-a-display-object.js';
import canCache from './includes/can-cache.js';

describe('EaselContainer', function () {

    describe('is an easel parent that', isAnEaselParent(EaselContainer));

    describe('is a display object that', isADisplayObject(EaselContainer));

    describe('is cacheable and', canCache(EaselContainer, {}, []));

    const buildVm = function () {
        const easel = {
            addChild(vueChild) {
            },
            removeChild(vueChild) {
            },
        };

        const vm = new Vue({
            template: `
                <easel-container ref="container">
                    <easel-fake ref="fake"
                        x="3"
                        y="4"
                    >
                    </easel-fake>
                </easel-container>
            `,
            provide() {
                return {
                    easel: easel,
                };
            },
            data() {
                return {
                };
            },
            components: {
                'easel-fake': EaselFake,
                'easel-container': EaselContainer,
            },
        }).$mount();

        const container = vm.$refs.container;
        const fake = vm.$refs.fake;

        return {vm, container, fake};
    };

    it('should exist', function () {
        const {vm, container, fake} = buildVm();
        assert(container);
    });

    it('should have an easel', function () {
        const {vm, container, fake} = buildVm();
        assert(container.easel);
    });

    it('should have component field', function () {
        const {vm, container, fake} = buildVm();
        assert(container.component);
    });

    it('should be the parent of the fake', function (done) {
        const {vm, container, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                assert(fake.component.parent === container.component);
            })
            .then(done, done);
    });
});
