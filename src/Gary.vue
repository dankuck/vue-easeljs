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
                image="images/gulfstream_park.jpg"
                x="200"
                y="150"
                :scale="300 / 850"
                :align="['center','center']"
                >
            </easel-bitmap>

            <easel-shape
                v-for="point in points"
                v-if="showPoints"
                form="circle"
                dimensions="3"
                stroke="black"
                :fill="point === gary.target ? 'red' : ''"
                :x="point[0]"
                :y="point[1]"
                :align="['center','center']"
            >
            </easel-shape>

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
                    :scale="resultScale"
                    :align="['center','center']"
                >
                </easel-shape>
                <easel-sprite
                    :x="gary.x"
                    :y="gary.y"
                    :animation="gary.animation"
                    :flip="gary.flip"
                    :scale="resultScale"
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
                :y="gary.y - 40 * resultScale"
                :scale="resultScale"
                :shadow="['black', 1, 1, 1]"
                :align="['center', 'alphabetical']"
            >
            </easel-text>
        </easel-canvas>
        <br />
        <div class="input-group col-xs-2">
            <span class="input-group-addon">
                <input type="checkbox" v-model="showLabels">
            </span>
            <span class="form-control">Show Labels</span>
        </div>
        <div class="input-group col-xs-2">
            <span class="input-group-addon">
                <input type="checkbox" v-model="showPoints">
            </span>
            <span class="form-control">Show Points</span>
        </div>
        <div class="input-group col-xs-2">
            <span class="input-group-addon">Scale</span>
            <input class="form-control" v-model="gary.scale">
        </div>
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
                [215, 220],
                [130, 275],
                [310, 275],
                [250, 220],
            ],
            showLabels: true,
            showPoints: false,
        };
    },
    computed: {
        baseScale() {
            // some magic numbers
            return (this.gary.y - 207.10) / 67.9;
        },
        speed() {
            return 5 * this.resultScale;
        },
        resultScale() {
            if (isNaN(parseFloat(this.gary.scale))) {
                return this.baseScale;
            }
            return this.baseScale * this.gary.scale;
        },
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
            var garyGo = () => {
                var diffX = gary.target[0] - gary.x;
                var diffY = gary.target[1] - gary.y;
                var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
                if (distance < this.speed) {
                    this.chooseNextTarget();
                    return;
                }
                var moveX, moveY;
                if (diffX === 0) {
                    moveX = 0;
                    moveY = diffY > 0 ? 1 : -1;
                } else {
                    var direction = Math.atan(diffY / diffX);
                    moveY = Math.sin(direction) * this.speed;
                    moveX = Math.cos(direction) * this.speed;
                    if (diffX < 0) { // atan is for X>0, so we must reflect
                        moveX *= -1;
                        moveY *= -1;
                    }
                }
                gary.x += moveX;
                gary.y += moveY;
                if (Math.abs(moveX) < Math.abs(moveY) * 2) {
                    var animation = moveY > 0 ? 'runDown' : 'runUp';
                    if (gary.animation != animation) {
                        gary.animation = animation;
                        gary.flip = '';
                    }
                } else {
                    var animation = 'runRight';
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
        chooseNextTarget() {
            var i = this.points.indexOf(this.gary.target);
            i = (i + 1) % this.points.length;
            this.gary.target = this.points[i];
        },
    },
};
</script>
