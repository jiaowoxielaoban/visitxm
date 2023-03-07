<template>
  <!--        版心第三部分-->
  <div class="top3">
    <h1 class="guide">旅游向导</h1>
    <div class="guide_item">
      <div class="item" v-for="item1 in travelList">
        <router-link :to="item1.path">
          <span>{{item1.title}}</span>
          <img :src="item1.img">
          <ul>
            <li v-for="item2 in item1.subTitle">
              <router-link to="/">{{item2}}</router-link>
            </li>
          </ul>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top3",
  data(){
    return{
      travelList:[
        {title: '景区', img: '/img/travel_guider_p001.jpg', subTitle:['5A级景区', '4A级景区', '厦门新24景', '主题乐园', '文博科教', '遗产古迹'], path: '/attractions'},
        {title: '线路', img: '/img/travel_guider_p002.jpg', subTitle:['金砖雅游', '自驾游', '夜游厦门', '周边游', '鼓浪屿经典遗产'], path: '/line'},
        {title: '美食', img: '/img/travel_guider_p003.jpg', subTitle:['地道美食', '私房佳肴', '海鲜排挡', '午茶晚茶', '养生素菜'], path: '/food'},
        {title: '酒店', img: '/img/travel_guider_p004.jpg', subTitle:['5星级酒店', '4星级酒店', '3星级酒店', '高级酒店', '名宿'], path: '/house'},
        {title: '购物', img: '/img/travel_guider_p005.jpg', subTitle:['时尚商圈', '特色街区', '地道伴手礼', '跨境海淘', '离境退税政策'], path: '/shop'},
      ]
    }
  }
}
</script>

<style scoped>
.top3{
  margin-top: 20px;
}
.top3>.guide_item{
  width: 100%;
  height: 360px;
  /*background: yellow;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top3>.guide_item>.item{
  width: 230px;
  height: 360px;
  position: relative;
  margin: 0px 8px;
}
.top3>.guide_item>.item> a span{
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
  font-weight: 350;
}
.top3>.guide_item>.item> a ul{
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: white;
  box-sizing: border-box;
  padding-top: 5px;
  padding-left: 15px;
  margin-top: -8px;
}
.top3>.guide_item>.item a ul>li{
  list-style: none;
  width: 90px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 20px;
  background: url("/img/tg_dot.png") no-repeat 1px 10px ;
}
.top3>.guide_item>.item a ul>li:hover{
  color: rgb(59,160,230);
}

</style>