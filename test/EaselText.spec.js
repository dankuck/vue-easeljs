import assert from 'assert';
import Vue from 'vue';
import EaselText from '../src/components/EaselText.vue';
import easeljs from '../easeljs/easel.js';
import isADisplayObject from './includes/is-a-display-object.js';
import canCache from './includes/can-cache.js';
import canFilter from './includes/can-filter.js';

describe('EaselText', function () {

    describe('is a display object that', isADisplayObject(EaselText, 'text="O hai"'));

    // EaselText is also alignable, but it uses special alignment rules, so it
    // doesn't include the alignment tests.

    describe('is cacheable and', canCache(EaselText, {}, [
        {
            name: 'color',
            value: 'black',
            changeTo: 'blue',
            shouldUpdateSameObject: true,
        },
        {
            name: 'text',
            value: 'Oh, hi',
            changeTo: 'Ohai',
            shouldUpdateSameObject: true,
        },
        {
            name: 'font',
            value: '12px "Times New Roman"',
            changeTo: '50px "Comic Sans"',
            shouldUpdateSameObject: true,
        },
    ]));

    describe('can filter and', canFilter(EaselText, 'text="O hai"'));

    const buildVm = function () {
        const easel = {
            addChild(vueChild) {
            },
            removeChild(vueChild) {
            },
        };

        const vm = new Vue({
            template: `
                <span>
                    <easel-text ref="text"
                        v-if="showText"
                        :x="1"
                        :y="2"
                        :text="text"
                        :font="font"
                        :color="color"
                        :align="align"
                    >
                    </easel-text>
                </span>
            `,
            provide() {
                return {
                    easelParent: easel,
                    easelCanvas: easel,
                };
            },
            data() {
                return {
                    text: 'The Ran in Span Stays Manly On The Plan',
                    showText: true,
                    font: '20px Arial',
                    color: 'black',
                    align: ['left', 'top'],
                };
            },
            components: {
                'easel-text': EaselText,
            },
        }).$mount();

        const text = vm.$refs.text;

        return {vm, text};
    };

    it('should exist', function () {
        const {vm, text} = buildVm();
        assert(text);
    });

    it('should have component field', function () {
        const {vm, text} = buildVm();
        assert(text.component);
    });

    it('should have the right text', function () {
        const {vm, text} = buildVm();
        assert(vm.text === text.component.text, 'Wrong text: ' + text.component.text);
    });

    it('should be able to change the text', function (done) {
        const {vm, text} = buildVm();
        vm.text = Math.random();
        Vue.nextTick()
            .then(() => {
                assert(vm.text === text.component.text, 'Wrong text in: ' + text.component.text);
            })
            .then(done, done);
    });

    it('should have the right font', function () {
        const {vm, text} = buildVm();
        assert(vm.font === text.component.font, 'Wrong font: ' + text.component.font);
    });

    it('should be able to change the font', function (done) {
        const {vm, text} = buildVm();
        vm.font = Math.random();
        Vue.nextTick()
            .then(() => {
                assert(vm.font === text.component.font, 'Wrong font in: ' + text.component.font);
            })
            .then(done, done);
    });

    it('should have the right color', function () {
        const {vm, text} = buildVm();
        assert(vm.color === text.component.color, 'Wrong color: ' + text.component.color);
    });

    it('should be able to change the color', function (done) {
        const {vm, text} = buildVm();
        vm.color = 'grey';
        Vue.nextTick()
            .then(() => {
                assert(vm.color === text.component.color, 'Wrong color in: ' + text.component.color);
            })
            .then(done, done);
    });

    it('should have the right align', function () {
        const {vm, text} = buildVm();
        assert('left' === text.component.textAlign, 'Wrong textAlign: ' + text.component.textAlign);
        assert('top' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
    });

    it('should be able to change the align', function (done) {
        const {vm, text} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['center', 'middle'];
                return Vue.nextTick();
            })
            .then(() => {
                assert('center' === text.component.textAlign, 'Wrong textAlign in: ' + text.component.textAlign);
                assert('middle' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });

    it('should default align correctly', function (done) {
        const {vm, text} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['', ''];
                return Vue.nextTick();
            })
            .then(() => {
                assert('top' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
                assert('left' === text.component.textAlign, 'Wrong default textAlign in: ' + text.component.textAlign);
            })
            .then(done, done);
    });

    it('should normalize reversed array align prop', function (done) {
        const {vm, text} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = ['bottom', 'right'];
                return Vue.nextTick();
            })
            .then(() => {
                assert('right' === text.component.textAlign, 'Wrong default textAlign in: ' + text.component.textAlign);
                assert('bottom' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });

    it('should normalize reversed string align prop', function (done) {
        const {vm, text} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = 'bottom-right';
                return Vue.nextTick();
            })
            .then(() => {
                assert('right' === text.component.textAlign, 'Wrong default textAlign in: ' + text.component.textAlign);
                assert('bottom' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });

    it('should convert center vertical to middle', function (done) {
        const {vm, text} = buildVm();
        Vue.nextTick()
            .then(() => {
                vm.align = 'center-center';
                return Vue.nextTick();
            })
            .then(() => {
                assert('center' === text.component.textAlign, 'Wrong default textAlign in: ' + text.component.textAlign);
                assert('middle' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });


    it('should get cache bounds center-left', function (done) {
        const {vm, text} = buildVm();
        vm.align = 'center-left';
        Vue.nextTick()
            .then(() => text.getCacheBounds())
            .then(({x, y, width, height}) => {
                assert(x === 0, `x is wrong: ${x}`);
                assert(Math.floor(y) === -8, `y is wrong: ${y}`);
                assert(Math.floor(width) === 381, `width is wrong: ${width}`);
                assert(Math.floor(height) === 19, `height is wrong: ${height}`);
            })
            .then(done, done);
    });

    it('should get cache bounds top-left', function (done) {
        const {vm, text} = buildVm();
        vm.align = 'top-left';
        Vue.nextTick()
            .then(() => text.getCacheBounds())
            .then(({x, y, width, height}) => {
                assert(x === 0, `x is wrong: ${x}`);
                assert(y === 0, `y is wrong: ${y}`);
                assert(Math.floor(width) === 381, `width is wrong: ${width}`);
                assert(Math.floor(height) === 19, `height is wrong: ${height}`);
            })
            .then(done, done);
    });

    it('should get cache bounds bottom-right', function (done) {
        const {vm, text} = buildVm();
        vm.align = 'bottom-right';
        Vue.nextTick()
            .then(() => text.getCacheBounds())
            .then(({x, y, width, height}) => {
                assert(Math.floor(x) === -382, `x is wrong: ${x}`);
                assert(Math.floor(y) === -20, `y is wrong: ${y}`);
                assert(Math.floor(width) === 381, `width is wrong: ${width}`);
                assert(Math.floor(height) === 19, `height is wrong: ${height}`);
            })
            .then(done, done);
    });

});
