import FilterSet from '../src/libs/FilterSet.js';
import assert from 'assert';
const {deepStrictEqual: equal} = assert;

const randomName = () => 'Custom' + new String(Math.random()).substr(-8);

describe('FilterSet', function () {

    it('registers and builds a class with applyFilter', function () {
        const name = randomName();
        let caughtArguments;
        const filters = new FilterSet();
        filters.register(name, class Custom {
            constructor(x) {
                this.x = x;
            }
            applyFilter(...args) {
                caughtArguments = args;
            }
        });
        const filter = filters.build([name, 'y']);
        assert(typeof filter.applyFilter === 'function');
        filter.applyFilter(1, 2, 3, 4, 5, 6, 7, 8);
        equal([1, 2, 3, 4, 5, 6, 7, 8], caughtArguments);
        assert(filter.x === 'y');
    });

    it('registers and builds a class with adjustImageData', function () {
        const name = randomName();
        let caughtArguments;
        const filters = new FilterSet();
        filters.register(name, class Custom {
            constructor(x) {
                this.x = x;
            }
            adjustImageData(...args) {
                caughtArguments = args;
            }
        });
        const ctx = {getImageData(){ return 'image data'; }};
        const filter = filters.build([name, 'y']);
        assert(typeof filter.applyFilter === 'function');
        filter.applyFilter(ctx, 2, 3, 4, 5, 6, 7, 8);
        equal(['image data'], caughtArguments);
        assert(filter.x === 'y');
    });

    it('registers and builds a class with adjustContext', function () {
        const name = randomName();
        let caughtArguments;
        const filters = new FilterSet();
        filters.register(name, class Custom {
            constructor(x) {
                this.x = x;
            }
            adjustContext(...args) {
                caughtArguments = args;
            }
        });
        const filter = filters.build([name, 'y']);
        assert(typeof filter.applyFilter === 'function');
        filter.applyFilter(1, 2, 3, 4, 5, 6, 7, 8);
        equal([1, 2, 3, 4, 5, 6, 7, 8], caughtArguments);
        assert(filter.x === 'y');
    });

    it('rejects a class with none of those', function () {
        let caught;
        const filters = new FilterSet();
        try {
            filters.register(randomName(), class Custom {
            });
        } catch (e) {
            caught = e;
        }
        assert(caught);
    });

    it('rejects a class with just _applyFilter', function () {
        let caught;
        const filters = new FilterSet();
        try {
            filters.register(randomName(), class Custom {
                _applyFilter(){}
            });
        } catch (e) {
            caught = e;
        }
        assert(caught);
    });

    it('fails to build an unknown class', function () {
        let caught;
        const filters = new FilterSet();
        try {
            filters.build(['NO_SUCH_NAME']);
        } catch (e) {
            caught = e;
        }
        assert(caught);
    });
});
