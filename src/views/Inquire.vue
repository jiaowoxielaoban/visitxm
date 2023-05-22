<template>
<!--  <h1>旅游咨询</h1>-->
  <DefaultHeader></DefaultHeader>
  <SelfTemplate1 :title="title"></SelfTemplate1>
  <HomeFooter></HomeFooter>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import SelfTemplate1 from "@/components/SelfTemplate1.vue";
import HomeFooter from "../components/HomeFooter.vue";
export default {
  name: "Inquire",
  data(){
    return{
      title: '旅游资讯'
    }
  },
  components:{SelfTemplate1, DefaultHeader, HomeFooter},
}
</script>

<style scoped>

</style>