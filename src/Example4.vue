<template>
    <div>
        <pre>{{ html }}</pre>

        <easel-canvas width="500" height="100">
            <easel-container
                :flip="horizontal"
                :shadow="['white',0,0,7]"
            >
                <easel-bitmap
                    :x="250"
                    :y="50"
                    image="/images/wooden-sign-texture.png"
                >
                </easel-bitmap>
                <easel-text 
                    text="Dan's Left Shoe Emporium"
                    font="50px 'Times New Roman'"
                    :x="250"
                    :y="75"
                >
                </easel-text>
            </easel-container>
        </easel-canvas>
    </div>
</template>

<script>

var html = 
`<easel-canvas width="500" height="100">
    <easel-shape
        form="rect"
        :dimensions="[500,100]"
        :x="250"
        :y="50"
        fill="#CCCCFF"
    >
    </easel-shape>
    <easel-text 
        text="This is so easy!"
        :x="250"
        :y="75"
        font="70px Calibri"
        color="white"
        :shadow="['#000088',3,2,3]"
    >
    </easel-text>
</easel-canvas>`;

export default {
    data() {
        return {
            html: html,
        };
    },
};
</script>
