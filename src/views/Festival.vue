<template>
<!--  <h1>节庆活动</h1>-->
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
      title: '节庆活动',
      list: [],
      content:[
        {id:'0', txt: '海峡旅游博览会0', img: '/img/234.jpg'},
        {id:'1', txt: '海峡旅游博览会1', img: '/img/234.jpg'},
        {id:'2', txt: '海峡旅游博览会2', img: '/img/234.jpg'},
        {id:'3', txt: '海峡旅游博览会3', img: '/img/234.jpg'},
        {id:'4', txt: '海峡旅游博览会4', img: '/img/234.jpg'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>