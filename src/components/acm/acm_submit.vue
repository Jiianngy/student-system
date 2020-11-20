<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/duty'}">ACM管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <el-row style="margin-top: 50px; margin-left: 450px;">
        <el-col>题号</el-col>
        <el-col style="margin-top: 15px;">
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="0px" class="demo-dynamic">
            <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
              <div style="float: left;"><el-input v-model="domain.value" style="width: 500px;"></el-input></div>
              <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain(domain)">删除</el-button></div>
            </el-form-item>
            <el-form-item>
              <el-button @click="addDomain">新增</el-button>
              <span style="margin-left: 30px;">共5题</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px; ">
        <el-col :span="2" style="margin-left: 600px;"><el-button type="primary" style="width: 80px;">提交</el-button></el-col>
        <el-col :span="1" style="margin-left: -30px;"><el-button type="primary" style="width: 80px;" @click="gotolink">查看</el-button></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
        },
      };
    },

    methods:{
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      gotolink(){
        this.$router.replace('/submit/show')
      }
    }
  };
</script>

<style>

</style>
