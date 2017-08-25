<template>
    <div>
        <textarea v-model="code" style="width: 100%; height: 15em;"></textarea>
        <br />
        <br />
        <component v-if="is" :is="is"></component>
        
    </div>
</template>

<script>
export default {
    props: ['html'],
    data() {
        return {
            code: this.html,
            name: 'dynamic-' + (new String(Math.random()).replace(/.*\./, '')),
            is: null,
        };
    },
    mounted() {
        this.refresh();
    },
    watch: {
        code() {
            this.refreshAfterDelay();
        },
    },
    methods: {
        refreshAfterDelay() {
            if (this.delayedRefresh) {
                clearTimeout(this.delayedRefresh);
            }
            this.delayedRefresh = setTimeout(() => {
                this.delayedRefresh = null;
                this.refresh();
            }, 1000);
        },
        refresh() {
            Vue.component(this.name, {
                template: this.code,
                data() {
                    return {
                        // make a few common tools available to editors
                        console: console,
                        alert: function() { window.alert.apply(window, arguments) },
                        window: window,
                        document: document,
                    }
                },
            });
            this.is = null;
            Vue.nextTick(() => {
                this.is = this.name;
            });
        },
    },
};
</script>
