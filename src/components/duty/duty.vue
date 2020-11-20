<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>值日管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="block" style="margin-left: 40px;">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="16">
            <el-button type="primary" >查询</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" @click="gotolink">安排值日</el-button>
          </el-col>
        </el-row>
      </div>

      <div style="margin-top: 40px;">
        <div style="float: left; width: 700px; margin-left: 40px;">
          <el-table :data="checkedList" stripe border style="width: 100%">
          <el-table-column prop="Monday" label="周一"> </el-table-column>
          <el-table-column prop="Tuesday" label="周二"> </el-table-column>
          <el-table-column prop="Wednesday" label="周三"> </el-table-column>
          <el-table-column prop="Thursday" label="周四"> </el-table-column>
          <el-table-column prop="Friday" label="周五"> </el-table-column>

          </el-table>
        </div>
        <div style="float: left; margin-left: 560px; width: 300px; " class="customer-table" @scroll="Scroll">
          <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="count" label="次数"> </el-table-column>
          </el-table>
        </div>
      </div>

    </el-card>

  </div>
</template>

<script>
  export default {
      data() {
        return {
          
          tableData: [
            {
              name: '姜悦',
              count: '25'
            },
            {
              name: '姜悦',
              count: '25'
            },
            {
              name: '姜悦',
              count: '25'
            },
            {
              name: '姜悦',
              count: '25'
            },
            {
              name: '姜悦',
              count: '25'
            },
            {
              name: '姜悦',
              count: '25'
            },
          ],
          value1: '',


        };
      },
      methods:{
        gotolink(){
          this.$router.replace('/duty/arrange')
        }
      }

    };


</script>

<style>

  // 去掉表格单元格边框
  .customer-table th{

    }
  .customer-table td,.customer-table th.is-leaf {

  }
  // 表格最外边框
  .el-table--border, .el-table--group{

  }
  // 头部边框
  .customer-table thead tr th.is-leaf{

  }
  .customer-table thead tr th:nth-last-of-type(2){

  }
  // 表格最外层边框-底部边框
  .el-table--border::after, .el-table--group::after{
    width: 0;
  }
  .customer-table::before{
    width: 0;
  }
  .customer-table .el-table__fixed-right::before,.el-table__fixed::before{
    width: 0;
  }
  // 表格有滚动时表格头边框
  .el-table--border th.gutter:last-of-type {
      border: 1px solid #EBEEF5;
      border-left: none;
  }

</style>
