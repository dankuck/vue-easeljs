<template>
    <div>
        <easel-canvas 
            style="background-color: grey;" 
            width="400" 
            height="300" 
            :anti-alias="false"
            @click="clickedGary"
        >
            <easel-bitmap
                image="/images/gulfstream_park.jpg"
                x="200"
                y="150"
                :scale="300 / 850"
                >
            </easel-bitmap>

            <easel-sprite-sheet
                :images="['images/lastguardian-all.png']"
                :frames="{width:32, height:32}"
                :animations="{
                    stand: 32 * 6 + 16 + 5,
                    run: [32 * 6 + 16 + 6, 32 * 6 + 16 + 7],
                }"
                :framerate="30"
            >
                <easel-shape
                    :x="gary.x"
                    :y="gary.y"
                    fill="black"
                    form="ellipse"
                    :dimensions="[16, 4]"
                    :alpha=".3"
                    :scale="gary.scale"
                >
                </easel-shape>
                <easel-sprite
                    :x="gary.x"
                    :y="gary.y"
                    :animation="gary.animation"
                    @click="clickedGary"
                    :flip="gary.flip"
                    :scale="gary.scale"
                    :align="['center','bottom']"
                >
                </easel-sprite>
            </easel-sprite-sheet>
            <easel-text
                v-if="showLabels"
                text="Gary"
                color="yellow"
                font="20px Helvetica"
                :x="gary.x"
                :y="gary.y - 40 * gary.scale"
                :scale="gary.scale"
                :shadow="['black', 1, 1, 1]"
                :align="['center', 'alphabetical']"
            >
            </easel-text>
        </easel-canvas>
        <br />
        <input type="checkbox" v-model="showLabels"> Show Labels<br />
        <input type="textarea" v-model="gary.scale"> Scale<br />
    </div>
</template>

<script>
export default {
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
            showLabels: true,
        };
    },
    methods: {
        clickedGary: function() {
            var gary = this.gary;
            var leftLimit = 100;
            var rightLimit = 300;
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
};
</script>
