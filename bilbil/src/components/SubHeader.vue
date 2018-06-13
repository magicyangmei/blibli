<template>
    <div>
        <header>
            <h1> 
                <slot>
                </slot>
            </h1>
        </header>
    </div>
</template>

<script>
    export default {
        // vue 把所有的事件 方法 属性，都放在对象里 暴露出去
        // name:'SubHeader',
        // beforeCreate(){
        //     console.log(1)
        // },
        // created(){console.log(2)},
        // data(){
        //     //  data 必须是对象
        //     return{

        //     }
        // },
        // beforeMount(){
        //     console.log(3)
        // },
        // mounted(){
        //     console.log(4)
        // },
        // beforeUpdate(){
        //     console.log(5)
        // },
        // updated(){
        //     console.log(6)
        // },
        // beforeDestroy(){
        //     console.log(7)
        // },
        // destroyed(){
        //     console.log(8)
        // }
    }
</script>

<style scoped>

</style>