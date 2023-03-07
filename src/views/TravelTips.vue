<template>
  <DefaultHeader/>
  <div class="container">
    <div class="title">旅游贴士</div>
    <img :src="img" alt="">
    <div class="content_1" v-for="item in list">
      <div class="tips_title">{{ item.tips_title }}</div>
      <div class="content_text" v-html="item.text"></div>
    </div>
    <div class="tips_title">市内交通</div>
    <div class="content_bus">
      <div class="subBus" v-for="item in bus_list">
        <img :src='item.img'>
        <h3>{{ item.title }}</h3>
        <div class="html_text" v-html='item.text'></div>
      </div>
    </div>

    <div class="tips_title">旅游大巴\中巴\小汽车租赁</div>

    <div class="bus_rend">
      <table>
        <tr>
          <td>厦门航锦运输有限公司</td>
          <td>厦门峰度汽车服务有限公司</td>
        </tr>
        <tr>
          <td>厦门新雷汽车服务有限公司</td>
          <td>厦门市鑫陇汽车租赁有限公司</td>
        </tr>
        <tr>
          <td>厦门君来商贸有限公司</td>
          <td>厦门东汇鑫汽车服务有限公司</td>
        </tr>
      </table>
    </div>

    <div class="tips_title">厦门市旅游客运企业名单(部分)</div>
    <el-table
        :data="enterprises_list"
        stripe
        border
        style="width: 100%">
      <el-table-column
          prop="name"
          label="企业名称">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话">
      </el-table-column>
    </el-table>

    <div v-for="item in table_list">
      <div class="tips_title">{{ item.title }}</div>
      <el-table
          :data="item.table_data"
          stripe
          border
          style="width: 100%">
        <el-table-column
            prop="name"
            label="服务端名称">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
    </div>

    <div class="tips_title">旅游常用服务电话</div>

  </div>
  <HomeFooter/>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import SelfTemplate2 from "@/components/SelfTemplate2.vue";

export default {
  name: "TravelTips",
  data(){
    return{
      list:[
        {tips_title: '航空', text: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp厦门高崎国际机场已成为中国东南沿海重要的区域性航空枢纽，分T3、T4候机楼双楼运行，已形成覆盖中国大陆各主要城市及港、澳、台（台北、高雄、台中）地区，连接东南亚（马尼拉、新加坡、吉隆坡、胡志明、曼谷、暹粒、雅加达、巴厘岛、吴哥）、东北亚（首尔、济州、东京、大阪、宿务），通达欧（阿姆斯特丹）、美（温哥华、西雅图）、澳（悉尼、墨尔本）三大洲的航线网络。目前，厦门机场已通航109个城市，其中国内83个，国际20个，地区6个；境内外航线182条，其中境内航线145条，国际及地区航线37条；运营的航空公司有40家，其中，境内航空公司25家，境外航空公司15家。<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp机场交通：厦门机场交通便利，除常见的公交车及的士外，还开通了多条空港快线，有机场往返轮渡、北站、五通、东渡、梧村汽车站、曾厝垵、漳州、海沧等的专线。候车地址：T3候机楼：空港快线候车室（国内到达层7号门西侧80米）；T4候机楼：空港快线候车处（国内到达层5号门对面）。具体可咨询：0592-5708275'},
        {tips_title: '铁路', text: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp厦门是中国东南沿海的铁路枢纽城市，分厦门站及厦门北站双站运行。旅客可通过“杭深线”、“龙厦线”“向莆线”等从厦门乘坐动车或高铁往返深圳、上海、杭州、武汉、北京等主要国内城市及福建省内各城市。旅客可在www.12306.cn买到火车票。'},
        {tips_title: '环岛观光巴士', text: '厦门旅游观光巴士是了解厦门最快的主要途径，而且比较舒适。起点是湖滨南路金源大厦楼下，一个半小时左右环绕厦门岛，途经整条风景秀丽的环岛路，会经过许多厦门的知名景点，如厦大、胡里山炮台、环岛路、曾厝垵、国际会展中心、观音山度假区、五缘湾等。'},
      ],
      bus_list:[
        {title: '公交', img: '/img/trans_bus.png', text: '厦门的公交网络发达，站点覆盖情况合理，票价低。全市绝大多数的景区点都有公交线路到达。除了普通公交外，厦门还有6条BRT线路，能方便快速到达目的地。公交具体线路可通过“掌上公交”、“车来了”等手机APP或电话968828查询。'},
        {title: '的士', img: '/img/trans_taxi.png', text: '厦门面积不大，的士数量却很多，打个的士到各个景区游览，不失为一种经济、快速、便捷的交通方式。普通的士预约电话：0592-5320000；电召的士电话：968890。另外神州专车、滴滴打车等新兴打车方式在厦门也很受欢迎。'},
        {title: '自行车', img: '/img/trans_bicycle.png', text: '厦门是一个适合慢行的城市，很多道路都有自行车专用道。除市政公共自行车外，ofo单车、摩拜单车、hello单车、小白单车等共享单车也为游客骑行厦门提供了多种选择。'},
      ],
      title: '旅游贴士',
      img: '/img/tips_main.jpg',
      bus_rend:['厦门航锦运输有限公司', '厦门峰度汽车服务有限公司', '厦门新雷汽车服务有限公司', '厦门市鑫陇汽车租赁有限公司', '厦门君来商贸有限公司', '厦门东汇鑫汽车服务有限公司'],
      enterprises_list:[
        {name: '国旅旅运服务有限公司', address: '黄厝塔头社187号', phone: '0592-5962669'},
        {name: '兴旅汽车运输有限公司', address: '东浦路98号之二十', phone: '0592-5192244'},
        {name: '光大旅游运输有限公司', address: '环岛南路2687－13', phone: '0592-5890821'},
        {name: '全发展旅游运输有限公司', address: '万寿路13号之6、7、8、9', phone: '0592-5143101'},
        {name: '世纪假日旅游运输有限公司', address: '斗西路北段140号2楼202室', phone: '0592-2201244'},
        {name: '特运交通国际旅行社有限公司', address: '湖滨南路57号金源大厦4楼', phone: '0592-5962669'},
        {name: '国旅旅运服务有限公司', address: '黄厝塔头社187号', phone: '0592-5962669'},
        {name: '国旅旅运服务有限公司', address: '黄厝塔头社187号', phone: '0592-5962669'},
        {name: '国旅旅运服务有限公司', address: '黄厝塔头社187号', phone: '0592-5962669'},
        {name: '国旅旅运服务有限公司', address: '黄厝塔头社187号', phone: '0592-5962669'},
      ],
      table_list:[{title: '厦门旅游集散服务中心', table_data:[
            {name: '观音山总部服务点', address: '环岛东路观音山梦幻海岸10号'},
            {name: '厦大西村服务点', address: '思明区演武路厦门大学西校门对面'},
            {name: '邮轮中心服务点', address: '湖里区东渡邮轮码头2楼9号门旁'},
            {name: '和平码头服务点', address: '思明区鹭江道3号和平码头一楼117号单元'},
            {name: '塔头服务点', address: '思明区环岛路塔头村口'},
            {name: '胡里山服务点', address: '思明区环岛路胡里山炮台景区大门门口'},]
        },{
        title: '旅游咨询服务中心', table_data: [
            {name: '机场T3候机楼旅游咨询服务中心', address: 'T3候机楼国内到达厅出站口'},
            {name: '机场T4候机楼旅游咨询服务中心', address: 'T4候机楼到达厅出站口'},
            {name: '同安旅游咨询服务中心', address: '同安区梵天寺对面'},
        ]
      }]

    }
  },
  components:{DefaultHeader, HomeFooter, SelfTemplate2}
}
</script>

<style scoped>
.container{
  width: 1230px;
  margin-left: 18%;
  padding-bottom: 60px;
}
.container .title{
  width: 100%;
  padding: 20px 0 20px 20px;
  color: white;
  font-weight: 600;
  box-sizing: border-box;
  background: rgb(0,98,165);
}
.tips_title{
  margin-top: 30px;
  padding-left: 70px;
  height: 36px;
  font-size: 24px;
  color: #3197dc;
  line-height: 24px;
  font-weight: 700;
  background: url(/img/tit.png) 20px 1px no-repeat;
}
.content_text{
  font-size: 15px;
  color: rgb(125, 125, 125);
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
}
.content_bus{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.content_bus .subBus{
  width: 380px;
  height: 380px;
  border: 1px solid rgb(210, 203, 203);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content_bus .subBus .html_text{
  color: rgb(125, 125, 125);
  font-size: 15px;
  width: 300px;
  margin-top: 20px;
}
.bus_rend{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*justify-content: center;*/
}
.bus_rend table td{
  width: 400px;
  color: rgb(124, 125, 125);
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
  /*background: #1d7aae;*/
  border: 1px solid rgb(195,221,224);
}
</style>