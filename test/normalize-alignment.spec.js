import assert from 'assert';
import normalizeAlignment, {horizontalValues, verticalValues} from '../src/libs/normalize-alignment.js';

describe('alignment-normalizer.js', function () {

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

    describe('it makes no change for <empty-string>,center, even though they are ambiguous', function () {
        const correct = ['', 'center'];
        const normal = normalizeAlignment(correct);
        assert(correct.join() === normal.join());
    });

    describe('it makes no change for center,<empty-string>, even though they are ambiguous', function () {
        const correct = ['center', ''];
        const normal = normalizeAlignment(correct);
        assert(correct.join() === normal.join());
    });

    describe('is ok with all permutations, so it', function () {
        horizontalValues.forEach(function (h) {
            verticalValues.forEach(function (v) {

                it(`should handle [${h},${v}]`, function () {
                    const correct = [h, v];
                    const normal = normalizeAlignment(correct);
                    assert(correct.join() === normal.join());
                });

                it(`should handle '${h}-${v}'`, function () {
                    const correct = [h, v];
                    const string = `${h}-${v}`;
                    const normal = normalizeAlignment(string);
                    assert(correct.join() === normal.join(), correct.join() + ' !== ' + normal.join());
                });

                // Only run the following tests for a pairs of values that
                // aren't in both sets, like '' and 'center'.
                //
                // A pair of values that ARE in both sets should remain
                // unchanged.
                const hIsAmbiguous = verticalValues.indexOf(h) > -1;
                const vIsAmbiguous = horizontalValues.indexOf(v) > -1;
                const bothAreAmbiguous = hIsAmbiguous && vIsAmbiguous;
                if (!bothAreAmbiguous) {
                    it(`should handle [${v},${h}]`, function () {
                        const correct = [h, v];
                        const incorrect = [v, h];
                        const normal = normalizeAlignment(incorrect);
                        assert(correct.join() === normal.join());
                    });

                    it(`should handle '${v}-${h}'`, function () {
                        const correct = [h, v];
                        const string = `${v}-${h}`;
                        const normal = normalizeAlignment(string);
                        assert(correct.join() === normal.join(), correct.join() + ' !== ' + normal.join());
                    });
                }

            });
        });
    });
});
