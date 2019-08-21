<template>
    <canvas ref="easel">
        <slot></slot>
    </canvas>
</template>

<script>
import EaselEventBinder from '../libs/easel-event-binder.js';
import easeljs from '../../easeljs/easel.js';
import EaselParent from '../mixins/EaselParent.js';

export default {
    mixins: [EaselParent],
    props: [
        'antiAlias',
        'height',
        'width',
        'viewportHeight',
        'viewportWidth',
    ],
    data() {
        return {
            component: null,
            context: null,
        };
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.easel);
        this.context = this.component.canvas.getContext('2d');
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener('tick', (event) => this.component.update(event));
        this.resizeHandler = () => this.updateSize();
        window.addEventListener('resize', this.resizeHandler);
        this.updateSize();
        if (typeof this.antiAlias !== 'undefined') {
            // For an unknown reason, it's necessary to do this after a tick
            // or else it doesn't update
            this.$nextTick(() => this.updateAntiAlias());
        }
    },
    destroyed() {
        easeljs.Touch.disable(this.component);
        window.removeEventListener('resize', this.resizeHandler);
    },
    watch: {
        antiAlias() {
            this.updateAntiAlias();
        },
        height() {
            this.updateSize();
        },
        width() {
            this.updateSize();
        },
        viewportScale() {
            this.updateSize();
        },
    },
    computed: {
        viewport() {
            return {
                width: this.viewportWidth || this.width,
                height: this.viewportHeight || this.height,
            };
        },
        viewportScale() {
            return {
                scaleX: this.width / this.viewport.width,
                scaleY: this.height / this.viewport.height,
            };
        },
    },
    methods: {
        updateAntiAlias() {
            this.context.imageSmoothingEnabled = this.antiAlias;
            this.context.mozImageSmoothingEnabled = this.antiAlias;
            this.context.webkitImageSmoothingEnabled = this.antiAlias;
            this.context.msImageSmoothingEnabled = this.antiAlias;
        },
        updateSize() {
            const canvas = this.$refs.easel;
            canvas.width = this.width * window.devicePixelRatio;
            canvas.height = this.height * window.devicePixelRatio;
            canvas.style.width = this.width + 'px';
            canvas.style.height = this.height + 'px';
            this.component.scaleX = this.viewportScale.scaleX * window.devicePixelRatio;
            this.component.scaleY = this.viewportScale.scaleY * window.devicePixelRatio;
        },
    },
};
</script>
