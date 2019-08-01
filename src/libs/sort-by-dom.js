
/**
 |----------------------------
 | sort-by-dom.js
 |----------------------------
 | Given an array of Vue components, this will sort them in the same order
 | their elements are in the DOM.
 |
 */



export default function sortByDom(components) {
    return components.sort(sorter);
};

export function sorter(a, b) {
    const compare = a.$el.compareDocumentPosition(b.$el);
    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED) {
        throw new Error('Nodes are not in the same tree');
    }
    if (compare & Node.DOCUMENT_POSITION_CONTAINS) {
        // b contains a, b should come first
        return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        // a contains b, a should come first
        return -1;
    }
    if (compare & Node.DOCUMENT_POSITION_PRECEDING) {
        // b precedes a, b should come first
        return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_FOLLOWING) {
        // a precedes b, a should come first
        return -1;
    }
    // default to No Change
    return 0;
};
