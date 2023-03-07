<template>
<!--  <h1>景区</h1>-->
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
      title: '景区',
      list: ['5A景区', '4A景区', '3A景区', '2A景区', '厦门新24景', '文博教科', '遗产古迹', '主题乐园', '展览场馆'],
      content:[
        {txt: '鼓浪屿', img: '/img/g1(1).jpg', label: '5A景区'},
        {txt: '厦门革命烈士陵园', img: '/img/2018294479.jpg', label: '4A景区'},
        {txt: '中共闽中厦门工委旧址', img: '/img/2018291548.jpg', label: '3A景区'},
        {txt: '厦门市博物馆', img: '/img/b1.jpg', label: '2A景区'},
        {txt: '环鼓夜游 | 游海上厦门 赏千亿金砖夜景', img: '/img/d04c8238d3db4cfc9a12b7c47e368db8.jpg', label: '遗产古迹'},

      ],
    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>

</style>