import Vue from 'vue';
import assert from 'assert';

export default function (implementor, extra_attributes = '', propChangers = []) {
    return function () {

        const parentPropChangers = [
            {
                name: 'x',
                value: 0,
                changeTo: 1,
                shouldUpdateSameObject: false,
            },
            {
                name: 'y',
                value: 0,
                changeTo: 2,
                shouldUpdateSameObject: false,
            },
            {
                name: 'flip',
                value: '',
                changeTo: 'horizontal',
                shouldUpdateSameObject: false,
            },
            {
                name: 'rotation',
                value: '',
                changeTo: '90',
                shouldUpdateSameObject: false,
            },
            {
                name: 'scale',
                value: 1,
                changeTo: 2,
                shouldUpdateSameObject: false,
            },
            {
                name: 'alpha',
                value: 1,
                changeTo: .5,
                shouldUpdateSameObject: false,
            },
            {
                name: 'shadow',
                value: ['red', 5, 6, .5],
                changeTo: ['blue', 5, 6, .5],
                shouldUpdateSameObject: false,
            },
            {
                name: 'align',
                value: 'top-left',
                changeTo: 'bottom-right',
                shouldUpdateSameObject: false,
            },
        ];

        // Combine, favoring propChangers if there are conflicts
        const allPropChangers = propChangers
            .concat(parentPropChangers)
            .reduce((map, changer) => {
                if (map.used[changer.name]) {
                    return map;
                }
                map.used[changer.name] = true;
                map.values.push(changer);
                return map;
            }, {used: {}, values: []})
            .values;

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

            const props = allPropChangers
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
                    return allPropChangers
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
            .forEach(({name, changeTo, shouldUpdateSameObject}) => {
                it(`should ${shouldUpdateSameObject ? 'YES' : 'NOT'} update cache when ${name} changes`, function (done) {
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
                            assert(updated === shouldUpdateSameObject, `${name} did ${updated ? 'YES' : 'NOT'} cause an update`);
                        })
                        .then(done, done);
                });
            });

        allPropChangers
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
