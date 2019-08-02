import assert from 'assert';
import Vue from 'vue';
import {eventTypes} from '../../src/libs/easel-event-binder.js';

assert(eventTypes && eventTypes.length > 0, 'easel-event-binder.js did not return a good eventTypes array');

export default function (implementor) {

    return function () {

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
                    >
                    </implementor>
                </span>
            `,
            provide() {
                return {
                    easel: easel,
                };
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

        let fake = vm.$refs.fake;

        it('should exist', function () {
            assert(fake);
        });

        eventTypes.forEach(type => {
            it(`emits ${type} event`, function () {
                vm.clearEventLog();
                fake.component.dispatchEvent(type);
                assert(vm.eventLog.length === 1);
            });
        });
    };
};
