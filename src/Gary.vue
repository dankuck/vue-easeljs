<template>
    <div>
        <div class="row">
            <div class="input-group col-xs-12">
                <span class="input-group-addon">
                    <input type="checkbox" v-model="showLabels">
                </span>
                <span class="form-control">Show Labels</span>
            </div>
            <div class="input-group col-xs-12">
                <span class="input-group-addon">
                    <input type="checkbox" v-model="showPoints">
                </span>
                <span class="form-control">Show Points</span>
            </div>
            <div class="input-group col-xs-12">
                <span class="input-group-addon">Scale</span>
                <input v-model.number="resultScale" type="range" aria-label="Gary's Scale" class="form-control" min="0.01" max="20.00" step="0.1">
            </div>
            <button v-if="runningLocally" @click="toggleRun">Toggle Run</button>
        </div>

        <br />

        <easel-canvas
            ref="canvas"
            style="background-color: grey"
            :width="width"
            :height="height"
            viewport-width="400"
            viewport-height="300"
            :anti-alias="false"
            @click="toggleRun"
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
                :fill="point === gary.target ? 'red' : 'white'"
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
                <easel-container
                    :x="gary.x"
                    :y="gary.y"
                    :scale="resultScale"
                >
                    <easel-shape
                        fill="black"
                        form="ellipse"
                        :dimensions="[16, 4]"
                        alpha=".3"
                        align="center-center"
                    >
                    </easel-shape>
                    <easel-sprite
                        :animation="gary.animation"
                        :flip="gary.flip"
                        align="bottom-center"
                    >
                    </easel-sprite>
                    <easel-text
                        v-if="showLabels"
                        text="Gary"
                        color="yellow"
                        font="20px Helvetica"
                        :y="-40"
                        :shadow="['black', 2, 2, 5]"
                        align="alphabetic-center"
                    >
                    </easel-text>
                </easel-container>
            </easel-sprite-sheet>

        </easel-canvas>
    </div>
</template>

<script>
import keepTrying from './keep-trying.js';

export default {
    data() {
        return {
            width: 400,
            height: 300,
            ratio: 300 / 400,
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
    mounted() {
        this.resizeHandler = keepTrying((tryAgain) => {
            let {offsetWidth} = this.$refs.canvas.$el.parentNode;
            if (offsetWidth == 0) {
                tryAgain();
            } else {
                this.width = offsetWidth;
                this.height = this.width * this.ratio;
            }
        });
        window.addEventListener('resize', this.resizeHandler);
        this.resizeHandler();
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeHandler);
    },
    computed: {
        baseScale() {
            // some magic numbers
            return Math.abs(this.gary.y - 207.10) / 67.9;
        },
        speed() {
            return 5 * this.resultScale;
        },
        resultScale: {
            get() {
                if (isNaN(this.gary.scale)) {
                    return this.baseScale;
                } else {
                    return this.baseScale * this.gary.scale;
                }
            },
            set(value) {
                this.gary.scale = value / this.baseScale;
            },
        },
        runningLocally() {
            return /^file:\/\//.test(location.href);
        },
    },
    methods: {
        toggleRun() {
            if (!this.gary.moving) {
                this.startMoving();
            } else {
                this.stopMoving();
            }
        },
        startMoving() {
            const gary = this.gary;
            if (!gary.target) {
                gary.target = this.points[0];
            }
            const garyGo = () => {
                const diffX = gary.target[0] - gary.x;
                const diffY = gary.target[1] - gary.y;
                const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
                if (distance < this.speed) {
                    this.chooseNextTarget();
                    return;
                }
                let moveX, moveY;
                if (diffX === 0) {
                    moveX = 0;
                    moveY = diffY > 0 ? this.speed : -this.speed;
                } else {
                    const percent = this.speed / distance;
                    moveX = diffX * percent;
                    moveY = diffY * percent;
                }
                gary.x += moveX;
                gary.y += moveY;
                if (Math.abs(moveX) < Math.abs(moveY) * 2) {
                    const animation = moveY > 0 ? 'runDown' : 'runUp';
                    if (gary.animation != animation) {
                        gary.animation = animation;
                        gary.flip = '';
                    }
                } else {
                    const animation = 'runRight';
                    const flip = moveX > 0 ? '' : 'horizontal';
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
            const gary = this.gary;
            gary.animation = 'stand';
            clearInterval(gary.moving);
            gary.moving = null;
        },
        chooseNextTarget() {
            let i = this.points.indexOf(this.gary.target);
            i = (i + 1) % this.points.length;
            this.gary.target = this.points[i];
        },
    },
};
</script>
