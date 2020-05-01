import Events from '../src/libs/Events.js';
import assert from 'assert';
const {
    deepStrictEqual: equal,
    notDeepStrictEqual: notEqual,
} = assert;


describe('Events', function () {

    it('exists', function () {
        new Events();
    });

    it('lets us know when fired', function () {
        const events = new Events();
        let add = false;
        events.on('add', (param) => add = param);
        events.fire('add', '1234');
        equal('1234', add);
    });

    it('fires both cb even if one fails', function () {
        const events = new Events();
        let ran;
        events.on('add', () => { throw new Error() });
        events.on('add', () => ran = true);
        events.fire('add');
        assert(ran);
    });

    it('fires an error if an error happens', function () {
        const events = new Events({errorCode: 'error'});
        let errored;
        events.on('add', () => { throw new Error() });
        events.on('error', () => errored = true);
        events.fire('add');
        assert(errored);
    });

    it('does not fire an error if an error happens while firing an error', function () {
        const events = new Events({errorCode: 'error'});
        events.on('error', () => { throw new Error() });
        events.fire('error');
        // no infinite recursion
    });

    it('turn off', function () {
        const events = new Events();
        let add = false;
        const cb = (param) => add = param;
        events.on('add', cb);
        events.fire('add', '1234');
        equal('1234', add);
        events.off('add', cb);
        events.fire('add', 'nobody to listen');
        equal('1234', add);
    });
});
