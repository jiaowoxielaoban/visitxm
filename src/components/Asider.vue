<template>
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-menu-item index="/admin/article">
      <i class="el-icon-menu"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/admin/userManage">
      <i class="el-icon-menu"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Asider",
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
</style>