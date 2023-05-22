<template>

<!--  <DefaultHeader></DefaultHeader>-->
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content" v-loading="loading">
      <h1>{{ row.title }}</h1>
      <div class="resource">来源：{{ title }}</div>
      <div>{{row.date}}</div>
      <img :src="img">
      <div v-html="row.content"></div>
    </div>
  </div>

  <HomeFooter></HomeFooter>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import HomeHeader from "./HomeHeader.vue";
export default {
  name: "News",
  data(){
    return{
      loading: true,
      title: '',
      sub_title: '',
      source: '',
      img: '/img/W020230216283907639960.jpg',
      text: '',
      id: '',
      date: 'xx-xx-xx',
      row: []
    }
  },
  components:{DefaultHeader, HomeFooter, HomeHeader},
  mounted() {
    this.loading = false
    let my_query = this.$route.query
    this.title = my_query.title
    this.sub_title = my_query.sub_title
    this.source = my_query.sub_title
    this.img = my_query.img
    this.date = my_query.date
  },
  async created() {
    console.log('query: ', this.$route.query)
    this.title = this.$route.query.title
    this.row = JSON.parse(this.$route.query.row)
    // let res =await this.request.post('/inquire/getArticleList/getArticleDetail', {a_id: this.$route.query.a_id})
    // this.text = res.data
    // console.log(res)
  }
}
</script>

<style scoped>
.container{
  width: 60%;
  /*background-color: aqua;*/
  margin-left: 20%;
  margin-top: 30px;
}
.el-breadcrumb{
  padding: 15px 0;
  /*background-color: white;*/
  border-bottom: 1px solid rgb(153,153,153);
}
.content{
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  letter-spacing: 2px;
  line-height: 25px;
}
.content h1{
  margin: 10px 0;
}
.content .resource{
  margin: 10px 0;
}
.content img{
  margin: 10px 0;
}
.content p{
  padding-bottom: 20px;
}
</style>