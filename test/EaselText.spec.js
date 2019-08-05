import assert from 'assert';
import Vue from 'vue';
import EaselText from '../src/components/EaselText.vue';
import easeljs from '../src/easel.js';
import isADisplayObject from './includes/is-a-display-object.js';

describe('EaselText', function () {

    describe('is a display object that', isADisplayObject(EaselText, 'text="O hai"'));

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
                        :align="[align, verticalAlign]"
                    >
                    </easel-text>
                </span>
            `,
            provide() {
                return {
                    easel,
                };
            },
            data() {
                return {
                    text: 'The Ran in Span Stays Manly On The Plan',
                    showText: true,
                    font: '20px Arial',
                    color: 'black',
                    align: 'left',
                    verticalAlign: 'top',
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
        assert(vm.align === text.component.textAlign, 'Wrong textAlign: ' + text.component.textAlign);
    });

    it('should be able to change the align', function (done) {
        const {vm, text} = buildVm();
        vm.align = 'center';
        Vue.nextTick()
            .then(() => {
                assert(vm.align === text.component.textAlign, 'Wrong textAlign in: ' + text.component.textAlign);
            })
            .then(done, done);
    });

    it('should have the right verticalAlign', function () {
        const {vm, text} = buildVm();
        assert(vm.verticalAlign === text.component.textBaseline, 'Wrong textBaseline: ' + text.component.textBaseline);
    });

    it('should be able to change the verticalAlign', function (done) {
        const {vm, text} = buildVm();
        vm.verticalAlign = 'center';
        Vue.nextTick()
            .then(() => {
                assert(vm.verticalAlign === text.component.textBaseline, 'Wrong textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });

    it('should default vertical align to top', function (done) {
        const {vm, text} = buildVm();
        vm.verticalAlign = '';
        Vue.nextTick()
            .then(() => {
                assert('top' === text.component.textBaseline, 'Wrong default textBaseline in: ' + text.component.textBaseline);
            })
            .then(done, done);
    });

    it('should default horizontal align to left', function (done) {
        const {vm, text} = buildVm();
        vm.align = '';
        Vue.nextTick()
            .then(() => {
                assert('left' === text.component.textAlign, 'Wrong default textAlign in: ' + text.component.textAlign);
            })
            .then(done, done);
    });
});
