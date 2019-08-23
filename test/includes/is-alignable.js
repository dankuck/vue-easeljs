import assert from 'assert';
import Vue from 'vue';

const wait = function (component) {
    return Promise.all([
        component.getAlignDimensions(),
        Vue.nextTick(),
    ]);
};

export default function isAlignable(implementor, {width, height}, extra_attributes = '') {

    return function () {

        const buildVm = function () {
            /**
             * A fake easel object. It allows adding and removing a child and has extra
             * methods to tell whether the object was added and removed.
             */
            const easel = {
                addChild(vueChild) {
                },
                removeChild(vueChild) {
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
                            :align="align"
                            ${extra_attributes}
                        >
                        </implementor>
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
            wait(fake)
                .then(() => {
                    vm.align = ['right', 'bottom'];
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.regX === width, 'Wrong regX in: ' + fake.component.regX);
                    assert(fake.component.regY === height, 'Wrong regY in: ' + fake.component.regY);
                })
                .then(done, done);
        });

        it('should set the right default alignment', function (done) {
            const {vm, fake} = buildVm();
            wait(fake)
                .then(() => {
                    vm.align = ['', ''];
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                    assert(fake.component.regY === 0, 'Wrong regY in: ' + fake.component.regY);
                })
                .then(done, done);
        });

        it('should normalize reversed array align prop', function (done) {
            const {vm, fake} = buildVm();
            wait(fake)
                .then(() => {
                    vm.align = ['bottom', 'right'];
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.regX === width, 'Wrong regX in: ' + fake.component.regX);
                    assert(fake.component.regY === height, 'Wrong regY in: ' + fake.component.regY);
                })
                .then(done, done);
        });

        it('should normalize reversed string align prop', function (done) {
            const {vm, fake} = buildVm();
            wait(fake)
                .then(() => {
                    vm.align = 'bottom-left';
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                    assert(fake.component.regY === height, 'Wrong regY in: ' + fake.component.regY);
                })
                .then(done, done);
        });

        it('should default undefined align prop', function (done) {
            const {vm, fake} = buildVm();
            wait(fake)
                .then(() => {
                    vm.align = ['bottom', 'right'];
                    return wait(fake);
                })
                .then(() => {
                    vm.align = undefined;
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.regX === 0, 'Wrong regX in: ' + fake.component.regX);
                    assert(fake.component.regY === 0, 'Wrong regY in: ' + fake.component.regY);
                })
                .then(done, done);
        });
    };
};
