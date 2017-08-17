import assert from 'assert';
import Vue from 'vue';
import EaselSprite from '../resources/assets/js/components/EaselSprite.vue';
import EaselContainer from '../resources/assets/js/components/EaselContainer.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

var garyStart = 32 * 6 + 16;

describe('EaselContainer', function () {

    var easel = {
        addChild(vueChild) {
        },
        removeChild(vueChild) {
        },
    };

    var vm = new Vue({
        template: `
            <easel-container ref="container">
                <easel-sprite ref="sprite" 
                    animation="stand" 
                    x="3" 
                    y="4"
                >
                </easel-sprite>
            </easel-container>
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
            };
        },
        components: {
            'easel-sprite': EaselSprite,
            'easel-container': EaselContainer,
        },
    }).$mount();

    var container = vm.$refs.container;
    var sprite = vm.$refs.sprite;

    it('should exist', function () {
        assert(container);
    });

    it('should have an easel', function () {
        assert(container.easel);
    });

    it('should have component field', function () {
        assert(container.component);
    });

    it('should be the parent of the sprite', function () {
        assert(sprite.component.parent === container.component);
    });
});
