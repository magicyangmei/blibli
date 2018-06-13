<template>
    <div>
        {{count}}
        <button @click='increment'> + </button>
        <button> - </button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               
            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            increment(){
                console.log(this.$store.commit('increment'))
            },
            addCart(){
                this.$router({
                    path:'/shopCart'
                })
            }
        }
    }
</script>

<style scoped>

</style>