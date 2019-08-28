<template>
    <canvas ref="canvas">
        <slot></slot>
    </canvas>
</template>

<script>
import EaselEventBinder from '../libs/easel-event-binder.js';
import easeljs from '../../easeljs/easel.js';
import EaselParent from '../mixins/EaselParent.js';

export default {
    mixins: [EaselParent],
    props: {
        antiAlias: {
            default: true,
        },
        height: {},
        width: {},
        viewportHeight: {},
        viewportWidth: {},
    },
    data() {
        return {
            component: null,
            context: null,
        };
    },
    mounted() {
        this.component = new easeljs.Stage(this.$refs.canvas);
        this.context = this.component.canvas.getContext('2d');
        easeljs.Touch.enable(this.component, false, true);
        EaselEventBinder.bindEvents(this, this.component);
        easeljs.Ticker.addEventListener('tick', (event) => this.component.update(event));
        this.resizeHandler = () => this.updateSize();
        window.addEventListener('resize', this.resizeHandler);
        this.updateSize(); // updates anti-alias afterward
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
            this.context.imageSmoothingEnabled       = this.antiAlias;
            this.context.mozImageSmoothingEnabled    = this.antiAlias;
            this.context.webkitImageSmoothingEnabled = this.antiAlias;
            this.context.msImageSmoothingEnabled     = this.antiAlias;
        },
        updateSize() {
            const canvas = this.$refs.canvas;
            canvas.width = this.width * window.devicePixelRatio;
            canvas.height = this.height * window.devicePixelRatio;
            canvas.style.width = this.width + 'px';
            canvas.style.height = this.height + 'px';
            this.component.scaleX = this.viewportScale.scaleX * window.devicePixelRatio;
            this.component.scaleY = this.viewportScale.scaleY * window.devicePixelRatio;
            this.$nextTick(() => this.updateAntiAlias());
        },
        createCanvas(cb) {
            // Save any existing createCanvas
            const beforeCreateCanvas = easeljs.createCanvas;
            // Create a new createCanvas that will apply our changes
            easeljs.createCanvas = this.createCreateCanvasMethod();
            // Call code that will need createCanvas
            cb();
            // Replace old createCanvas
            easeljs.createCanvas = beforeCreateCanvas;
        },
        createCreateCanvasMethod() {
            return () => {
                // Create canvas
                const canvas = document.createElement('canvas');
                // Save the original getContext
                const getContext = canvas.getContext.bind(canvas);
                // Replace the original getContext
                canvas.getContext = (type) => {
                    // Get the context using the original
                    const context = getContext(type);
                    // Set the anti-aliasing
                    context.imageSmoothingEnabled       = this.antiAlias;
                    context.mozImageSmoothingEnabled    = this.antiAlias;
                    context.webkitImageSmoothingEnabled = this.antiAlias;
                    context.msImageSmoothingEnabled     = this.antiAlias;
                    // Return the context, as usual
                    return context;
                }
                // Return the new, auto-alias-fixing canvas
                return canvas;
            };
        },
    },
};
</script>
