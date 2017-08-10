<template>
    <span>
        <slot></slot>
    </span>
</template>

<script>
import easeljs from '../easel.js';
import _ from 'lodash';

export default {
    provide() {
        return {
            spriteSheet: this.spriteSheet,
        };
    },
    props: ['images', 'frames', 'animations', 'framerate'],
    data() {
        return {
            spriteSheet: new easeljs.SpriteSheet({
                images: this.images,
                frames: this.frames,
                animations: this.animations,
                framerate: this.framerate,
            }),
        };
    },
}
</script>
