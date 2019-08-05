
export const horizontalValues = ['', 'left', 'center', 'right', 'start', 'end'];
export const verticalValues = ['', 'top', 'center', 'bottom', 'hanging', 'middle', 'alphabetic', 'ideographic'];

const isHorizontal = value => horizontalValues.indexOf(value) > -1;
const isVertical = value => verticalValues.indexOf(value) > -1;

export default function normalizeAlignment(alignment) {
    if (typeof alignment === 'string') {
        alignment = alignment.trim().split(/\-/);
    }
    const [first, second] = alignment;
    if (isHorizontal(first) && isVertical(second)) {
        return [first, second];
    }
    if (isVertical(first) && isHorizontal(second)) {
        return [second, first];
    }
    throw new Error(`Illegal alignment, bad mix of values or unknown value in: ${first}, ${second}`);
};
