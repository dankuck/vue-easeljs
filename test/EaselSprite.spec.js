import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../src/components/EaselSprite.vue';
import easeljs from '../easeljs/easel.js';
import isADisplayObject from './includes/is-a-display-object.js';
import canCache from './includes/can-cache.js';
import isAlignable from './includes/is-alignable.js';

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

    describe('is cacheable and', canCache(EaselSprite, {spriteSheet}, [
        {
            name: 'animation',
            value: 'stand',
            changeTo: 'run',
            shouldUpdateSameObject: true,
        },
    ]));

    // describe('is alignable and', isAlignable(EaselSprite, {width: 100, height: 100}, 'form="circle" dimensions="50"'));

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
                        :align="align"
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
                    align: 'top-left',
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
        sprite.getAlignDimensions()
            .then(dimensions => {
                assert(dimensions.width === 32);
                assert(dimensions.height === 32);
            })
            .then(done, done);
    });

    ['center-left', 'top-left', 'bottom-right']
        .forEach(align => {
            it('should get cache bounds (no matter the align)', function (done) {
                const {vm, sprite} = buildVm();
                vm.align = align;
                Vue.nextTick()
                    .then(() => sprite.getCacheBounds())
                    .then(({x, y, width, height}) => {
                        assert(x === 0, `x is wrong: ${x}`);
                        assert(y === 0, `y is wrong: ${y}`);
                        assert(width === 32, `width is wrong: ${width}`);
                        assert(height === 32, `height is wrong: ${height}`);
                    })
                    .then(done, done);
            });
        });

    it.skip('should stay animated when cached', function () {
    });
});
