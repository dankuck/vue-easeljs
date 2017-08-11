import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../resources/assets/js/components/EaselSprite.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';
import mochaX from './mochaX.js';

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
                    :flip="flip"
                    :rotation="rotation"
                    :scale="scale"
                    :alpha="alpha"
                    :shadow="shadow"
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
                flip: '',
                rotation: null,
                scale: 1,
                alpha: null,
                shadow: null,
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

    it('should have same easel', function () {
        assert(sprite.easel === easel);
    });

    it('should have component field', function () {
        assert(sprite.component);
    });

    it('should have a parent', function () {
        assert(sprite.component.parent);
    });

    it('should have x and y', function () {
        assert(sprite.component.x === 1);
        assert(sprite.component.y === 2);
    });

    it('should change x and y', function (done) {
        vm.x = 3;
        vm.y = 4;
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.x === 3);
                assert(sprite.component.y === 4);
                done();
            });
    });

    _.each(eventTypes, (type) => {
        it(`emits ${type} event`, function () {
            vm.clearEventLog();
            sprite.component.dispatchEvent(type);
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

    it('should not flip', function (done) {
        vm.flip = '';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === 1);
                assert(sprite.component.scaleY === 1);
                done();
            });
    });

    it('should flip horizontal', function (done) {
        vm.flip = 'horizontal';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === -1);
                assert(sprite.component.scaleY === 1);
                done();
            });
    });

    it('should flip vertical', function (done) {
        vm.flip = 'vertical';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === 1);
                assert(sprite.component.scaleY === -1);
                done();
            });
    });

    it('should flip both', function (done) {
        vm.flip = 'both';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === -1);
                assert(sprite.component.scaleY === -1);
                done();
            });
    });

    it('should not rotate', function () {
        assert(!sprite.component.rotation);
    });

    it('should rotate', function (done) {
        vm.rotation = 15;
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.rotation === 15);
                done();
            });
    });

    it('should not scale', function (done) {
        vm.flip = '';
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === 1);
                assert(sprite.component.scaleY === 1);
                done();
            });
    });

    it('should scale to double', function (done) {
        vm.scale = 2;
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === 2);
                assert(sprite.component.scaleY === 2);
                done();
            });
    });

    it('should scale and flip', function (done) {
        vm.scale = 2;
        vm.flip = "both";
        Vue.nextTick()
            .then(() => {
                assert(sprite.component.scaleX === -2);
                assert(sprite.component.scaleY === -2);
                done();
            });
    });

    it('should be 100% opaque', function () {
        assert(sprite.component.alpha === 1, "Wrong alpha: " + sprite.component.alpha);
    });

    it('should become 50% opaque', function (done) {
        vm.alpha = .5;
        Vue.nextTick()
            .then(mochaX(() => {
                assert(sprite.component.alpha === .5, "Wrong alpha: " + sprite.component.alpha);
                done();
            }));
    });

    it('should have no shadow', function () {
        assert(sprite.component.shadow === null, "Component: " + sprite.component);
    });

    it('should have shadow', function (done) {
        vm.shadow = ["black", 5, 7, 10];
        Vue.nextTick(mochaX(() => {
            assert(sprite.component.shadow.color === 'black', 'Shadow color: ' + sprite.component.shadow.color);
            assert(sprite.component.shadow.offsetX === 5, 'Shadow offsetX: ' + sprite.component.shadow.offsetX);
            assert(sprite.component.shadow.offsetY === 7, 'Shadow offsetY: ' + sprite.component.shadow.offsetY);
            assert(sprite.component.shadow.blur === 10, 'Shadow blur: ' + sprite.component.shadow.blur);
            done();
        }));
    });

    it('should have no shadow again', function (done) {
        vm.shadow = null;
        Vue.nextTick(mochaX(() => {
            assert(sprite.component.shadow === null, "Component: " + sprite.component);
            done();
        }));
    });
});
