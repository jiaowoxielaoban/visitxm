<template>
  <el-table
      :data="tableData"
      style="width: 80%">
    <el-table-column
        prop="a_id"
        label="a_id"
        width="180">
    </el-table-column>
    <el-table-column
        prop="title"
        label="标题"
        width="180">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期">
    </el-table-column>
    <el-table-column label="操作" width="270px">
      <template slot-scope="scope">
        <el-button type="success" >编辑</el-button>
        <el-button type="danger" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Article",
  data(){
    return{
      tableData: [{
        a_id: '1',
        title: '王小虎',
        date: '2016-05-02',
      }],
      text: ''
    }
  },
  methods:{
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>