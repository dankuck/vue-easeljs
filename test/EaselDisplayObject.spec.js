import assert from 'assert';
import Vue from 'vue';
import easeljs from '../src/easel.js';
import EaselFake from './fixtures/EaselFake.js';
import doesEvents from './includes/does-events.js';
import isADisplayObject from './includes/is-a-display-object.js';

describe('EaselDisplayObject', function () {

    describe('is a display object that', isADisplayObject(EaselFake));

});
