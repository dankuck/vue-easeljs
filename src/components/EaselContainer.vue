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
                        .reduce(
                            this.getSmallestCombination,
                            {x: 0, y: 0, width: 1, height: 1}
                        );
                });
        },
    },
};
</script>
