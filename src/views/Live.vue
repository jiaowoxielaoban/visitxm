<template>
<!--  <h1>演出</h1>-->
  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <HomeFooter/>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "Food",
  data(){
    return{
      title: '演出',
      list: [],
      content:[
        {txt: '明星版话剧i、跨年音乐会......', img: '/img/362cc68cd6044046a04d54edd5fc8cae_noop.png', date: '2066-06-06'},
        {txt: '12月！这些好戏在厦门', img: '/img/下载.jfif', date: '2066-06-06'},
        {txt: '钢琴家罗维、王子翔，北京交响乐团~最新演艺等你来', img: '/img/下载 (1).jfif', date: '2066-06-06'},
        {txt: '茶花女、美猴王~快来赴艺术之约', img: '/img/92bba62d97914c48b30814f3dba51b37.jpeg', date: '2066-06-06'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>