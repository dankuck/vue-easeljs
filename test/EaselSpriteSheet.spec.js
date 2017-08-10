import assert from 'assert';
import Vue from 'vue';
import EaselSpriteSheet from '../resources/assets/js/components/EaselSpriteSheet.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';

describe('EaselSpriteSheet', function () {

    var vm = new Vue({
        template: `
            <easel-sprite-sheet ref="spriteSheet"
                :images="['sprites/lastguardian-all.png']"
                :frames="{width:32, height:32}"
                :animations="{stand: 32 * 6 + 16 + 5}"
                :framerate="30"
            >
                <x-inject ref="xInject"></x-inject>
            </easel-sprite-sheet>
        `,
        components: {
            'easel-sprite-sheet': EaselSpriteSheet,
            'x-inject': {
                inject: ['spriteSheet'],
                render() { return '<!-- -->' },
            },
        },
    }).$mount();

    var spriteSheet = vm.$refs.spriteSheet;
    var xInject = vm.$refs.xInject;

    it('renders', function () {
        assert(spriteSheet);
    });

    it('should have spriteSheet field', function () {
        assert(spriteSheet.spriteSheet instanceof easeljs.SpriteSheet);
    });

    it('should have images in the spriteSheet', function () {
        assert(spriteSheet.spriteSheet._images);
    });

    it('should have frames in the spriteSheet', function () {
        assert(spriteSheet.spriteSheet._frameHeight === 32);
        assert(spriteSheet.spriteSheet._frameWidth === 32);
    });

    it('should have animations in the spriteSheet', function () {
        assert(spriteSheet.spriteSheet._animations.length > 0);
    });

    it('should have framerate in the spriteSheet', function () {
        assert(spriteSheet.spriteSheet.framerate === 30);
    });

    it('should provide spriteSheet', function () {
        assert(xInject.spriteSheet);
    });
});
