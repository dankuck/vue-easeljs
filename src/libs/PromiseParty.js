import Events from './Events';

/**
 |-------------------
 | PromiseParty
 |-------------------
 | Send your Promises to a party and keep track of how many are there. Promises
 | leave the party when they resolve or reject.
 |
 | When a Promise is added, an 'add' event is fired, with the number of
 | Promises currently at the party.
 |
 | When a Promise completes (either resolves or rejects), a 'remove' event is
 | fired, with the number of Promises currently at the party.
 |
 | In both cases, a 'change' event is fired, and wouldn't you know it, it also
 | includes the number of Promises currently at the party.
 |
 | Use `on(<event name>, <callback>)` to listen to events.
 |
 | Use `off(<event name>, <callback>)` when you don't want to listen anymore.
 |
 | Use `add(Promise)` to send a new Promise to the party.
 |
 */
export default class PromiseParty {

    constructor() {
        this.events = new Events({errorCode: 'error'});
        this.promises = new Set();
    }

    add(promise) {
        if (!promise.finally) {
            throw new Error('We only accept promises here');
        }

        this.promises.add(promise);
        this.events.fire('add', this.promises.size);
        this.events.fire('change', this.promises.size);

        promise.finally(() => {
            this.promises.delete(promise);
            this.events.fire('remove', this.promises.size);
            this.events.fire('change', this.promises.size);
        });
    }

    on(event, cb) {
        this.events.on(event, cb);
        return this;
    }

    off(event, cb) {
        this.events.off(event, cb);
        return this;
    }
};
