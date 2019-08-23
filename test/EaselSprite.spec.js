import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../src/components/EaselSprite.vue';
import easeljs from '../easeljs/easel.js';
import isADisplayObject from './includes/is-a-display-object.js';

const garyStart = 32 * 6 + 16;

const spriteSheet = new easeljs.SpriteSheet({
    images: ['/base/test/images/lastguardian-all.png'],
    frames: {width: 32, height: 32},
    animations: {
        stand: garyStart + 5,
        run: [garyStart + 6, garyStart + 7],
    },
    framerate: 30,
});

describe('EaselSprite', function () {

    describe('is a display object that', isADisplayObject(EaselSprite, '', {spriteSheet}));

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
                    <easel-sprite ref="sprite"
                        v-if="showSprite"
                        :animation="animation"
                        :x="x"
                        :y="y"
                        :flip="flip"
                    >
                    </easel-sprite>
                </span>
            `,
            provide() {
                return {
                    spriteSheet,
                    easel,
                };
            },
            data() {
                return {
                    animation: 'stand',
                    x: 1,
                    y: 2,
                    showSprite: true,
                    flip: '',
                };
            },
            components: {
                'easel-sprite': EaselSprite,
            },
        }).$mount();

        const sprite = vm.$refs.sprite;

        return {vm, sprite};
    };

    it('should exist', function () {
        const {vm, sprite} = buildVm();
        assert(sprite);
    });

    it('should have a spritesheet', function () {
        const {vm, sprite} = buildVm();
        assert(sprite.spriteSheet);
    });

    it('should have component field', function () {
        const {vm, sprite} = buildVm();
        assert(sprite.component);
    });

    it('should run `stand` animation', function () {
        const {vm, sprite} = buildVm();
        assert(sprite.component._animation && sprite.component._animation.name === 'stand');
    });

    it('should change animation to `run`', function (done) {
        const {vm, sprite} = buildVm();
        vm.animation = 'run';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component._animation && sprite.component._animation.name === 'run');
            })
            .then(done, done);
    });

    it('should get dimensions', function (done) {
        const {vm, sprite} = buildVm();
        sprite.getDimensions()
            .then(dimensions => {
                assert(dimensions.width === 32);
                assert(dimensions.height === 32);
            })
            .then(done, done);
    });

});
