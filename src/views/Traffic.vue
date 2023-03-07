<template>
<!--  <h1>交通</h1>-->
  <DefaultHeader/>
  <div class="container">
    <img src="/img/mbanner.jpg">
    <ul class="top1">
      <a v-for="item in list" :href="item" target="_blank"></a>
    </ul>
    <div class="banner1">
      <div class="left">
        <h3>出行宝典</h3>
        <ul>
<!--          <li v-for="item in tips"><a href="#">{{item.txt}}</a></li>-->
          <li v-for="item in tips" @click="showNews(item)">{{item.txt}}</li>
        </ul>
      </div>
      <div class="right">
        <a href="http://www.visitxm.com/z/ticket/" target="_blank"><img src="/img/rb01.jpg"></a>
        <a href="http://www.xmqcz.com/" target="_blank"><img src="/img/rb02.jpg"></a>
      </div>
    </div>
  </div>
  <HomeFooter/>
</template>


<!--bbc1-fyqrewi8365371.jpg-->
<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  name: "Food",
  data(){
    return{
        tips:[
          {id: '0', txt: '乘坐飞机的十条小常识，你了解多少？快来看看吧~'},
          {id: '1', txt: '旅行打包必备21个小贴士'},
          {id: '2', txt: '骑单车旅行的注意事项'},
          {id: '3', txt: '经常晕车晕机怎么办 教你防治措施'},
          {id: '4', txt: '如何减轻航空旅行不适应症'},
          {id: '5', txt: '实行车票实名制时，可以使用哪些身份证？'},
          {id: '6', txt: '发生火车票误售、误购时怎么办？'},
        ],
        list:['https://flights.ctrip.com/online/channel/domestic', 'https://www.12306.cn/index/', 'https://www.xmferry.com/', 'http://www.xmqcz.com/', 'http://www.xmbus.cn/', 'https://www.369.me/xm/', 'https://baike.baidu.com/item/%E5%8E%A6%E9%97%A8%E5%BF%AB%E9%80%9F%E5%85%AC%E4%BA%A4?fr=aladdin']
      }
  },
  components:{DefaultHeader, HomeFooter},
  methods:{
    showNews:function (val){
      this.$router.push({
        path: '/news',
        query:{id: val.id, title: '图片', sub_title: val.txt}
      })
    }
  }
}
</script>

<style scoped>
.container{
  width: 980px;
  margin-left: 470px;
  padding-bottom: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .top1{
  list-style: none;
  display: flex;
  flex-direction: row;
}
.container .top1 a{
  width: 140px;
  height: 118px;
}
.container .top1 a:nth-of-type(1){
  background: url("/img/traffic_menu01_off.png") no-repeat;
}
.container .top1 a:nth-of-type(2){
  background: url("/img/traffic_menu02_off.png") no-repeat;
}
.container .top1 a:nth-of-type(3){
  background: url("/img/traffic_menu03_off.png") no-repeat;
}
.container .top1 a:nth-of-type(4){
  background: url("/img/traffic_menu04_off.png") no-repeat;
}
.container .top1 a:nth-of-type(5){
  background: url("/img/traffic_menu05_off.png") no-repeat;
}
.container .top1 a:nth-of-type(6){
  background: url("/img/traffic_menu06_off.png") no-repeat;
}
.container .top1 a:nth-of-type(7){
  background: url("/img/traffic_menu07_off.png") no-repeat;
}
.banner1{
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.banner1 .right{
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner1 .left{
  width: 700px;
  border: 1px solid rgb(0,146,223);
}
.banner1 .left ul{
  list-style: none;

}
.banner1 .left ul li{
  padding: 5px 25px;
  margin: 0 15px;
  background: url("/img/ico_arrow.png") no-repeat 10px 13px;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.banner1 .left ul li:hover{
  color: rgb(0,146,223);
}
.banner1 .left h3{
  color: rgb(0,146,223);
  padding: 10px 30px;
  box-sizing: border-box;
  background: url("/img/ico_book.png") no-repeat 7px 12px;
}

</style>