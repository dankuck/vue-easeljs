import PromiseParty from '../src/libs/PromiseParty.js';
import assert from 'assert';
const {
    deepStrictEqual: equal,
    notDeepStrictEqual: notEqual,
} = assert;


describe('PromiseParty', function () {

    it('exists', function () {
        new PromiseParty();
    });

    it('adds a Promise', function () {
        const party = new PromiseParty();
        party.add(Promise.resolve());
    });

    it('does not add a not-Promise', function () {
        const party = new PromiseParty();
        let error;
        try {
            party.add({});
        } catch (e) {
            error = e;
        }
        assert(error);
    });

    it('lets us know when a Promise is added', function () {
        const party = new PromiseParty();
        let add = false;
        party.on('add', () => add = true);
        party.add(Promise.resolve());
        assert(add);
    });

    it('lets us know when a Promise completes', function (done) {
        const party = new PromiseParty();
        let remove = false;
        party.on('remove', () => remove = true);
        let resolve;
        const promise = new Promise(r => resolve = r);
        party.add(promise);
        resolve();
        promise
            .then(() => assert(remove))
            .then(done, done);
    });

    it('lets us know how many promises there are', function (done) {
        const party = new PromiseParty();
        let lastAdded;
        let lastRemoved;
        let lastChanged;
        party.on('add', (count) => lastAdded = count);
        party.on('remove', (count) => lastRemoved = count);
        party.on('change', (count) => lastChanged = count);
        const promise1 = Promise.resolve();
        let resolve2;
        const promise2 = new Promise(r => resolve2 = r);
        let reject3;
        const promise3 = new Promise((z, r) => reject3 = r);
        party.add(promise1);
        equal(1, lastAdded);
        equal(1, lastChanged);
        promise1
            .then(() => equal(0, lastRemoved))
            .then(() => equal(0, lastChanged))
            .then(() => {
                party.add(promise2);
                equal(1, lastAdded); // because of promise2
                equal(1, lastChanged);
                party.add(promise3);
                equal(2, lastAdded); // because of promise2 and promise3
                equal(2, lastChanged);
                equal(0, lastRemoved); // no change
            })
            .then(() => resolve2())
            .then(() => promise2)
            .then(() => {
                equal(2, lastAdded); // no change
                equal(1, lastRemoved); // because promise2 ended
                equal(1, lastChanged);
            })
            .then(() => reject3())
            .then(() => promise3)
            .then(() => {
                equal(2, lastAdded); // no change
                equal(0, lastRemoved); // because promise3 ended
                equal(0, lastChanged);
            })
            .then(done, done);
    });

    it('returns itself when adding and removing listeners', function () {
        const party = new PromiseParty();
        const same = party.on('add', () => void(0));
        assert(party === same);
        const sameAgain = party.off('not even a thing', () => void(0));
        assert(party === sameAgain);
    });
});
