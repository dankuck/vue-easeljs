<template>
    <div>
        <easel-canvas 
            style="background-color: grey;" 
            width="400" 
            height="300" 
            :anti-alias="false"
            @click="clickedCanvas"
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
                    stand: garyStart + 5,
                    runRight: [garyStart + 6, garyStart + 7],
                    runUp: [garyStart + 0, garyStart + 1],
                    runDown: [garyStart + 2, garyStart + 3],
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
            <easel-shape
                v-for="point in points"
                form="circle"
                dimensions="3"
                stroke="black"
                :fill="point === gary.target ? 'red' : ''"
                :x="point[0]"
                :y="point[1]"
            >
            </easel-shape>
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
            garyStart: 32 * 6 + 16,
            gary: {
                animation: 'stand',
                x: 200,
                y: 285,
                flip: 'horizontal',
                moving: null,
                target: null,
                scale: 1,
            },
            points: [
                [100, 100],
                [100, 200],
                [200, 200],
                [200, 100],
            ],
            showLabels: true,
        };
    },
    methods: {
        clickedCanvas: function() {
            if (!this.gary.moving) {
                this.startMoving();
            } else {
                this.stopMoving();
            }
        },
        startMoving() {
            var gary = this.gary;
            if (!gary.target) {
                gary.target = this.points[0];
            }
            var garyGo = function () {
                var diffX = gary.x - gary.target[0];
                var diffY = gary.y - gary.target[1];
                var distance = parseInt(Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)));
                if (distance < 5) {
                    this.stopMoving();
                    return;
                }
                var oneStep = distance - 1;
                var percentage = oneStep / distance;
                var moveX = parseInt(diffX * percentage), 
                    moveY = parseInt(diffY * percentage);
                console.log('move', [moveX, moveY]);
                gary.x = moveX;
                gary.y = moveY;
                if (moveX < moveY) {
                    var animation = moveY > 0 ? 'runDown' : 'runUp';
                    if (gary.animation != animation) {
                        gary.animation = animation;
                        gary.flip = '';
                    }
                } else {
                    var animation = 'run';
                    var flip = moveX > 0 ? '' : 'horizontal';
                    if (gary.animation != animation || gary.flip != flip) {
                        gary.animation = animation;
                        gary.flip = flip;
                    }
                }
            };
            gary.moving = setInterval(garyGo, 100);
            garyGo();
        },
        stopMoving() {
            var gary = this.gary;
            gary.animation = 'stand';
            clearInterval(gary.moving);
            gary.moving = null;
        },
    },
};
</script>
