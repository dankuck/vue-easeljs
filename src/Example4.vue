<template>
    <div>
        <pre>{{ html }}</pre>

        <easel-canvas width="500" height="100">
            <easel-container
                flip="horizontal"
                scale=".5"
                :x="250"
                :y="50"
            >
                <easel-bitmap
                    image="/images/wooden-sign-texture.png"
                >
                </easel-bitmap>
                <easel-text 
                    text="Dan's Left Shoe Emporium"
                    font="50px 'Times New Roman'"
                    :y="25"
                >
                </easel-text>
            </easel-container>
        </easel-canvas>
    </div>
</template>

<script>

var html = 
`<easel-container
    flip="horizontal"
    scale=".5"
    :x="250"
    :y="50"
>
    <easel-bitmap
        image="/images/wooden-sign-texture.png"
    >
    </easel-bitmap>
    <easel-text 
        text="Dan's Left Shoe Emporium"
        font="50px 'Times New Roman'"
        :y="25"
    >
    </easel-text>
</easel-container>`;

export default {
    data() {
        return {
            html: html,
        };
    },
};
</script>
