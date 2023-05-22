<template>

  <div class="container">
    <div class="title">{{title}}</div>

    <div v-if="list!=null" class="ad-title" >
      <div :class="{active:currentIndex==index}" v-for="(item,index) in list" @click="radioChoose(index)">{{item}}</div>
    </div>

    <div class="content"
         v-for="(item,index) in tmp_content"
         @click="showDetail(item)"
         v-show="(label==null || item.label == label) && (((currentPage-1)*pageSize < index+1) && (index+1 <= currentPage*pageSize)) ">
      <img :src="imageUrl+item.filename">
      <div v-if="item.date==null" class="txt">{{ item.title }}</div>
      <div v-else class="txt">
        <div>{{item.title}}</div>
        <div class="liveDate">{{item.date}}</div>
      </div>
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
import Page from "./Page.vue";
export default {
  name: "SelfTemplate2",
  data(){
    return{
      currentPage: 1, //初始页
      pageSize: 4, //    每页的数据
      total: 0,  //总数
      label: null,
      currentIndex: -1,
      nextDisable: false,
      preDisable: false,
      imageUrl: 'http://localhost:3000/images/',
      tmp_content: this.content     // 临时变量：设置当前景区内容列表
    }
  },
  /*
  title: 当前标题
  list: 景区标签
  content: 景区内容列表
   */
  props:['title', 'list', 'content'],    // 接受父级组件传递的参数
  methods:{
    // 选择景区标签
    radioChoose:function (val){
      this.tmp_content = []
      this.label = this.list[val]
      this.currentIndex = val
      this.content.forEach(item=>{
        // console.log(item.label, item.label == this.label)
        if(item.label == this.label){
          this.tmp_content.push(item)
        }
      })
    },
    //查看页面详情
    showDetail:function (item){

      let routeData = this.$router.resolve({
        name: 'news',
        query: {
          title: '景区',
          row: JSON.stringify(item)
        }
      })
      window.open(routeData.href, '_blank')
      console.log(item)

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
    }
  },
  components:{Page},
  watch:{
    content(newVal, oldVal){
      console.log('content change', newVal)
      this.tmp_content = newVal
    },
    // 监听当前内容列表，如果变化，改变分页的页码总数
    tmp_content(newVal, oldVal){
      // console.log('tmp_content change')
      this.total = this.tmp_content.length
    }
  },
  beforeUpdate() {
    if(Math.ceil(this.total/this.pageSize)==this.currentPage){
      this.nextDisable = true
    }
    if(this.currentPage==1){
      this.preDisable = true
    }
  },
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
.ad-title{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.ad-title div{
  padding: 5px 9px;
  margin: 10px 10px;
  color: white;
  background-color: rgb(37,167,255);
  font-size: 15px;
  border-radius: 5px;
}
.ad-title .active{
  padding: 5px 9px;
  margin: 10px 10px;
  color: white;
  background-color: rgb(19, 97, 150);
  font-size: 15px;
  border-radius: 5px;
}
.content{
  width: 100%;
  padding: 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(225,225,225);
  margin-top: 5px;
  display: flex;

}
.content img{
  width: 160px;
  height: 140px;
  object-fit: fill;
}
.content .txt{
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  color: rgb(102,102,102);
  width: 100%;
  /*background-color: aqua;*/
}
.liveDate{
  margin-top: 15px;
  font-size: 15px;
  color: rgb(145, 145, 145);
  font-weight: 100;
}
.content .txt:hover{
  color: black;
}
.content a:hover{
  background-color: rgb(245,245,245);
}
:deep .el-pagination button, .el-pagination span:not([class*=suffix]) {
  line-height: 39px;
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