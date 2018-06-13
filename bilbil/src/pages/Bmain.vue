<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" @click.native='showItem(1)'>选项一</mt-tab-item>
            <mt-tab-item id="2" @click.native='showItem(2)'>选项二</mt-tab-item>
            <mt-tab-item id="3" @click.native='showItem(3)'>选项三</mt-tab-item>
        </mt-navbar>
        <p>
            当前选中 {{selected}}
        </p>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="selected">
                <videobox v-if="selected==1">

                </videobox>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import videobox from '../components/videobox';
export default {
  name: "Bmain",
  components:{
      videobox
  },
  data(){
      return{
          selected:1
      }
  },
  methods:{
      showItem(id){
          console.log(id)
       this.selected = id; 
      }
  }
};
</script>

<style scoped>
</style>