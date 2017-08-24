<template>
    <div>
        <pre>{{ html }}</pre>

        <easel-canvas width="400" height="300">
            <easel-shape
                :x="200"
                :y="150"
                form="circle"
                fill="blue"
                :dimensions="100"
                :align="['center','center']"
            >
            </easel-shape>
        </easel-canvas>
    </div>
</template>

<script>

var html = 
`<easel-canvas width="400" height="300">
    <easel-shape
        :x="200"
        :y="150"
        form="circle"
        fill="blue"
        :dimensions="100"
        :align="['center','center']"
    >
    </easel-shape>
</easel-canvas>`;

export default {
    data() {
        return {
            html: html,
        };
    },
};
</script>
