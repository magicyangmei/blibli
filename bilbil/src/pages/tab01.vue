<template>
    <div style="height:100vh">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in list" :key="index">
                {{item.name}}
            </mt-swipe-item>
        </mt-swipe>
        <p>
            
        </p>
    </div>
</template>

<script>
    export default {
        name:"tab01",
        data(){
            return{
                list:[
                    {name:'木轩'},
                    {name:'王莹'},
                    {name:'佳梦'}
                ],
                id:''
            }
        },
        mounted(){
            console.log(this.$data.list[0].name) //观察者对象 OB vue坑 ob对象的值可以观察但是不能取值
            //this.id = JSON.parse(JSON.stringify(this.$data.list))
            console.log("-------------------")
            console.log(JSON.parse(JSON.stringify(this.$data.list)))
            // vue 核心 ob 模式 观察者模式 只能观察不能修改 
        }
    }
</script>

<style scoped>

</style>