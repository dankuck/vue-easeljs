import EaselFake from './fixtures/EaselFake.js';
import isADisplayObject from './includes/is-a-display-object.js';

describe('EaselDisplayObject', function () {

    describe('is a display object that', isADisplayObject(EaselFake));
});
