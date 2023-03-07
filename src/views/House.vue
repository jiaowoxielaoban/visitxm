<template>
<!--  <h1>酒店</h1>-->
  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <HomeFooter/>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "House",
  data(){
    return{
      title: '酒店',
      list: ['5星级酒店', '4星级酒店', '3星级酒店', '2星级酒店', '高级酒店'],
      content:[
        {txt: '厦门正元希尔顿逸林酒店', img: '/img/20090o000000fdc0e3A1E_R_550_412.jpg', label: '5星级酒店'},
        {txt: '厦门鑫博雅大酒店', img: '/img/xby.jpg', label: '4星级酒店'},
        {txt: '厦门日月谷温度度假村', img: '/img/09732c59-6d7d-4cbe-a49d-0aeca2675bb0.jpg', label: '4星级酒店'},
        {txt: '厦门磐基希尔顿酒店', img: '/img/1b999026-d56f-47d8-9e4e-225cd3cf7f01.jfif', label: '高级酒店'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>