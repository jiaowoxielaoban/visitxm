<template>
  <div class="contain">
    <el-row>
      <el-col :span="6">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="region">
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="user_login()">登录</el-button>
<!--            <el-button type="primary" @click="check_token()">检测token</el-button>-->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      ruleForm: {
        username: 'xym',
        password: '123',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
      }
    }
  },
  methods:{
    async user_login(){
      console.log(this.ruleForm)
      this.request.post('/login', this.ruleForm).then(res=>{
        console.log(res)
        // return
        if(res.data){
          localStorage.setItem('token', res.data)
          this.$router.push('/admin/index')
          this.$message.success('登录成功')
        }else {
          this.$message.error('账户或密码错误')
        }
      })
    },
    check_token(){
      this.request.post('/verify', {token: localStorage.getItem('token')}).then(res=>{
        console.log(res)
        if(res.data){
          this.$message.success('token合法')
        }
      })
    }
  },
  created() {

  }
}
</script>

<style scoped>
</style>