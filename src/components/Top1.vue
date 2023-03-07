<template>
  <!--        版心最上面部分-->
  <div class="top1">
    <div class="left">
      <h2>厦门旅游</h2>
      <ul>
        <li v-for="item in travel"><router-link :to="item.path">{{item.name}}</router-link></li>
      </ul>
    </div>
    <div class="center"></div>
    <div class="right">
      <div class="news">
        <span class="news_left">最新资讯</span>
        <span class="news_right"><router-link to="/inquire">更多资讯</router-link></span>
      </div>
      <ul>
        <li v-for="item in moreInfo" @click="showNews(item)">
          {{item.text}}
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top1",
  data(){
    return{
      travel:[
        {name: '节庆活动', path: '/Websearch/festival'},
        {name: '会议展览', path: '/Websearch/exhibit'},
        {name: '旅游攻略', path: '/Websearch/travelGuide'},
        {name: '旅游贴士', path: '/Websearch/travelTips'},
        {name: '图片', path: '/notFound'},
        {name: '视频', path: '/notFound'},
      ],
      moreInfo:[
        {id: 0, text: '露营潮旅生活精彩继续，下一站海沧东孚~'},
        {id: 1, text: '维纳数字艺术园开园，集美又添文创新地标'},
        {id: 2, text: '金鸡百花电影节期间 交通限行→'},
        {id: 3, text: '来集美鳌园赏满园“黄金甲”'},
        {id: 4, text: '厦门获评国家食品安全示范城市'},
        {id: 5, text: '未来导游之星大赛 参赛选手均为00后'},
        {id: 6, text: '周末去观音山梦幻海岸放风筝'},
        {id: 7, text: '今起三天鹭岛气温不降反升'}
      ]
    }
  },
  methods:{
    showNews:function (val){
      // console.log(val)
      this.$router.push({
        path: '/news',
        query:{id: val.id, title: '旅游资讯',sub_title: val.text}
      })
    }
  }
}
</script>

<style scoped>
.container>.top1{
  width: 100%;
  height: 320px;
  /*background: white;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container>.top1>.left{
  width: 220px;
  height: 100%;
  background-color: rgb(0,65,108);
  /*固定大小 不会被padding撑大*/
  box-sizing: border-box;
  padding: 0 15px;
}
.container>.top1>.left>ul{
  list-style: none;
  padding-top: 10px;
}
.container>.top1>.left>ul>li{
  line-height: 40px;
  padding-left: 15px;
  background: url("/img/ql_dot.png") no-repeat 0 17px;
}
.container>.top1>.left>ul>li:hover{
  color: rgb(125, 125, 125);
}
.container>.top1>.left>ul>li>a{
  color: white;
}
.container>.top1>.left>h2{
  width: 100%;
  color: rgb(125, 199, 250);
  padding: 15px 0;
  border-bottom: 1px solid rgb(125, 199, 250);
}
.container .top1 .left ul li a:hover{
  color: rgb(103,191,252);
}
.container>.top1>.center{
  width: 690px;
  height: 100%;
  margin: 0 15px;
  background: url("/img/qmy.jpg");
}
.container>.top1>.right{
  width: 290px;
  height: 100%;
  /*background-color: cornflowerblue;*/
  box-sizing: border-box;
}
.top1 .right .news{
  /*background: yellow;*/
  height: 35px;
  width: 100%;
  border-bottom: 2px solid rgb(125, 199, 250);
}
.top1 .right .news .news_left{
  font-weight: 1000;
  border-bottom: 2px solid rgb(29,122,174);
  padding-bottom: 7px;
  line-height: 35px;
}
.top1 .right .news .news_right{
  float: right;
  line-height: 35px;
  /*斜体字*/
  font-style: italic;
  font-size: 15px;
}
.top1 .right .news .news_right:hover a{
  color: rgb(103,191,252);
}
.top1 .right ul{
  list-style: none;
  background: white;
  /*height: 100%;*/
  height: 283px;
}
.top1 .right ul li{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 35px;
  font-size: 15px;
  padding-left: 15px;
  background: url("/img/sm_arrow.png") no-repeat 4px 15px;
}
.top1 .right ul li:hover{
  color: rgb(103,191,252);
}

</style>