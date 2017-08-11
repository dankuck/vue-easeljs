import assert from 'assert';
import Vue from 'vue';
import EaselBitmap from '../resources/assets/js/components/EaselBitmap.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../resources/assets/js/easel.js';
import mochaX from './mochaX.js';

describe('EaselBitmap', function () {

    var easel = {
        stage: new easeljs.Stage(document.createElement('canvas')),
    };

    var vm = new Vue({
        template: `
            <span>
                <easel-bitmap ref="bitmap"
                    v-if="showBitmap"
                    :x="1" 
                    :y="2"
                    :image="image"
                >
                </easel-bitmap>
            </span>
        `,
        provide() {
            return {
                easel: easel,
            };
        },
        data() {
            return {
                image: '/images/gulfstream_park.jpg',
                showBitmap: true,
            };
        },
        components: {
            'easel-bitmap': EaselBitmap,
        },
    }).$mount();

    var bitmap = vm.$refs.bitmap;

    it('should exist', function () {
        assert(bitmap);
    });

    it('should have component field', function () {
        assert(bitmap.component);
    });

    it('should have the right image', function () {
        assert(/gulfstream_park/.test(bitmap.component.image.src), 'Wrong src: ' + bitmap.component.image.src);
    });

    it('should be able to change the image', function (done) {
        vm.image = Math.random();
        Vue.nextTick()
            .then(mochaX(() => {
                var qr = new RegExp(vm.image);
                assert(
                    qr.test(bitmap.component.image.src) || qr.test(bitmap.component.image), 
                    'Wrong src in: ' + bitmap.component.image
                );
                done();
            }));
    });
});
