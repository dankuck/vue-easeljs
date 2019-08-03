import assert from 'assert';
import Vue from 'vue';
import {eventTypes} from '../../src/libs/easel-event-binder.js';

assert(eventTypes && eventTypes.length > 0, 'easel-event-binder.js did not return a good eventTypes array');

export default function (implementor, extra_attributes = '', provide = {}) {

    return function () {

        const buildVm = function () {
            const easel = {
                addChild(vueChild) {
                },
                removeChild(vueChild) {
                },
            };

            const eventHandlerCode = eventTypes.map(type => `@${type}="logEvent"`).join(' ');

            const vm = new Vue({
                template: `
                    <span>
                        <implementor ref="fake"
                            ${eventHandlerCode}
                            ${extra_attributes}
                        >
                        </implementor>
                    </span>
                `,
                provide() {
                    provide.easel = easel;
                    return provide;
                },
                data() {
                    return {
                        eventLog: [],
                    };
                },
                components: {
                    implementor,
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

            const fake = vm.$refs.fake;

            return {vm, fake};
        };

        it('should exist', function () {
            const {fake} = buildVm();
            assert(fake);
        });

        eventTypes.forEach(type => {
            it(`emits ${type} event`, function () {
                const {vm, fake} = buildVm();
                vm.clearEventLog();
                fake.component.dispatchEvent(type);
                assert(vm.eventLog.length === 1);
            });
        });
    };
};
