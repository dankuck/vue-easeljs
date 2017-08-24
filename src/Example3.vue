<template>
    <div>
        <pre>{{ html }}</pre>

        <easel-canvas>
            <easel-text 
                text="This is so easy!"
                :x="10"
                :y="10"
                :align="['left', 'alphabetical']"
            >
            </easel-text>
        </easel-canvas>
    </div>
</template>

<script>

var html = 
`<easel-canvas>
    <easel-text 
        text="This is so easy!"
        :x="10"
        :y="10"
        :align="['left', 'alphabetical']"
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
