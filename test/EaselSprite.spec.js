import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../resources/assets/js/components/EaselSprite.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

var garyStart = 32 * 6 + 16;
var eventTypes = ['added', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover', 'pressmove', 'pressup', 'removed', 'rollout', 'rollover', 'tick', 'animationend', 'change'];

describe('EaselSprite', function () {

    var eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');

    var easel = {
        stage: new easeljs.Stage(document.createElement('canvas')),
    };

    var vm = new Vue({
        template: `
            <span>
                <easel-sprite ref="sprite" 
                    v-if="showSprite"
                    :animation="animation" 
                    :x="x" 
                    :y="y"
                    ${eventHandlerCode}
                >
                </easel-sprite>
            </span>
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
                x: 1,
                y: 2,
                eventLog: [],
                showSprite: true,
            };
        },
        components: {
            'easel-sprite': EaselSprite,
        },
        methods: {
            logEvent(event) {
                this.eventLog.push(event);
            },
            clearEventLog() {
                this.eventLog = [];
            },
        },
    }).$mount();

    var sprite = vm.$refs.sprite;

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

    it('should have x and y', function () {
        assert(sprite.sprite.x === 1);
        assert(sprite.sprite.y === 2);
    });

    it('should change x and y', function (done) {
        vm.x = 3;
        vm.y = 4;
        Vue.nextTick()
            .then(() => {
                assert(sprite.sprite.x === 3);
                assert(sprite.sprite.y === 4);
                done();
            });
    });

    _.each(eventTypes, (type) => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            sprite.sprite.dispatchEvent(type);
            assert(vm.eventLog.length === 1);
        });
    });

    it('should go away when gone', function (done) {
        vm.showSprite = false;
        Vue.nextTick()
            .then(() => {
                assert(easel.stage.children.length === 0);
                vm.showSprite = true;
                return Vue.nextTick();
            })
            .then(() => {
                sprite = vm.$refs.sprite; // make sure others get the new var
                done();
            });
    });
});
