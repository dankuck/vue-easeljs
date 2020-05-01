/**
 |---------------------
 | Events
 |---------------------
 | You need a basic event library. Here it is.
 |
 | Call events.on(string, Function) when you want it to send <string> events
 | to <Function>.
 |
 | Call events.off(string, Function) when you want it to stop.
 |
 | Call events.fire(string, ...args) to call all the callbacks for <string>
 | with the arguments that follow it.
 |
 */
export default class Events {

    constructor({errorCode} = {}) {
        this.callbacks = [];
        this.errorCode = errorCode;
    }

    on(event, cb) {
        this.callbacks.push({event, cb});
    }

    off(removeEvent, removeCb) {
        this.callbacks = this.callbacks
            .filter(({event, cb}) => ! (event === removeEvent && cb === removeCb));
    }

    fire(fireEvent, ...args) {
        this.callbacks
            .filter(({event}) => event === fireEvent)
            .forEach(({cb}) => {
                try {
                    cb(...args)
                } catch (e) {
                    if (this.errorCode && fireEvent !== this.errorCode) {
                        this.fire(this.errorCode, fireEvent, args, cb, e);
                    }
                }
            });
    }
};
