window.Vue = require('vue');
require('vue-easeljs');

var app = new Vue({
    el: '#app',
    data() {
        return {
            gary: {
                animation: 'stand',
                x: 200,
                y: 285,
                flip: 'horizontal',
                moving: null,
                direction: -1,
                scale: 1,
            },
            y: 25,
            log: console.log,
            showLabels: true,
            r: 90,
            tab: 'gary',
        };
    },
    mounted() {
        setInterval(() => this.r = (this.r + 1) % 360, 10);
    },
    methods: {
        clickedGary: function() {
            var gary = this.gary;
            var leftLimit = 100;
            var rightLimit = 300;
            console.log('clicked gary');
            if (!gary.moving) {
                gary.animation = 'run';
                var garyGo = function () {
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

