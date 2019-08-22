import Vue from 'vue';
import assert from 'assert';

const parentPropChangers = [
    {
        name: 'flip',
        value: '',
        changeTo: 'horizontal',
    },
];

export default function (implementor, extra_attributes = '', propChangers = []) {
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
                cacheNeedsUpdate: false,
            };

            const props = propChangers
                .concat(parentPropChangers)
                .map(changer => changer.name)
                .map(name => `:${name}="${name}"`)
                .join("\n");

            const vm = new Vue({
                template: `
                    <span>
                        <implementor ref="fake"
                            ${props}
                            :cache="cache"
                            ${extra_attributes}
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    return {easel};
                },
                data() {
                    const data = {
                        cache: true,
                    };
                    return propChangers
                        .concat(parentPropChangers)
                        .reduce((acc, changer) => {
                            acc[changer.name] = changer.value;
                            return acc;
                        }, data);
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

        it('can cache on init', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.cache === true);
            assert(fake.component.cacheCanvas === null);
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.cacheCanvas !== null);
                })
                .then(done, done);
        });

        it('can clear cache', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.cache === true);
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    vm.cache = false;
                    return Vue.nextTick();
                })
                .then(() => {
                    assert(fake.component.cacheCanvas === null, 'Did not destroy cache');
                })
                .then(done, done);
        });

        it('can clear and recreate cache', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.cache === true);
            Vue.nextTick()
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    vm.cache = false;
                    return Vue.nextTick();
                })
                .then(() => {
                    assert(fake.component.cacheCanvas === null, 'Did not destroy cache');
                    vm.cache = true;
                    return Vue.nextTick();
                })
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not re-create cache');
                })
                .then(done, done);
        });

        propChangers
            .filter(changer => changer.changeTo)
            .forEach(({name, changeTo, shouldUpdate}) => {
                it(`should ${shouldUpdate ? 'YES' : 'NOT'} update cache when ${name} changes`, function (done) {
                    const {vm, fake} = buildVm();
                    assert(fake.cache === true);
                    let updated = false;
                    fake.component.updateCache = () => updated = true;
                    Vue.nextTick()
                        .then(() => {
                            assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                            updated = false;
                            vm[name] = changeTo;
                            return Vue.nextTick();
                        })
                        .then(() => {
                            assert(updated === shouldUpdate, `${name} did ${updated ? 'YES' : 'NOT'} cause an update`);
                        })
                        .then(done, done);
                });
            });

        propChangers
            .concat(parentPropChangers)
            .forEach(({name, changeTo}) => {
                it(`should update easel.cacheNeedsUpdate when ${name} changes`, function (done) {
                    const {vm, fake, easel} = buildVm();
                    // Works whether or not cache is on for this component
                    vm.cache = Math.random() > .5 ? true : false;
                    // Let the component catch up with `cache` change
                    Vue.nextTick()
                        .then(() => {
                            easel.cacheNeedsUpdate = false;
                            vm[name] = changeTo;
                            return Vue.nextTick();
                        })
                        .then(() => {
                            assert(easel.cacheNeedsUpdate === true);
                        })
                        .then(done, done);
                });
            });
    };
};
