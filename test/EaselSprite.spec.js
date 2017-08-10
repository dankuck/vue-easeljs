import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../resources/assets/js/components/EaselSprite.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

var garyStart = 32 * 6 + 16;

describe('EaselSprite', function () {

    var easel = {
        stage: new easeljs.Stage(document.createElement('canvas')),
    };

    var vm = new Vue({
        template: `
            <easel-sprite ref="sprite" :animation="animation">
            </easel-sprite>
        `,
        provide() {
            return {
                spriteSheet: new easeljs.SpriteSheet({
                    images: ['sprites/lastguardian-all.png'],
                    frames: {width: 32, height: 32},
                    animations: {
                        stand: garyStart + 5,
                        run: [garyStart + 6, garyStart + 7],
                    },
                    framerate: 30,
                }),
                easel: easel,
            };
        },
        data() {
            return {
                animation: 'stand',
            };
        },
        components: {
            'easel-sprite': EaselSprite,
        },
    }).$mount();

    var sprite = vm.$refs.sprite

    it('should exist', function () {
        assert(sprite);
    });

    it('should have a spritesheet', function () {
        assert(sprite.spriteSheet);
    });

    it('should have same easel', function () {
        assert(sprite.easel === easel);
    });

    it('should have sprite field', function () {
        assert(sprite.sprite);
    });

    it('should run `stand` animation', function () {
        assert(sprite.sprite._animation && sprite.sprite._animation.name === 'stand');
    });

    it('should change animation to `run`', function (done) {
        vm.animation = 'run';
        Vue.nextTick()
            .then(() => {
                assert(sprite.sprite._animation && sprite.sprite._animation.name === 'run');
                done();
            });
    });

    it('should have a parent', function () {
        assert(sprite.sprite.parent);
    });
});
