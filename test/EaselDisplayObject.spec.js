import assert from 'assert';
import Vue from 'vue';
import easeljs from '../src/easel.js';
import EaselFake from './fixtures/EaselFake.js';
import doesEvents from './includes/does-events.js';
import isADisplayObject from './includes/is-a-display-object.js';

describe('EaselDisplayObject', function () {

    describe('is a display object that', isADisplayObject(EaselFake));

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

    /**
     * Alignment tests are only done here, because in some components, they
     * depend too much on having a real easel.
     */

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
});
