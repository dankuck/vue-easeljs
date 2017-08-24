<template>
    <div>
        <pre>{{ html }}</pre>

        <easel-canvas width="400" height="300">
            <easel-bitmap
                image="/images/awesome-background.jpg"
                :x="0"
                :y="0"
                :align="['left','top']"
            >
            </easel-bitmap>
        </easel-canvas>
    </div>
</template>

<script>

var html = 
`<easel-canvas width="400" height="300">
    <easel-bitmap
        image="/images/awesome-background.jpg"
        :x="0"
        :y="0"
        :align="['left','top']"
    >
    </easel-bitmap>
</easel-canvas>`;

export default {
    data() {
        return {
            html: html,
        };
    },
};
</script>
