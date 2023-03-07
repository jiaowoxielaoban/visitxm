<template>
<!--  <h1>美食</h1>-->
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
      title: '美食',
      list: ['地道小事', '海鲜排挡', '养生素菜', '私房佳肴', '午茶晚饭'],
      content:[
        {txt: '张三疯奶茶店（龙头路一店）', img: '/img/cb720d8d-cdd7-4db7-abc8-100399dd1795.jpg', label: '地道小事'},
        {txt: '吴再添小吃', img: '/img/e27cfcf5-1fde-4f96-bf49-73c1029d4bb7.jpg', label: '地道小事'},
        {txt: '大同鸭肉粥店', img: '/img/57a8d83c-d60c-4d60-bf82-00e922f7b619.jpg', label: '私房佳肴'},
        {txt: '韭菜盒', img: '/img/jch.jpg', label: '养生素菜'},
      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>