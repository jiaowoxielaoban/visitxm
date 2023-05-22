<template>

    <el-container style="min-height: 100vh">
      <el-header>
        <div>后台管理系统</div>
      </el-header>
      <el-container>
        <el-aside width="800px">
          <Asider />
        </el-aside>

        <el-main>
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>

</template>

<script>
import Asider from "../../components/Asider.vue";
export default {
  name: "Home",
  data(){
    return{

    }
  },
  components:{Asider},
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.contain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-header {
  color: #333;
  line-height: 60px;
  /*display: flex;*/
  /*flex-direction: row;*/
  /*justify-content: center;*/
  background-color: #c1d3f3;
  color: white;
}

.el-aside {
  color: #333;
  width: 150px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>