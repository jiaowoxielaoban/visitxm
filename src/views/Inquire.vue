<template>
<!--  <h1>旅游咨询</h1>-->
  <DefaultHeader></DefaultHeader>
  <SelfTemplate1></SelfTemplate1>
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

    }
  },
  components:{SelfTemplate1, DefaultHeader, HomeFooter},
  props: ['title']
}
</script>

<style scoped>

</style>