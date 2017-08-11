/*
|--------------------------------------------------------------------------
| mochaX
|--------------------------------------------------------------------------
|
| Give this a closure and get back another closure that will helpfully log
| any exceptions thrown.
*/
module.exports = function (closure) {
    return function () {
        var args = Array.prototype.slice.apply(arguments);
        try {
            return closure.apply(this, args);
        } catch (e) {
            console.error(e.toString());
            throw e;
        }
    };
};
