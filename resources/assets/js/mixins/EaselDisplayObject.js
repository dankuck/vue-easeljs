/*
|--------------------------------------------------------------------------
| EaselDisplayObject
|--------------------------------------------------------------------------
|
| This mixin gives an Easel Vue component the required elements to be 
| visible on the canvas.
|
*/

module.exports = {
    props: ['x', 'y'],
    watch: {
        'x': function () {
            this.component.x = this.x;
        },
        'y': function () {
            this.component.y = this.y;
        },
    },
    methods: {
        displayObjectInit() {
            this.component.x = this.x;
            this.component.y = this.y;
        }
    },
    data() {
        return {
            component: null,
        };
    },
};
