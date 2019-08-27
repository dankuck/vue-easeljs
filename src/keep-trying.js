/**
 * Pass a closure to this and get back a function.
 *
 * The closure receives one parameter `tryAgain`.
 *
 * Whenever the returned function is called, it will call the closure. If the
 * closure completes, then nothing special happens.
 *
 * But if the closure calls `tryAgain`, excution of the closure stops
 * immediately, and the closure is scheduled to run again on an interval every
 * 100ms. It will keep running until it completes without calling `tryAgain`.
 *
 * If the returned function is called again while the interval is running, the
 * closure will be run, but no extra interval will be created.
 */
export default function keepTrying (cb) {
    const tryAgainBreakOut = {};
    let resizer = null;
    let tryAgain = false;
    const tryAgainCb = () => {
        tryAgain = true;
        throw tryAgainBreakOut;
    };
    return function () {
        const callCb = () => {
            tryAgain = false;
            try {
                cb(tryAgainCb);
            } catch (e) {
                if (e !== tryAgainBreakOut) {
                    throw e;
                }
            }
            if (tryAgain && !resizer) {
                resizer = setInterval(callCb, 100);
            }
            if (!tryAgain && resizer) {
                clearInterval(resizer);
                resizer = null;
            }
        };
        callCb();
    };
};
