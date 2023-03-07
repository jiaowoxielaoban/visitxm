<template>

  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <HomeFooter/>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "Attractions",
  data(){
    return{
      title: '会议展览',
      list: [],
      content:[
        {txt: '四展齐放 走起！', img: '/img/W020221118289813073992.jpg'},
        {txt: '四展齐放 走起！', img: '/img/W020221118289813073992.jpg'},
        {txt: '四展齐放 走起！', img: '/img/W020221118289813073992.jpg'},
        {txt: '四展齐放 走起！', img: '/img/W020221118289813073992.jpg'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>