<template>
    <div>
        <div v-for="(item,i) in initData" :key="i">
            <p>{{item.title}}</p>



            <p>1111111111111111111</p>





            <img :src="item.pic" alt="">
        </div>
    </div>
</template>

<script>
import * as hostUrl  from '../service/Bmain'
import axios from 'axios';
//axios  
    export default {
        name:'videobox',
        created(){

        },
        data(){
            return{
                initData:''
            }
        },
        mounted(){
            //hostUrl.MainUrl()
            axios.get(hostUrl.MainUrl())
                .then(res=>res)
                .then(response=>{
                    console.log(response)
                    this.initData = response.data.data.list
                })
            
        },
        methods:{
            
        }
    }
</script>

<style scoped>

</style>