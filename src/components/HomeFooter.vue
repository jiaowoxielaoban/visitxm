<template>
  <!--底部-->
  <div class="footer">
    <div class="top">
      <div class="t1">
        <div class="t1_1">
          <p>厦门旅游网</p>
          <ul>
            <li>厦门市文化和旅游局</li>
            <li>文旅宣传推广官方网站</li>
            <li>全国十佳旅游目的地网站</li>
          </ul>
        </div>
        <div class="t1_2">
          <img :src="erCode">
          <div>更多精彩内容请关注<br>
            厦门市文旅局官方微信</div>
        </div>
      </div>
      <div class="t2">
        <div>WWW.VISITXM.COM</div>
        <ul>
          <li v-for="item in list">
            <router-link :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="t3">
        <div class="t3_tit">联系我们</div>
        <ul>
          <li>
            <img src="/img/ico_mail.png">
            <span> 330445074@qq.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">闽ICP备06013218号-2, </a>
      <span>Copyright © 2021 All Right Reserved,</span>
      <a href="#">visitxm.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
  data(){
    return{
      erCode: '/img/qrcode.jpg',
      list: [
        {title: '厦门概况', path: '/about'},
        {title: '景区 线路 美食 酒店 购物 交通', path: '/attractions'},
        {title: '会议展览', path: '/Websearch/exhibit'},
        {title: '旅游资讯', path: '/inquire'},
        {title: '全域推广联盟', path: '/notFound'},
        {title: '节庆活动', path: '/Websearch/festival'},
        {title: '旅游路线', path: '/line'},
        {title: '发现金门', path: '/more'},
        {title: '旅游攻略', path: '/Websearch/travelGuide'},
        {title: '图片 视频', path: '/notFound'},
        {title: '旅游贴士', path: '/Websearch/travelGuide'},
        {title: '厦门市文旅局官方微博', path: '/notFound'}
      ]
    }
  }
}
</script>

<style scoped>

.footer{
  width: 100%;
  /*height: 500px;*/
  padding-top: 40px;
  background: rgb(40,40,40);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer>.top{
  width: 1230px;
  /*background: yellow;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid rgb(126, 123, 123);
}
.footer>.bottom{
  width: 1230px;
  height: 70px;
  /*background: yellow;*/
  text-align: center;
  line-height: 70px;
}
.footer>.bottom>a{
  color: white;
}
.footer>.bottom>span{
  color: rgb(150, 155, 159);
}
.footer>.top>.t1{
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 20px 70px 20px 20px;
  /*padding-right: 70px;*/
}
.footer>.top>.t1>.t1_1>p{
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
}
.footer>.top>.t1>.t1_1>ul{
  list-style: none;
  margin-top: 15px;
  font-size: 14px;
}
.footer>.top>.t1>.t1_1>ul>li{
  letter-spacing: 3px;
  font-weight: 500;
  line-height: 30px;
}
.footer>.top>.t1>.t1_2{
  padding-right: 20px;
  padding-left: 50px;
  border-right: 1px solid rgb(126, 123, 123);
  text-align: center;
}
.footer>.top>.t2{
  width: 350px;
  height: 170px;
  padding-right: 60px;
  border-right: 1px solid rgb(126, 123, 123);
  margin-top: 15px;
}
.footer>.top>.t2>div{
  color: rgb(51,137,215);
  font-weight: 700;
  font-size: 20px;
}
.footer>.top>.t2>ul{
  display: flex;
  flex-wrap: wrap;
}
.footer>.top>.t2>ul>li{
  padding: 5px 10px;
  list-style: none;
  background: url("/img/sm_dot.png") no-repeat 0px 15px;
}
.footer>.top>.t2>ul>li>a{
  color: white;
}
.footer>.top>.t2>ul>li>a:hover{
  opacity: 0.8;
}
.footer>.top>.t3{
  margin: 15px;
}
.footer>.top>.t3>.t3_tit{
  color: rgb(51,137,215);
  font-weight: 700;
  font-size: 20px;
}
.footer>.top>.t3>ul{
  margin-top: 5px;
  height: 30px;
}
.footer>.top>.t3>ul>li{
  display: flex;
  list-style: none;
  color: white;
  padding-left: 10px;
  background: url("/img/arrow_bottom.png") no-repeat 0px 5px;
}
.footer>.top>.t3>ul>li>img{
  width: 20px;
  padding: 0 5px;
}

</style>