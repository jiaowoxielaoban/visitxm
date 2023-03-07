<template>
  <div class="defaultHeader">
    <img src="/img/logo.png">
    <!--        语言栏-->
    <div class="langue">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>{{ temperature }}°C {{city}}</li>
      </ul>
    </div>

    <!--        导航条-->
    <div class="navigation">
      <ul>
        <li v-for="nav_item in navigation">
          <router-link :id="nav_item.id" :to="nav_item.path">{{nav_item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
  <br>
</template>

<script>
export default {
  name: "DefaultHeader",
  data(){
    return {
      navigation: [
        {id: 0, name: '首页', path: '/'},
        {id: 1, name: '厦门概述', path: '/about'},
        {id: 2, name: '旅游资讯', path: '/inquire'},
        {id: 3, name: '景区', path: '/attractions'},
        {id: 4, name: '线路', path: '/line'},
        {id: 5, name: '美食', path: '/food'},
        {id: 6, name: '酒店', path: '/house'},
        {id: 7, name: '购物', path: '/shop'},
        {id: 8, name: '交通', path: '/traffic'},
        {id: 9, name: '演出', path: '/live'},
        {id: 10, name: '发现金门', path: '/more'},
      ],
      temperature: '',
      city: ''
    }
  },
  methods:{
    // 获取当前气温
    getWeather:function (){
      this.axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=04e0a4356d54a59f73d82e66f6555188&city=350200&extensions=base&output=JSON').then(res =>{
        // console.log(res)
        this.temperature = res.data.lives[0].temperature
        this.city = res.data.lives[0].city
      })
    }
  },
  created() {
    this.getWeather()
  }
}
</script>

<style scoped>

/*头部*/
.defaultHeader{
  margin-top: 10px;
  height: 100px;

}
.defaultHeader img{
  float: left;
  margin-left: 85px;
}

/*语言部分样式*/
.langue{
  width: 100%;
  height: 35px;
  background-color: #101111;
}
.langue>ul{
  float: right;
  /*right: 470px;*/
  margin-right: 80px;
}
.langue>ul>li{
  width: 70px;
  height: 35px;
  float: left;
  margin-left: 5px;
  /*去掉li标签的样式*/
  list-style: none;
}
.langue>ul>li:nth-of-type(1){
  background: url("/img/lag.png");
}
/*no-repeat：在有限的空间移动图片，可以用来选择图片要显示的部分内容*/
.langue>ul>li:nth-of-type(1):hover{
  background: url("/img/lag.png") no-repeat -80px 0px;
}
.langue>ul>li:nth-of-type(2){
  background: url("/img/lag.png") no-repeat 0px -34px;
}
.langue>ul>li:nth-of-type(2):hover{
  background: url("/img/lag.png") no-repeat -80px -34px;
}
.langue>ul>li:nth-of-type(3){
  background: url("/img/lag.png") no-repeat 0px -68px;
}
.langue>ul>li:nth-of-type(3):hover{
  background: url("/img/lag.png") no-repeat -80px -68px;
}
.langue>ul>li:nth-of-type(4){
  background: url("/img/lag.png") no-repeat 0px -102px;
}
.langue>ul>li:nth-of-type(4):hover{
  background: url("/img/lag.png") no-repeat -80px -102px;
}
.langue>ul>li:nth-of-type(5){
  margin-left: 15px;
  padding-left: 30px;
  font-size: 12px;
  /*文字居中效果: line-height等于容器高度*/
  line-height: 35px;
  background: url("/img/b2.png") no-repeat;
  /*background-color: #3c87c7;*/
  color: white;
}
/*导航条*/
.navigation{
  width: 100%;
  height: 70px;
  background-color: #0e2a48;
}
/*消除a标签默认样式*/
a{
  /*取消下划线*/
  text-decoration: none;
  color: #101111;
}
.navigation>ul{
  margin-left: 310px;
  height: 70px;
}
.navigation>ul>li{
  height: 70px;
  float: left;
  list-style: none;
  padding: 0 15px;
  line-height: 70px;
}
.navigation>ul>li>a{
  color: white;
}
.navigation>ul>li>a:hover{
  color: rgb(125, 125, 125);
}
</style>