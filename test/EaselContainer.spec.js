import assert from 'assert';
import EaselContainer from '../src/components/EaselContainer.vue';
import easeljs from '../easeljs/easel.js';
import Vue from 'vue';
import isAnEaselParent from './includes/is-an-easel-parent.js';
import EaselFake from './fixtures/EaselFake.js';
import isADisplayObject from './includes/is-a-display-object.js';
import canCache from './includes/can-cache.js';
const {deepStrictEqual} = assert;

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
                        :x="x"
                        :y="y"
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
                    x: 3,
                    y: 4,
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

    it.only('should get cache dimensions including the fake', function (done) {
        const {vm, container, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.x = 0;
                vm.y = 0;
                return Vue.nextTick();
            })
            .then(() => {
                return Promise.all([
                        fake.getCacheBounds(),
                        container.getCacheBounds(),
                    ]);
            })
            .then(([fakeBounds, containerBounds]) => {
                // from EaselFake fixture
                deepStrictEqual(
                    {
                        x: -10,
                        y: -20,
                        width: 30,
                        height: 40,
                    },
                    fakeBounds
                );
                // the square that surrounds a rotating EaselFake
                deepStrictEqual(
                    {
                        x: -29,
                        y: -29,
                        width: 56,
                        height: 56,
                    },
                    {
                        x: Math.floor(containerBounds.x),
                        y: Math.floor(containerBounds.y),
                        width: Math.floor(containerBounds.width),
                        height: Math.floor(containerBounds.height),
                    }
                );
            })
            .then(done, done);
    });
});
