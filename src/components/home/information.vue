<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>修改个人资料</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div style="float: left;">
        <img src="../img/logo.jpg" width="60px" />
      </div>
      <div style="float: left; width: 600px; margin-left: 50px;">
        <el-row>
          <el-col :span="4"><span>姓名</span></el-col>
          <el-col :span="5"><span>姜悦</span></el-col>
          <el-col :span="8"><span></span></el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="4"><span>学号</span></el-col>
          <el-col :span="5"><span>17905602</span></el-col>
          <el-col :span="8"><span><router-link :to="{path:'/user/edit'}">修改密码</router-link></span></el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="4"><span>班级</span></el-col>
          <el-col :span="5"><span>17092712</span></el-col>
          <el-col :span="8"><span></span></el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="4"><span>所属实验班</span></el-col>
          <el-col :span="5"><span>17级</span></el-col>
          <el-col :span="8"><span><router-link :to="{path:'/home'}">退出</router-link></span></el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="4"><span>班主任</span></el-col>
          <el-col :span="5"><span>张海平</span></el-col>
          <el-col :span="8"><span>17816180609</span></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default{
    methods:{
      gotolink(){
        this.$router.replace('/submit/show')
      }
    }
  }
</script>

<style>
</style>
