import assert from 'assert';
import Vue from 'vue';
import $ from 'jquery';
import _ from 'lodash';
import sortByDom, {sorter} from '../src/libs/sort-by-dom.js';

describe('sort-by-dom', function () {

    const nester = {
        props: ['name'],
        template: `
            <div>
              <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
            </div>
        `,
    };

    const vm = new Vue({
        template: `
            <nester ref="nester_1" name="nester_1">
                <nester ref="nester_1_1" name="nester_1_1"></nester>
                <nester ref="nester_1_2" name="nester_1_2">
                    <nester ref="nester_1_2_1" name="nester_1_2_1"></nester>
                </nester>
                <nester ref="nester_1_3" name="nester_1_3"></nester>
            </nester>
        `,
        components: {
            nester,
        },
    }).$mount();

    const {
        nester_1,
        nester_1_1,
        nester_1_2,
        nester_1_2_1,
        nester_1_3,
    } = vm.$refs;

    it('should not change the order if its already correct', function () {
        const correct = [
            nester_1,
            nester_1_1,
            nester_1_2,
            nester_1_2_1,
            nester_1_3,
        ];
        const sorted = sortByDom(correct);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });

    it('should put a parent before its child', function () {
        const correct = [
            nester_1,
            nester_1_1,
        ];
        const mixed = [
            nester_1_1,
            nester_1,
        ];
        const sorted = sortByDom(mixed);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });

    it('should put a late sibling before an early sibling', function () {
        const correct = [
            nester_1_1,
            nester_1_2,
        ];
        const mixed = [
            nester_1_2,
            nester_1_1,
        ];
        const sorted = sortByDom(mixed);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });

    it('should throw an exception if one is disconnected', function () {
        let caught;
        const el1 = document.createElement('img');
        const array = [
            {$el: el1, name: 'Disconnected image 1'},
            nester_1,
        ];
        try {
            sortByDom(array);
        } catch (e) {
            caught = e;
        }
        assert(caught, 'No error on disconnected');
    });

    it('should throw an exception if all are disconnected', function () {
        let caught;
        const el1 = document.createElement('img');
        const el2 = document.createElement('img');
        const array = [
            {$el: el1, name: 'Disconnected image 1'},
            {$el: el2, name: 'Disconnected image 2'},
        ];
        try {
            sortByDom(array);
        } catch (e) {
            caught = e;
        }
        assert(caught, 'No error on disconnected');
    });

    it('should not change all elements are the same element', function () {
        const correct = [
            nester_1,
            nester_1,
            nester_1,
            nester_1,
            nester_1,
        ];
        const sorted = sortByDom(correct);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });

    it('should sort a randomly mixed group', function () {
        const correct = [
            nester_1,
            nester_1_1,
            nester_1_2,
            nester_1_2_1,
            nester_1_3,
        ];
        const mixed = _.shuffle(correct);
        const sorted = sortByDom(mixed);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });

    it('should allow using the sorter in other sort functions', function () {
        const correct = [
            nester_1,
            nester_1_1,
            nester_1_2,
            nester_1_2_1,
            nester_1_3,
        ];
        const mixed = _.shuffle(correct);
        const sorted = mixed.sort(sorter);
        assert(correct.length === sorted.length, 'Different length correct & sorted');
        sorted.forEach((element, i) => assert(element === correct[i], `error at index ${i}: wrong=${element.name}, right=${correct[i].name}`));
    });
});
