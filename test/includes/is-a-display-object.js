import assert from 'assert';
import Vue from 'vue';
import doesEvents from './does-events.js';
import easeljs from '../../easeljs/easel.js';

/**
 * Returns a function to be used with `describe` for any component that is an
 * EaselDisplayObject.
 *
 * Like this:
 * `describe('is a display object that', isADisplayObject(MyComponent)`
 * @param  VueComponent  implementor
 * @return function
 */
export default function (implementor, extra_attributes = '', provide = {}) {

    return function () {

        describe('does events and', doesEvents(implementor, extra_attributes, provide));


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
                        <implementor ref="fake"
                            v-if="showFake"
                            :x="x"
                            :y="y"
                            :flip="flip"
                            :rotation="rotation"
                            :scale="scale"
                            :alpha="alpha"
                            :shadow="shadow"
                            :align="[hAlign, vAlign]"
                            ${extra_attributes}
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    provide.easel = easel;
                    return provide;
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
                        hAlign: 'left',
                        vAlign: 'top',
                    };
                },
                components: {
                    implementor,
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

            return {fake, vm, easel};
        };

        it('should exist', function () {
            const {fake, vm, easel} = buildVm();
            assert(fake);
        });

        it('should have same easel', function () {
            const {fake, vm, easel} = buildVm();
            assert(fake.easel === easel);
        });

        it('should have component field', function () {
            const {fake, vm, easel} = buildVm();
            assert(fake.component);
        });

        it('should have been added', function (done) {
            const {fake, vm, easel} = buildVm();
            Vue.nextTick()
                .then(() => {
                    assert(easel.gotChild(fake));
                })
                .then(done, done);
        });

        it('should go away when gone', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.showFake = false;
            Vue.nextTick()
                .then(() => {
                    assert(easel.lostChild(fake));
                    vm.showFake = true;
                    return Vue.nextTick();
                })
                .then(done, done);
        });

        it('should have x and y', function (done) {
            const {fake, vm, easel} = buildVm();
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.x === 1);
                    assert(fake.component.y === 2);
                })
                .then(done, done);
        });

        it('should change x and y', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.x = 3;
            vm.y = 4;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.x === 3);
                    assert(fake.component.y === 4);
                })
                .then(done, done);
        });

        it('should not flip', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.flip = '';
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === 1);
                    assert(fake.component.scaleY === 1);
                })
                .then(done, done);
        });

        it('should flip horizontal', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.flip = 'horizontal';
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === -1);
                    assert(fake.component.scaleY === 1);
                })
                .then(done, done);
        });

        it('should flip vertical', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.flip = 'vertical';
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === 1);
                    assert(fake.component.scaleY === -1);
                })
                .then(done, done);
        });

        it('should flip both', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.flip = 'both';
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === -1);
                    assert(fake.component.scaleY === -1);
                })
                .then(done, done);
        });

        it('should not rotate', function () {
            const {fake, vm, easel} = buildVm();
            assert(!fake.component.rotation);
        });

        it('should rotate', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.rotation = 15;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.rotation === 15);
                })
                .then(done, done);
        });

        it('should not scale', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.flip = '';
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === 1);
                    assert(fake.component.scaleY === 1);
                })
                .then(done, done);
        });

        it('should scale to double', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.scale = 2;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === 2);
                    assert(fake.component.scaleY === 2);
                })
                .then(done, done);
        });

        it('should scale and flip', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.scale = 2;
            vm.flip = "both";
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.scaleX === -2);
                    assert(fake.component.scaleY === -2);
                })
                .then(done, done);
        });

        it('should be 100% opaque', function () {
            const {fake, vm, easel} = buildVm();
            assert(fake.component.alpha === 1, "Wrong alpha: " + fake.component.alpha);
        });

        it('should become 50% opaque', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.alpha = .5;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.alpha === .5, "Wrong alpha: " + fake.component.alpha);
                })
                .then(done, done);
        });

        it('should have no shadow', function () {
            const {fake, vm, easel} = buildVm();
            assert(fake.component.shadow === null);
        });

        it('should have shadow', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.shadow = ["black", 5, 7, 10];
            Vue.nextTick()
                .then(() => {
                    assert(fake.component, 'missing component');
                    assert(fake.component.shadow, 'missing shadow');
                    assert(fake.component.shadow.color, 'missing color');
                    assert(fake.component.shadow.color === 'black', 'Shadow color: ' + fake.component.shadow.color);
                    assert(fake.component.shadow.offsetX === 5, 'Shadow offsetX: ' + fake.component.shadow.offsetX);
                    assert(fake.component.shadow.offsetY === 7, 'Shadow offsetY: ' + fake.component.shadow.offsetY);
                    assert(fake.component.shadow.blur === 10, 'Shadow blur: ' + fake.component.shadow.blur);
                })
                .then(done, done);
        });

        it('should have no shadow again', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.shadow = null;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.shadow === null);
                })
                .then(done, done);
        });

        it('should default to x=0,y=0', function (done) {
            const {fake, vm, easel} = buildVm();
            vm.x = undefined;
            vm.y = undefined;
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.x === 0, 'Wrong default x in: ' + fake.component.x);
                    assert(fake.component.y === 0, 'Wrong default y in: ' + fake.component.y);
                })
                .then(done, done);
        });
    };
};
