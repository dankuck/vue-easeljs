const assert = require('assert');
const _ = require('lodash');

describe('Example Class', function() {
    describe('#constructor', function() {
        it('should not error', function() {
            new Example([]);
            // no exception
        });
    });
    describe('#method1', function() {
        it('should do something', function() {
            var example = new Example();
            assert.equal(true, example.method1());
        });
    });
});
