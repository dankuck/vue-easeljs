import Vue from 'vue';
import assert from 'assert';
import easeljs from '../../easeljs/easel.js';

export default function (implementor, extra_attributes = '') {
    return function () {

        const buildVm = function () {
            /**
             * A fake easel object
             */
            const easel = {
                addChild() {
                },
                removeChild() {
                },
                createCanvas(cb) {
                    return cb();
                },
            };

            const vm = new Vue({
                template: `
                    <span>
                        <implementor ref="fake"
                            v-if="showFake"
                            :cache="cache"
                            :filters="filters"
                            ${extra_attributes}
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    return {
                        easelParent: easel,
                        easelCanvas: easel,
                    };
                },
                data() {
                    return {
                        showFake: true,
                        cache: false,
                        filters: null,
                    };
                },
                components: {
                    implementor,
                },
                methods: {
                },
            }).$mount();

            const fake = vm.$refs.fake;

            return {fake, vm, easel};
        };

        it('should exist', function () {
            const {vm, fake} = buildVm();
            assert(fake);
        });

        it('should have $el', function () {
            const {vm, fake} = buildVm();
            assert(fake.$el);
        });

        it('should have component field', function () {
            const {vm, fake} = buildVm();
            assert(fake.component);
        });

        it('should have a filter', function (done) {
            const {vm, fake} = buildVm();
            vm.filters = [['BlurFilter', 5, 5, 1]];
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.filters);
                    assert(fake.component.filters.length === 1);
                    assert(fake.component.filters[0] instanceof easeljs.BlurFilter);
                })
                .then(done, done);
        });

        it.only('should cache when filtering', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.component.cacheCanvas === null);
            vm.filters = [['BlurFilter', 5, 5, 1]];
            Vue.nextTick()
                .then(() => {
                    return Vue.nextTick();
                })
                .then(() => {
                    return Vue.nextTick();
                })
                .then(() => {
                    return Vue.nextTick();
                })
                .then(() => {
                    return Vue.nextTick();
                })
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'no cache');
                })
                .then(done, done);
        });

        it('should add and remove filters');
    };
};
