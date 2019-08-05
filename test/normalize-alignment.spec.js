import assert from 'assert';
import normalizeAlignment, {horizontalValues, verticalValues} from '../src/libs/normalize-alignment.js';

describe.only('alignment-normalizer.js', function () {

    it('exists', function () {
        assert(normalizeAlignment);
    });

    it('leaves normalized arrays alone', function () {
        const correct = ['left', 'top'];
        const normalized = normalizeAlignment(correct);
        assert(correct.join() === normalized.join());
    });

    it('normalizes backwards arrays', function () {
        const incorrect = ['top', 'left'];
        const correct = ['left', 'top'];
        const normalized = normalizeAlignment(incorrect);
        assert(correct.join() === normalized.join());
    });

    it('should not choke on center,center', function () {
        assert(normalizeAlignment(['center', 'center']));
    });

    it('gets upset about double vertical', function () {
        let caught;
        try {
            normalizeAlignment(['top', 'top']);
        } catch (e) {
            caught = e;
        }
        assert(caught, 'normalizeAlignment was fine with top,top');
    });

    it('gets upset about double horizontal', function () {
        let caught;
        try {
            normalizeAlignment(['left', 'left']);
        } catch (e) {
            caught = e;
        }
        assert(caught, 'normalizeAlignment was fine with left,left');
    });

    it('gets upset about unknown values', function () {
        let caught;
        try {
            normalizeAlignment(['no-such-value', 'no-such-value']);
        } catch (e) {
            caught = e;
        }
        assert(caught, 'normalizeAlignment was fine with no-such-value,no-such-value');
    });

    describe('it can handle a string in normal order', function () {
        const correct = ['left', 'top'];
        const string = 'left-top';
        const normal = normalizeAlignment(string);
        assert(correct.join() === normal.join());
    });

    describe('it can handle a string in reverse order', function () {
        const correct = ['left', 'top'];
        const string = 'top-left';
        const normal = normalizeAlignment(string);
        assert(correct.join() === normal.join());
    });

    describe('it can handle extra whitespace', function () {
        const correct = ['left', 'top'];
        const string = " left-top\t";
        const normal = normalizeAlignment(string);
        assert(correct.join() === normal.join());
    });

    describe('is ok with all permutations, and it', function () {
        horizontalValues.forEach(function (h) {
            verticalValues.forEach(function (v) {

                it(`should handle [${h},${v}]`, function () {
                    const correct = [h, v];
                    const normal = normalizeAlignment(correct);
                    assert(correct.join() === normal.join());
                });

                it(`should handle [${v},${h}]`, function () {
                    const correct = [h, v];
                    const incorrect = [h, v];
                    const normal = normalizeAlignment(incorrect);
                    assert(correct.join() === normal.join());
                });

                it(`should handle '${h}-${v}'`, function () {
                    const correct = [h, v];
                    const string = `${h}-${v}`;
                    const normal = normalizeAlignment(string);
                    assert(correct.join() === normal.join());
                });

                it(`should handle '${v}-${h}'`, function () {
                    const correct = [h, v];
                    const string = `${v}-${h}`;
                    const normal = normalizeAlignment(string);
                    assert(correct.join() === normal.join());
                });

            });
        });
    });
});
