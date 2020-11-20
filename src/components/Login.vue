<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo">
          <span>欢迎登录</span>
        </div>
      </div>
      <el-form
        abel-width="0px"
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="formRules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入学号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
               <el-radio v-model="type" label="1">老师</el-radio>
            </el-col>
            <el-col :span="12">
              <el-radio v-model="type" label="2">学生</el-radio>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary"  :loading="loginLoading" @click="login">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="forgetPassword"
            >忘记密码</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
       type:'',
      loginLoading: false,
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    forgetPassword(){
      this.$router.push('/user/edit')
    },
    login(){
      //校验表单
      if(this.type === ''){
         return this.$message.error('请选择角色')
      }
      this.$refs['loginFormRef'].validate((valid) => {
        if (!valid) {
         return this.$message.error('请填写的正确的数据')
        } else {
          
          this.loginLoading = true
          //发送请求
          this.loginLoading = false
          this.loginForm.type = this.type 
          // console.log(this.loginForm)
          this.$router.push('/home')
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('./img/login.jpg') no-repeat;
  background-size: cover;
  .login-form-wrap {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #eeeeee;
    .login-head {
      display: flex;
      justify-content: center;
      .logo {
        width: 200px;
        height: 57px;
        font-size: 35px;
        background-size: contain;
        text-align: center;
        color: burlywood;
      }
    }
  }
}
.btn {
  width: 100%;
}
.el-row{
  margin-left: 40px;
}
</style>