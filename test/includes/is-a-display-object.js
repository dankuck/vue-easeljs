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
                            :cursor="cursor"
                            :visible="visible"
                            :name="name"
                            ${extra_attributes}
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    provide.easelParent = easel;
                    provide.easelCanvas = easel;
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
                        cursor: null,
                        visible: null,
                        name: null,
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
            assert(fake.easelParent === easel);
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
            vm.shadow = ["black", 5, 7, 10];
            Vue.nextTick()
                .then(() => {
                    assert(fake.component, 'missing component');
                    assert(fake.component.shadow, 'missing shadow');
                    vm.shadow = null;
                    return Vue.nextTick();
                })
                .then(() => {
                    assert(fake.component.shadow === null);
                })
                .then(done, done);
        });

        describe('visibility', function () {

            const waitUntilVisible = function (fake) {
                return new Promise(resolve => {
                    fake.$watch('component.visible', () => {
                        if (fake.component.visible) {
                            resolve();
                        }
                    }, {immediate: true});
                });
            };

            const waitUntilInvisible = function (fake) {
                return new Promise(resolve => {
                    fake.$watch('component.visible', () => {
                        if (!fake.component.visible) {
                            resolve();
                        }
                    }, {immediate: true});
                });
            };

            it('should be visible', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = true;
                Vue.nextTick()
                    .then(() => waitUntilVisible(fake))
                    .then(done, done);
            });

            it('should be invisible explicitly', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = false;
                Vue.nextTick()
                    .then(() => waitUntilInvisible(fake))
                    .then(done, done);
            });

            it('should be invisible due to visibility blocker promise', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = true;
                fake.remainInvisibleUntil(new Promise(() => void(0)));
                Vue.nextTick()
                    .then(() => waitUntilInvisible(fake))
                    .then(done, done);
            });

            it('should be visible when blocker promise is already resolved', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = true;
                fake.remainInvisibleUntil(Promise.resolve());
                Vue.nextTick()
                    .then(() => waitUntilVisible(fake))
                    .then(done, done);
            });

            it('should be visible when blocker promise is already rejected', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = true;
                fake.remainInvisibleUntil(Promise.reject());
                Vue.nextTick()
                    .then(() => waitUntilVisible(fake))
                    .then(done, done);
            });

            it('should become visible when blocker promise resolves', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = false;
                let resolve;
                fake.remainInvisibleUntil(new Promise(r => resolve = r));
                Vue.nextTick()
                    .then(() => waitUntilInvisible(fake))
                    .then(() => resolve())
                    .then(() => vm.visible = true)
                    .then(() => waitUntilVisible(fake))
                    .then(done, done);
            });

            it('should become visible when blocker promise rejects', function (done) {
                const {fake, vm, easel} = buildVm();
                vm.visible = false;
                let reject;
                fake.remainInvisibleUntil(new Promise((z, r) => reject = r));
                Vue.nextTick()
                    .then(() => waitUntilInvisible(fake))
                    .then(() => reject())
                    .then(() => vm.visible = true)
                    .then(() => waitUntilVisible(fake))
                    .then(done, done);
            });
        });

        // These fields are simply copied through to the component, so we test
        // that that copying works as intended.

        const passthrough = {
            cursor: 'pointer',
            rotation: 15,
            name: 'Charles Wallace',
        };

        Object.keys(passthrough).forEach(function (field) {
            const value = passthrough[field];

            it(`should have ${field} = null`, function (done) {
                const {fake, vm, easel} = buildVm();
                Vue.nextTick()
                    .then(() => {
                        assert(fake.component[field] === null, `Wrong ${field}: ${fake.component[field]}`);
                    })
                    .then(done, done);
            });

            it(`should have ${field} = ${value}`, function (done) {
                const {fake, vm, easel} = buildVm();
                vm[field] = value;
                Vue.nextTick()
                    .then(() => {
                        assert(fake.component, 'missing component');
                        assert(fake.component[field] === value, `Wrong ${field}: ${fake.component[field]}`);
                    })
                    .then(done, done);
            });

            it(`should have ${field} = ${value}, then null again`, function (done) {
                const {fake, vm, easel} = buildVm();
                vm[field] = value;
                Vue.nextTick()
                    .then(() => {
                        assert(fake.component, 'missing component');
                        assert(fake.component[field] === value, `Wrong ${field}: ${fake.component[field]}`);
                        vm[field] = null;
                        return Vue.nextTick();
                    })
                    .then(() => {
                        assert(fake.component[field] === null);
                    })
                    .then(done, done);
            });
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
