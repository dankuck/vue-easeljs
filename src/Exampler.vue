<template>
    <div>
        <textarea v-model="code" style="width: 100%; height: 15em;"></textarea>
        <br />
        <br />
        <div v-if="errors.length > 0">
            <pre v-for="error in errors" :key="error">{{ error }}</pre>
        </div>
        <component v-else-if="is" :is="is"></component>
    </div>
</template>

<script>
const makeName = () => 'dynamic-' + (new String(Math.random()).replace(/.*\./, ''));

Vue.config.warnHandler = function (err, vm) {
    if (vm.$options.warnHandler) {
        vm.$options.warnHandler(err);
    }
};

export default {
    props: ['html'],
    data() {
        return {
            code: this.html,
            is: null,
            errors: [],
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
            this.errors = [];
            const name = makeName();
            const parent = this;
            Vue.component(name, {
                template: this.code,
                data() {
                    return {
                        // make a few common tools available to editors
                        console: console,
                        alert: (...params) => alert(...params),
                        window: window,
                        document: document,
                    }
                },
                warnHandler(err) {
                    parent.errors.push(err);
                },
            });
            this.is = name;
        },
    },
};
</script>
