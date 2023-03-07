<template>
<!--  <h1>节庆活动</h1>-->
  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
<!--  2312-->
<!--  <img src="../img/sjd.jpg" alt="">-->
<!--  213-->
  <HomeFooter/>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "TravelGuide",
  data(){
    return{
      title: '旅游攻略',
      list: [],
      content:[
        {txt: '来这里，感受单车飞跃大海的畅快！', img: '/img/下载.jpg'},
        {txt: '来这里，感受单车飞跃大海的畅快！', img: '/img/下载.jpg'},
        {txt: '来这里，感受单车飞跃大海的畅快！', img: '/img/下载.jpg'},
        {txt: '来这里，感受单车飞跃大海的畅快！', img: '/img/下载.jpg'},

      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>