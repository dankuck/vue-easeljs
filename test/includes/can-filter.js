import Vue from 'vue';
import assert from 'assert';

export default function (implementor, provide = {}, propChangers = []) {
    return function () {

        const buildVm = function () {
            /**
             * A fake easel object
             */
            const easel = {
                addChild() {
                },
                removeChild() {
                },
                createCanvas(cb) {
                    return cb();
                },
            };

            const vm = new Vue({
                template: `
                    <span>
                        <implementor ref="fake"
                            v-if="showFake"
                            :cache="cache"
                            :filters="filters"
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    provide.easelParent = easel;
                    provide.easelCanvas = easel;
                    return provide;
                },
                data() {
                    return {
                        cache: false,
                        filters: null,
                    };
                },
                components: {
                    implementor,
                },
                methods: {
                },
            }).$mount();

            const fake = vm.$refs.fake;

            return {fake, vm, easel};
        };

        it.skip('filters');
    };
};
