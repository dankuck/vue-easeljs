import assert from 'assert';
import Vue from 'vue';
import EaselDisplayObject from '../src/mixins/EaselDisplayObject.js';
import easeljs from '../src/easel.js';
import {eventTypes} from '../src/libs/easel-event-binder.js';
import EaselFake from './fixtures/EaselFake.js';

assert(eventTypes && eventTypes.length > 0, 'easel-event-binder.js did not return a good eventTypes array');

describe.only('EaselDisplayObject', function () {

    const eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');

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
                    :align="[hAlign, vAlign]"
                    ${eventHandlerCode}
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
                hAlign: 'left',
                vAlign: 'top',
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

    let fake = vm.$refs.fake;

    it('should exist', function () {
        assert(fake);
    });

    it('should have same easel', function () {
        assert(fake.easel === easel);
    });

    it('should have component field', function () {
        assert(fake.component);
    });

    it('should have been added', function () {
        assert(easel.gotChild(fake));
    });

    it('should have x and y', function () {
        assert(fake.component.x === 1);
        assert(fake.component.y === 2);
    });

    it('should change x and y', function (done) {
        vm.x = 3;
        vm.y = 4;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.x === 3);
                assert(fake.component.y === 4);
            })
            .then(done, done);
    });

    eventTypes.forEach(type => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            fake.component.dispatchEvent(type);
            assert(vm.eventLog.length === 1);
        });
    });

    it('should go away when gone', function (done) {
        vm.showFake = false;
        Vue.nextTick()
            .then(() => {
                assert(easel.lostChild(fake));
                vm.showFake = true;
                return Vue.nextTick();
            })
            .then(() => {
                fake = vm.$refs.fake; // make sure others get the new var
            })
            .then(done, done);
    });

    it('should not flip', function (done) {
        vm.flip = '';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === 1);
                assert(fake.component.scaleY === 1);
            })
            .then(done, done);
    });

    it('should flip horizontal', function (done) {
        vm.flip = 'horizontal';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === -1);
                assert(fake.component.scaleY === 1);
            })
            .then(done, done);
    });

    it('should flip vertical', function (done) {
        vm.flip = 'vertical';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === 1);
                assert(fake.component.scaleY === -1);
            })
            .then(done, done);
    });

    it('should flip both', function (done) {
        vm.flip = 'both';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === -1);
                assert(fake.component.scaleY === -1);
            })
            .then(done, done);
    });

    it('should not rotate', function () {
        assert(!fake.component.rotation);
    });

    it('should rotate', function (done) {
        vm.rotation = 15;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.rotation === 15);
            })
            .then(done, done);
    });

    it('should not scale', function (done) {
        vm.flip = '';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === 1);
                assert(fake.component.scaleY === 1);
            })
            .then(done, done);
    });

    it('should scale to double', function (done) {
        vm.scale = 2;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.scaleX === 2);
                assert(fake.component.scaleY === 2);
            })
            .then(done, done);
    });

    it('should scale and flip', function (done) {
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
        assert(fake.component.alpha === 1, "Wrong alpha: " + fake.component.alpha);
    });

    it('should become 50% opaque', function (done) {
        vm.alpha = .5;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.alpha === .5, "Wrong alpha: " + fake.component.alpha);
            })
            .then(done, done);
    });

    it('should have no shadow', function () {
        assert(fake.component.shadow === null, "Component: " + fake.component);
    });

    it('should have shadow', function (done) {
        vm.shadow = ["black", 5, 7, 10];
        Vue.nextTick()
            .then(() => {
                assert(fake.component.shadow.color === 'black', 'Shadow color: ' + fake.component.shadow.color);
                assert(fake.component.shadow.offsetX === 5, 'Shadow offsetX: ' + fake.component.shadow.offsetX);
                assert(fake.component.shadow.offsetY === 7, 'Shadow offsetY: ' + fake.component.shadow.offsetY);
                assert(fake.component.shadow.blur === 10, 'Shadow blur: ' + fake.component.shadow.blur);
            })
            .then(done, done);
    });

    it('should have no shadow again', function (done) {
        vm.shadow = null;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.shadow === null, "Component: " + fake.component);
            })
            .then(done, done);
    });

    it('should have the right hAlign', function () {
        assert(fake.component.regX === 0, 'Wrong regX: ' + fake.component.regX);
    });

    it('should be able to change the hAlign', function (done) {
        vm.hAlign = 'right';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.regX === 32, 'Wrong regX in: ' + fake.component.regX);
            })
            .then(done, done);
    });

    it('should default hAlign to left', function (done) {
        vm.hAlign = '';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.regX === 0, 'Wrong default regX in: ' + fake.component.regX);
            })
            .then(done, done);
    });

    it('should have the right vAlign', function () {
        assert(fake.component.regY === 0, 'Wrong regY: ' + fake.component.regY);
    });

    it('should be able to change the vAlign', function (done) {
        vm.vAlign = 'bottom';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.regY === 32, 'Wrong regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should default vAlign to top', function (done) {
        vm.vAlign = '';
        Vue.nextTick()
            .then(() => {
                assert(fake.component.regY === 0, 'Wrong default regY in: ' + fake.component.regY);
            })
            .then(done, done);
    });

    it('should default to x=0,y=0', function (done) {
        vm.x = undefined;
        vm.y = undefined;
        Vue.nextTick()
            .then(() => {
                assert(fake.component.x === 0, 'Wrong default x in: ' + fake.component.x);
                assert(fake.component.y === 0, 'Wrong default y in: ' + fake.component.y);
            })
            .then(done, done);
    });
});
