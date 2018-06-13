<template>
    <div>
        <mt-button type="default" @click='tab01(1)'> 选项卡01 </mt-button>
        <mt-button type="default" @click='tab01(2)'> 选项卡02 </mt-button>
        <router-view name='a'></router-view>
        <router-view name='b'></router-view>
    </div>
</template>

<script>
 import SubHeader  from '../components/SubHeader';
export default {
        name:'index',
        components:{
            SubHeader
        },
        methods:{
            tab01(index){
                console.log(`/index/tab0${index}`)
                this.$router.push({
                    path:`/index/tab0${index}`
                })
            },
            
        }
}
</script>

<style scoped>

</style>