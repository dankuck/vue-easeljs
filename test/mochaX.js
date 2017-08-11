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
        try {
            return closure.apply(this, arguments);
        } catch (e) {
            console.error(e.toString());
            throw e;
        }
    };
};
