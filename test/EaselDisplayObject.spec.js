import assert from 'assert';
import Vue from 'vue';
import easeljs from '../easeljs/easel.js';
import EaselFake from './fixtures/EaselFake.js';
import doesEvents from './includes/does-events.js';
import isADisplayObject from './includes/is-a-display-object.js';

describe('EaselDisplayObject', function () {

    describe('is a display object that', isADisplayObject(EaselFake));

    const buildVm = function () {
        /**
         * A fake easel object. It allows adding and removing a child and has extra
         * methods to tell whether the object was added and removed.
         */
        const easel = {
            gotChild(vueChild) {
                return vueChild.added;
            },
            lostChild(vueChild) {
                return vueChild.removed;
            },
            addChild(vueChild) {
                vueChild.added = true;
            },
            removeChild(vueChild) {
                vueChild.removed = true;
            },
        };

        const vm = new Vue({
            template: `
                <span>
                    <easel-fake ref="fake"
                        v-if="showFake"
                        :x="x"
                        :y="y"
                        :flip="flip"
                        :rotation="rotation"
                        :scale="scale"
                        :alpha="alpha"
                        :shadow="shadow"
                        :align="align"
                    >
                    </easel-fake>
                </span>
            `,
            provide() {
                return {
                    easel: easel,
                };
            },
            data() {
                return {
                    x: 1,
                    y: 2,
                    eventLog: [],
                    showFake: true,
                    flip: '',
                    rotation: null,
                    scale: 1,
                    alpha: null,
                    shadow: null,
                    align: ['left', 'top'],
                };
            },
            components: {
                EaselFake,
            },
            methods: {
                logEvent(event) {
                    this.eventLog.push(event);
                },
                clearEventLog() {
                    this.eventLog = [];
                },
            },
        }).$mount();

        const fake = vm.$refs.fake;

        return {vm, fake};
    };

    /**
     * Alignment tests are only done here, because in some components, they
     * depend too much on having a real easel.
     */

    it('should have the right given alignment', function () {
        const {vm, fake} = buildVm();
        assert(fake.component.regX === 0, 'Wrong regX: ' + fake.component.regX);
        assert(fake.component.regY === 0, 'Wrong regY: ' + fake.component.regY);
    });

    it('should be able to change the alignment', function (done) {
        const {vm, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['right', 'bottom'];
                return Vue.nextTick()
            })
            .then(() => {
                assert(fake.component.regX === 32, 'Wrong regX in: ' + fake.component.regX);
                assert(fake.component.regY === 48, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should set the right default alignment', function (done) {
        const {vm, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['', ''];
                return Vue.nextTick()
            })
            .then(() => {
                assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                assert(fake.component.regY === 0, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should normalize reversed array align prop', function (done) {
        const {vm, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['bottom', 'right'];
                return Vue.nextTick();
            })
            .then(() => {
                assert(fake.component.regX === 32, 'Wrong regX in: ' + fake.component.regX);
                assert(fake.component.regY === 48, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should normalize reversed string align prop', function (done) {
        const {vm, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = 'bottom-left';
                return Vue.nextTick();
            })
            .then(() => {
                assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                assert(fake.component.regY === 48, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should default undefined align prop', function (done) {
        Vue.config.errorHandler = done;
        const {vm, fake} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['bottom', 'right'];
                return Vue.nextTick();
            })
            .then(() => {
                vm.align = undefined;
                return Vue.nextTick();
            })
            .then(() => {
                assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                assert(fake.component.regY === 0, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });
});
