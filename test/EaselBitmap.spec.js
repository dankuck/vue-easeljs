import assert from 'assert';
import Vue from 'vue';
import EaselBitmap from '../src/components/EaselBitmap.vue';
import isADisplayObject from './includes/is-a-display-object.js';
import isAlignable from './includes/is-alignable.js';
import canCache from './includes/can-cache.js';

describe('EaselBitmap', function () {

    describe('is a display object that', isADisplayObject(EaselBitmap, 'image="/base/test/images/gulfstream_park.jpg"'));

    describe('is cacheable and', canCache(EaselBitmap, {}, [
        {
            name: 'image',
            value: '/base/test/images/gulfstream_park.jpg',
            changeTo: '/base/test/images/lastguardian-all.png',
            shouldUpdateSameObject: true,
        },
    ]));

    describe('is alignable and', isAlignable(EaselBitmap, {width: 1500, height: 946}, 'image="/base/test/images/gulfstream_park.jpg"'));

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
                    easel,
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

        const bitmap = vm.$refs.bitmap;

        return {vm, bitmap};
    };

    it('should exist', function () {
        const {vm, bitmap} = buildVm();
        assert(bitmap);
    });

    it('should have component field', function () {
        const {vm, bitmap} = buildVm();
        assert(bitmap.component);
    });

    it('should have the right image', function () {
        const {vm, bitmap} = buildVm();
        assert(/gulfstream_park/.test(bitmap.component.image.src), 'Wrong src: ' + bitmap.component.image.src);
    });

    it('should be able to change the image', function (done) {
        const {vm, bitmap} = buildVm();
        const image = vm.image;
        vm.image = Math.random();
        Vue.nextTick()
            .then(() => {
                const qr = new RegExp(vm.image);
                assert(
                    qr.test(bitmap.component.image.src) || qr.test(bitmap.component.image),
                    'Wrong src in: ' + bitmap.component.image
                );
                vm.image = image;
                return Vue.nextTick();
            })
            .then(done, done);
    });

    it('should get dimensions', function (done) {
        const {vm, bitmap} = buildVm();
        bitmap.getAlignDimensions()
            .then(dimensions => {
                assert(dimensions.width === 1500, 'Wrong width: ' + dimensions.width);
                assert(dimensions.height === 946, 'Wrong height: ' + dimensions.height);
            })
            .then(done, done);
    });
});
