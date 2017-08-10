require('vue-resource');

Vue.component('easel-canvas', require('./components/EaselCanvas.vue'));
Vue.component('easel-shape', require('./components/EaselShape.vue'));
Vue.component('easel-sprite-sheet', require('./components/EaselSpriteSheet.vue'));
Vue.component('easel-sprite', require('./components/EaselSprite.vue'));

const app = new Vue({
    el: '#app',
    data() {
        return {
            gary: {
                animation: 'stand',
            },
            y: 25,
        };
    },
    methods: {
        clickedGary() {
            if (this.gary.animation === 'stand') {
                this.gary.animation = 'run';
            } else {
                this.gary.animation = 'stand';
            }
        },
        fall() {
            setInterval(() => this.y *= 1.1, 100);
        },
    },
});

app.log = console.log;
