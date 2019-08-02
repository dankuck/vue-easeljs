import $ from 'jquery';
import _ from 'lodash';
import assert from 'assert';
import EaselContainer from '../src/components/EaselContainer.vue';
import easeljs from '../src/easel.js';
import EaselShape from '../src/components/EaselShape.vue';
import EaselSprite from '../src/components/EaselSprite.vue';
import Vue from 'vue';
import isAnEaselParent from './includes/is-an-easel-parent.js';

var garyStart = 32 * 6 + 16;

describe('EaselContainer', function () {

    describe('is an easel parent', isAnEaselParent(EaselContainer));

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
                    images: ['/base/test/images/lastguardian-all.png'],
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

    it('should getBounds', function (done) {
        container.getBounds()
            .then(
                (bounds) => {
                    assert(bounds.width === 0);
                    assert(bounds.height === 0);
                    done();
                },
                (error) => {
                    assert(false, error);
                }
            );
    });
});
