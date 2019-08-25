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
                            return component.getRelativeCacheBounds()
                                .catch(error => {
                                    throw new Error(`Error with component <${component.$options.name}>: ${error}`)
                                });
                        })
                )
                .then(allBounds => {
                    const {x, y, width, height} = allBounds
                        .reduce((acc, {minX, width, minY, height}) => {
                            if (minX < acc.x) {
                                acc.x = minX;
                            }
                            if (minY < acc.y) {
                                acc.y = minY
                            }
                            const newWidth = (minX - acc.x) + width;
                            const newHeight = (minY - acc.y) + height;
                            if (height > acc.height) {
                                acc.height = height;
                            }
                            if (width > acc.width) {
                                acc.width = width;
                            }
                            return acc;
                        }, {x: 0, y: 0, width: 1, height: 1});
                    return {x:-x,y:-y,width,height};
                });
        },
    },
};
</script>
