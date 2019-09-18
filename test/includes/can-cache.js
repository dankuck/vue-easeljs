import Vue from 'vue';
import assert from 'assert';

const wait = function (component, count = 1) {
    let promise = Promise.all([
        component.getCacheBounds(),
        Vue.nextTick(),
    ]);
    if (count > 1) {
        return promise.then(() => wait(component, count - 1));
    } else {
        return promise;
    }
};

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
        shouldUpdateSameObject: true,
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
    // `align` could technically be on this list, but it's not guaranteed to be
    // on all EaselCache components
];

export default function (implementor, provide = {}, propChangers = []) {
    return function () {

        const allPropChangers = propChangers
            .concat(parentPropChangers)

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
                createCanvas(cb) {
                    return cb();
                },
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
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    provide.easelParent = easel;
                    return provide;
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
            wait(fake)
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                })
                .then(done, done);
        });

        it('can clear cache', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.cache === true);
            wait(fake)
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    vm.cache = false;
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.cacheCanvas === null, 'Did not destroy cache');
                })
                .then(done, done);
        });

        it('can clear and recreate cache', function (done) {
            const {vm, fake} = buildVm();
            assert(fake.cache === true);
            wait(fake)
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    vm.cache = false;
                    return wait(fake);
                })
                .then(() => {
                    assert(fake.component.cacheCanvas === null, 'Did not destroy cache');
                    vm.cache = true;
                    return wait(fake, 2);
                })
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not re-create cache');
                })
                .then(done, done);
        });

        // Search catchers:
        // ... should YES update cache when ...
        // ... should NOT update cache when ...
        allPropChangers
            .forEach(({name, changeTo, shouldUpdateSameObject}) => {
                it(`should ${shouldUpdateSameObject ? 'YES' : 'NOT'} update cache when ${name} changes`, function (done) {
                    const {vm, fake} = buildVm();
                    assert(fake.cache === true);
                    let bitmapCache, cacheID;
                    wait(fake)
                        .then(() => {
                            assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                            bitmapCache = fake.component.bitmapCache;
                            cacheID = bitmapCache && bitmapCache.cacheID;
                            vm[name] = changeTo;
                            return wait(fake);
                        })
                        .then(() => {
                            // Check the bitmapCache object and the cacheID
                            // because the cache may have updated by replacing
                            // the whole object or it may have just updated and
                            // incremented its ID.
                            const updated = (
                                bitmapCache !== fake.component.bitmapCache
                                || cacheID !== bitmapCache.cacheID
                            );
                            assert(updated === shouldUpdateSameObject, `${name} did ${updated ? 'YES' : 'NOT'} cause an update: ${fake[name]}`);
                        })
                        .then(done, done);
                });
            });

        // Search catchers:
        // ... should YES update easel.cacheNeedsUpdate when ...
        // ... should NOT update easel.cacheNeedsUpdate when ...
        allPropChangers
            .forEach(({name, changeTo}) => {
                it(`should update easel.cacheNeedsUpdate when ${name} changes`, function (done) {
                    const {vm, fake, easel} = buildVm();
                    // Works whether or not cache is on for this component
                    vm.cache = Math.random() > .5 ? true : false;
                    // Let the component catch up with `cache` change
                    wait(fake)
                        .then(() => {
                            easel.cacheNeedsUpdate = false;
                            vm[name] = changeTo;
                            return wait(fake);
                        })
                        .then(() => {
                            assert(easel.cacheNeedsUpdate === true, `${name} did NOT cause an update: ${fake[name]}`);
                        })
                        .then(done, done);
                });
            });

        it('should update on change event', function (done) {
            const {vm, fake, easel} = buildVm();
            assert(fake.cache === true);
            let bitmapCache, cacheID;
            wait(fake, 2) // EaselBitmap needs an extra tick
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    bitmapCache = fake.component.bitmapCache;
                    cacheID = bitmapCache && bitmapCache.cacheID;
                    easel.cacheNeedsUpdate = false;
                    fake.component.dispatchEvent('change')
                    return wait(fake);
                })
                .then(() => {
                    // Check the bitmapCache object and the cacheID
                    // because the cache may have updated by replacing
                    // the whole object or it may have just updated and
                    // incremented its ID.
                    const updated = (
                        bitmapCache !== fake.component.bitmapCache
                        || cacheID !== bitmapCache.cacheID
                    );
                    assert(updated, `Event 'change' did not cause an update`);
                    assert(easel.cacheNeedsUpdate === true, `Event 'change' did NOT cause an update to easel.cacheNeedsUpdate`);
                })
                .then(done, done);
        });

        it('should update cache on window resize', function (done) {
            const {vm, fake, easel} = buildVm();
            let bitmapCache, cacheID;
            wait(fake, 2) // EaselBitmap needs an extra tick
                .then(() => {
                    assert(fake.component.cacheCanvas !== null, 'Did not create cache');
                    bitmapCache = fake.component.bitmapCache;
                    cacheID = bitmapCache && bitmapCache.cacheID;
                    window.dispatchEvent(new Event('resize'));
                    return wait(fake);
                })
                .then(() => {
                    // Check the bitmapCache object and the cacheID
                    // because the cache may have updated by replacing
                    // the whole object or it may have just updated and
                    // incremented its ID.
                    const updated = (
                        bitmapCache !== fake.component.bitmapCache
                        || cacheID !== bitmapCache.cacheID
                    );
                    assert(updated, `Window resize did not cause an update`);
                    assert(easel.cacheNeedsUpdate === true, `Window resize did NOT cause an update to easel.cacheNeedsUpdate`);
                })
                .then(done, done);
        });
    };
};
