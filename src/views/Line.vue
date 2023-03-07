<template>
<!--  <h1>线路页面</h1>-->
  <DefaultHeader></DefaultHeader>
  <SelfTemplate2 :title="title" :list="list" :content="content"></SelfTemplate2>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";
export default {
  name: "Line",
  data(){
    return{
      title: '线路',
      list: ['诗意厦门', '夜游厦门', '鼓浪屿世遗', '自驾游', '周边游', '其他'],
      content:[
        {txt: '环鼓夜游', img: '/img/3e4b5612-31c9-4e92-a03e-1f93c64f72f2.jpg', label: '诗意厦门'},
        {txt: '美丽渔村蝶变之旅', img: '/img/0ab397ef-3414-4a79-8b42-51bc75387324.jpg', label: '诗意厦门'},
        {txt: '夜游鹭江梦幻之旅', img: '/img/eda80686-5eaf-49fc-a26f-e2f4ee02b771.jpg', label: '诗意厦门'},
        {txt: '世遗探秘之旅', img: '/img/44ec3cb0-652a-4c0e-a76c-f64e9ba66bf7.jpg', label: '夜游厦门'},
        {txt: '环鼓夜游', img: '/img/3e4b5612-31c9-4e92-a03e-1f93c64f72f2.jpg', label: '夜游厦门'},
        {txt: '美丽渔村蝶变之旅', img: '/img/0ab397ef-3414-4a79-8b42-51bc75387324.jpg', label: '鼓浪屿世遗'},
        {txt: '夜游鹭江梦幻之旅', img: '/img/eda80686-5eaf-49fc-a26f-e2f4ee02b771.jpg', label: '自驾游'},
        {txt: '世遗探秘之旅', img: '/img/44ec3cb0-652a-4c0e-a76c-f64e9ba66bf7.jpg', label: '自驾游'},
        {txt: '环鼓夜游', img: '/img/3e4b5612-31c9-4e92-a03e-1f93c64f72f2.jpg', label: '自驾游'},
        {txt: '美丽渔村蝶变之旅', img: '/img/0ab397ef-3414-4a79-8b42-51bc75387324.jpg', label: '周边游'},
        {txt: '夜游鹭江梦幻之旅', img: '/img/eda80686-5eaf-49fc-a26f-e2f4ee02b771.jpg', label: '其他'},
        {txt: '世遗探秘之旅', img: '/img/44ec3cb0-652a-4c0e-a76c-f64e9ba66bf7.jpg', label: '其他'},
      ],
    }
  },
  components:{DefaultHeader, SelfTemplate2}
}
</script>

<style scoped>

</style>