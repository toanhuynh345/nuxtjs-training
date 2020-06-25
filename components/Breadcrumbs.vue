<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">{{this.$store.getters.getRouter}}</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{router}}</li>
        </ol>
        <button @click="getRoute()" class="btn btn-primary ml-3"> New </button>
    </nav>
</template>
<script>
    export default {
        name: "Breadcrumbs",
        data() {
            return {
                message: this.$router.history.current.name,
                router: ""
            }
        },
        created() {
            this.$store.dispatch('getCurrentRoute', this.$router.history.current.name);
            this.$nuxt.$on('breadcrumb', (data) => {
                this.router = data
            })
        },
        methods: {
            getRoute(){
                this.message = 'this is new message'
            }
        },
        watch:{
            // '$router': {
            //     immediate: true,
            //     handler(to, from) {
            //         this.$store.dispatch('getCurrentRoute', to.name)
            //         // this.$store.commit('CURRENT_ROUTE', to.name);
            //     }
            // },
            $route(to, from) {
               // this.$store.dispatch('getCurrentRoute', to.name)
                // this.$store.commit('CURRENT_ROUTE', to.name);

            }
        }
    }
</script>

<style lang="scss" scoped>
</style>