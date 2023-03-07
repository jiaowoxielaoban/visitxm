<template>
<!--  <h1>购物</h1>-->
  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <HomeFooter/>

</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "Shop",
  data(){
    return{
      title: '购物',
      list: ['时尚商圈', '特色街区', '跨境海淘', '地道伴手礼', '离境退税政策'],
      content:[
        {txt: '中闽百汇商场', img: '/img/20180706093848.jpg', label: '时尚商圈'},
        {txt: '东百蔡塘商场', img: '/img/e5076df1-ad78-454e-b532-45baaa7ce5ed.jpg', label: '时尚商圈'},
        {txt: '风信子厦门跨境商品直购体验中心', img: '/img/fxzd.jpg', label: '特色街区'},
        {txt: '风信子厦门跨境商品直购体验中心', img: '/img/fxzd.jpg', label: '特色街区'},
        {txt: '水晶钢琴', img: '/img/39c8f5b5-3c55-4f9b-90ac-4b08e502518a.jpg', label: '地道伴手礼'},
        {txt: '水晶钢琴', img: '/img/39c8f5b5-3c55-4f9b-90ac-4b08e502518a.jpg', label: '地道伴手礼'},
        {txt: '水晶钢琴', img: '/img/39c8f5b5-3c55-4f9b-90ac-4b08e502518a.jpg', label: '地道伴手礼'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>