<template>
<!--  <h1>发现金门</h1>-->
  <DefaultHeader/>
  <SelfTemplate2 :title="title" :list="list" :content="content" />
  <HomeFooter/>

</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "Shop",
  data(){
    return{
    }
  },
  beforeCreate() {
    console.log("in more")
    window.location.href = 'http://www.visitxm.com/kinmen/'
  }
}
</script>

<style scoped>

</style>