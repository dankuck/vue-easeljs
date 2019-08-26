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
                        v-if="showFake"
                        :x="x"
                        :y="y"
                        :shadow="shadow"
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
                    showFake: true,
                    x: 3,
                    y: 4,
                    shadow: null,
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

    it('should get cache dimensions including the fake', function (done) {
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
                // The square that surrounds a rotating EaselFake
                // The square is calculated using the hypotenuse of the above
                // rectangle.
                // √(30² + 40²) = 50, a super-convenient exact number
                deepStrictEqual(
                    {
                        x: -50,
                        y: -50,
                        width: 100,
                        height: 100,
                    },
                    {
                        x: containerBounds.x,
                        y: containerBounds.y,
                        width: containerBounds.width,
                        height: containerBounds.height,
                    }
                );
            })
            .then(done, done);
    });

    it('should get cache dimensions including the shadow', function (done) {
        const {vm, container, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.x = 0;
                vm.y = 0;
                vm.shadow = ['black', 5, 10, 5];
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
                // The square that surrounds a rotating EaselFake
                // First the shadow's padding is added to all sides.
                // The shadow padding is done by adding its longest offset and
                // the blurriness amount. In this case 10 and 5. Since it's on
                // all sides, it's applied twice to width and height. That
                // makes an addition of 30 to both.
                // The square is calculated using the hypotenuse of the
                // resulting rectangle.
                // √((30 + 30)² + (40 + 30)²) ~= 92
                deepStrictEqual(
                    {
                        x: -92,
                        y: -92,
                        width: 184,
                        height: 184,
                    },
                    {
                        x: Math.round(containerBounds.x),
                        y: Math.round(containerBounds.y),
                        width: Math.round(containerBounds.width),
                        height: Math.round(containerBounds.height),
                    }
                );
            })
            .then(done, done);
    });

    it('should update cache when children disappear', function (done) {
        const {vm, container, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                container.cacheNeedsUpdate = false;
                vm.showFake = false;
                return Vue.nextTick();
            })
            .then(() => {
                assert(container.cacheNeedsUpdate);
            })
            .then(done, done);
    });

    it('should update cache when children reappear', function (done) {
        const {vm, container, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.showFake = false;
                return Vue.nextTick();
            })
            .then(() => {
                container.cacheNeedsUpdate = false;
                vm.showFake = true;
                return Vue.nextTick();
            })
            .then(() => {
                assert(container.cacheNeedsUpdate);
            })
            .then(done, done);
    });
});
