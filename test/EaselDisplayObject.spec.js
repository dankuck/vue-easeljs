import EaselFake from './fixtures/EaselFake.js';
import isADisplayObject from './includes/is-a-display-object.js';
import isAlignable from './includes/is-alignable.js';

describe('EaselDisplayObject', function () {

    describe('is a display object that', isADisplayObject(EaselFake));

    describe('is alignable and', isAlignable(EaselFake, {width: 32, height: 48}));
});
