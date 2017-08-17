import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../resources/assets/js/components/EaselSprite.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

var garyStart = 32 * 6 + 16;

describe('EaselSprite', function () {

    var easel = {
        addChild(vueChild) {
        },
        removeChild(vueChild) {
        },
    };

    var vm = new Vue({
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
                spriteSheet: new easeljs.SpriteSheet({
                    images: ['/base/sprites/lastguardian-all.png'],
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

    var sprite = vm.$refs.sprite;

    it('should exist', function () {
        assert(sprite);
    });

    it('should have a spritesheet', function () {
        assert(sprite.spriteSheet);
    });

    it('should have component field', function () {
        assert(sprite.component);
    });

    it('should run `stand` animation', function () {
        assert(sprite.component._animation && sprite.component._animation.name === 'stand');
    });

    it('should change animation to `run`', function (done) {
        vm.animation = 'run';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component._animation && sprite.component._animation.name === 'run');
                done();
            });
    });

    it('should get bounds', function (done) {
        sprite.getBounds()
            .then(bounds => {
                assert(bounds.width === 32);
                assert(bounds.height === 32);
                done();
            });
    });

});
