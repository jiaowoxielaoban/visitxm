<template>
  <!--版心第四部分 --热门推荐-->
  <div class="top4">
    <h1 class="guide">热门推荐</h1>
    <div class="img_item">
      <div v-for="item in list1" @click="showNews(item)">
        <span>{{ item.title }}</span>
        <img :src="item.img">
      </div>
    </div>
    <div class="img_item1">
      <div v-for="item in list2" @click="showNews(item)">
        <span>{{ item.title }}</span>
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //版心第一部分
  name: "top43",
  data(){
    return{
      list1:[
        {id: '0', title: '厦门市园林植物园', img: '/img/yl.jpg'},
        {id: '1', title: '诚毅科技探索中心', img: '/img/cyd5.jpg'},
        {id: '2',title: '日月谷温泉度假村', img: '/img/rygwqd.jpg'},
        {id: '3',title: '梦幻海岸', img: '/img/mhhd.jpg'},
      ],
      list2:[
        {id: '4',title: '云上厦门', img: '/img/des_pic00012.jpg'},
        {id: '5',title: '胡里山炮台', img: '/img/des_pic00006.jpg'},
        {id: '6',title: '北辰山', img: '/img/21437ea9-2804-44de-99a6-d4e9e84ea13f.jpg'},
        {id: '7',title: '古龙酱文化园', img: '/img/720e5bcb-6148-4c22-b4f7-d801190098d2.jpg'},
        {id: '8',title: '曾厝垵', img: '/img/z3d.jpg'},
      ],
    }
  },
  methods:{
    showNews:function (val){
      console.log(val)
      this.$router.push({
        path: '/news',
        query:{id: val.id, title: '景区', sub_title: val.title, img: val.img}
      })
    }
  }
}
</script>

<style scoped>
.top4>.img_item{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top4>.img_item>div{
  position: relative;
}
.top4>.img_item>div>span{
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 200px;
  left: 15px;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;
}
.top4>.img_item>div>img{
  margin: 0 8px;
  height: 230px;
}
.top4>.img_item>div>img:hover{
  filter: alpha(opacity=30);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.top4>.img_item1>div>img:hover{
  filter: alpha(opacity=30);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.top4>.img_item1{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.top4>.img_item1>div{
  position: relative;
}
.top4>.img_item1>div>span{
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 210px;
  left: 15px;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;
}
.top4>.img_item1>div>img{
  width: 230px;
  height: 230px;
  margin: 8px 8px;
}
</style>