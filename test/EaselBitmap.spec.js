import assert from 'assert';
import Vue from 'vue';
import EaselBitmap from '../src/components/EaselBitmap.vue';
import $ from 'jquery';
import _ from 'lodash';
import easeljs from '../src/easel.js';

describe('EaselBitmap', function () {

    var easel = {
        addChild(vueChild) {
        },
        removeChild(vueChild) {
        },
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
                image: '/base/test/images/gulfstream_park.jpg',
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
        var image = vm.image;
        vm.image = Math.random();
        Vue.nextTick()
            .then(() => {
                var qr = new RegExp(vm.image);
                assert(
                    qr.test(bitmap.component.image.src) || qr.test(bitmap.component.image), 
                    'Wrong src in: ' + bitmap.component.image
                );
                vm.image = image;
                return Vue.nextTick();
            })
            .then(done, done);
    });

    it('should get bounds', function (done) {
        bitmap.getBounds()
            .then(bounds => {
                assert(bounds.width === 1500, 'Wrong width: ' + bounds.width);
                assert(bounds.height === 946, 'Wrong height: ' + bounds.height);
            })
            .then(done, done);
    });
});
