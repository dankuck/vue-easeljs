<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import easeljs from '../../easeljs/easel.js';
import EaselDisplayObject from '../mixins/EaselDisplayObject.js';
import EaselParent from '../mixins/EaselParent.js';
import EaselCache from '../mixins/EaselCache.js';

export default {
    mixins: [EaselDisplayObject, EaselParent, EaselCache],
    methods: {
        init() {
            this.component = new easeljs.Container();
            this.displayObjectInit();
        },
        getCacheBounds() {
            return Promise.all(
                    this.children
                        .map(component => {
                            return component.getRelativeCacheBounds
                                ? component.getRelativeCacheBounds()
                                : Promise.reject(`<${component.$options.name}> does not mixin EaselCache`);
                        })
                )
                .then(allBounds => {
                    return allBounds
                        .reduce((acc, {x, width, y, height}) => {
                            if (x < acc.x) {
                                acc.x = x;
                            }
                            if (y < acc.y) {
                                acc.y = y
                            }
                            const newWidth = (x - acc.x) + width;
                            const newHeight = (y - acc.y) + height;
                            if (newHeight > acc.height) {
                                acc.height = newHeight;
                            }
                            if (newWidth > acc.width) {
                                acc.width = newWidth;
                            }
                            return acc;
                        }, {x: 0, y: 0, width: 1, height: 1});
                });
        },
    },
};
</script>
