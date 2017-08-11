require('vue-resource');

Vue.component('easel-canvas', require('./components/EaselCanvas.vue'));
Vue.component('easel-shape', require('./components/EaselShape.vue'));
Vue.component('easel-sprite-sheet', require('./components/EaselSpriteSheet.vue'));
Vue.component('easel-sprite', require('./components/EaselSprite.vue'));
Vue.component('easel-bitmap', require('./components/EaselBitmap.vue'));

const app = new Vue({
    el: '#app',
    data() {
        return {
            gary: {
                animation: 'stand',
                x: 200,
                y: 300 - 32,
                flip: 'horizontal',
                moving: null,
                direction: -1,
            },
            y: 25,
        };
    },
    methods: {
        clickedGary() {
            var gary = this.gary;
            var leftLimit = 100;
            var rightLimit = 300;
            console.log('clicked gary');
            if (!gary.moving) {
                gary.animation = 'run';
                var garyGo = () => {
                    gary.x += gary.direction * 10;
                    if (gary.x < leftLimit) {
                        gary.direction = 1;
                    } else if (gary.x > rightLimit) {
                        gary.direction = -1;
                    }
                    if (gary.direction < 0) {
                        gary.flip = "horizontal";
                    } else {
                        gary.flip = "";
                    }
                };
                gary.moving = setInterval(garyGo, 100);
                garyGo();
            } else {
                gary.animation = 'stand';
                clearInterval(gary.moving);
                gary.moving = null;
                if (gary.direction < 0) {
                    gary.flip = "";
                } else {
                    gary.flip = "horizontal";
                }
            }
        },
    },
});

app.log = console.log;
