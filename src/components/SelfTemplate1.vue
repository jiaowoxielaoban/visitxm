<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="content" v-for="(item,index) in list" @click="showNews(item)" v-show="((currentPage-1)*pageSize < index+1) && (index+1 <= currentPage*pageSize)">
      <div class="top">{{item.title}}</div>
      <div class="date">{{ item.date }}</div>
    </div>


    <!--分页实现-->
    <div class="page">
      <div>当前第<b>{{ currentPage }}</b>页</div>
      <div>共<b>{{Math.ceil(total/pageSize)}}</b>页</div>
      <!--    <button>下一页</button>-->
      <el-button :disabled="preDisable" @click="prePage()">上一页</el-button>
      <el-button :disabled="nextDisable" @click="nextPage()">下一页</el-button>
    </div>
  </div>


</template>

<script>
import {getArticleList} from "../request/article";
export default {
  name: "SelfTemplate1",
  data(){
    return{
      list: [],
      currentPage: 1, //初始页
      pageSize: 6, //    每页的数据
      total: 0,  //总数
      nextDisable: false,
      preDisable: false
    }
  },
  props:['title'],
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showNews:function (val){
      console.log(val)
      // return
      let routeData = this.$router.resolve({
        name: 'news',
        query: {
          title: '旅游资讯',
          row: JSON.stringify(val)
        }
      })
      window.open(routeData.href, '_blank')

    },
    nextPage:function (){
      if(Math.ceil(this.total/this.pageSize)!=this.currentPage){
        this.currentPage+=1;
        this.preDisable = false
      }
    },
    prePage:function (){
      if(this.currentPage!=1){
        this.currentPage-=1;
        this.nextDisable = false
      }
    },
  },
  async created() {
    // 获取旅游咨询列表
    this.list =await getArticleList()
    this.total = this.list.length

  },
  beforeUpdate() {
    if(Math.ceil(this.total/this.pageSize)==this.currentPage){
      this.nextDisable = true
    }
    if(this.currentPage==1){
      this.preDisable = true
    }
  }
}
</script>

<style scoped>
.container{
  width: 60%;
  margin-left: 20%;
  min-height: 500px;
}
.title{
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background-color: rgb(0,98,165);
  color: white;
  line-height: 80px;
  padding-left: 15px;
  font-size: 20px;
  font-weight: 800;
}
.content{
  width: 100%;
  padding: 15px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(225,225,225);
  margin-top: 5px;
}
.content .top{
  font-weight: 600;
  color: rgb(102,102,102);
}
.content .date{
  color: rgb(155, 155, 155);
}
.content:hover{
  background-color: rgb(245,245,245);
}
.page{
  width: 100%;
  /*background: #1d7aae;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.page div{
  padding: 0 10px;
}


</style>