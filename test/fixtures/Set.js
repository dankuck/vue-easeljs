/**
 * Cheap implementation of modern JS's Set class
 */
export default class Set {

    constructor(array = []) {
        this.array = [...array];
        this.size = array.length;
    }

    has(element) {
        return this.array.indexOf(element) >= 0;
    }

    add(element) {
        if (!this.has(element)) {
            this.array.push(element);
            this.size = this.array.length;
        }
    }

    delete(element) {
        if (this.has(element)) {
            this.array.splice(this.array.indexOf(element), 1);
            this.size = this.array.length;
        }
    }

    // These should be easy to implement, but I haven't checked them against a
    // real implementation:

    // forEach(cb) {
    //     this.array.forEach(cb);
    // }

    // keys() {
    //     return this.values();
    // }

    // values() {
    //     return [...this.array];
    // }
};
