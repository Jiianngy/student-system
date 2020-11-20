<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/submit'}">ACM管理</el-breadcrumb-item>
      <el-breadcrumb-item>查看</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%">

        <el-table-column
          prop="time"
          label="提交时间"
          width="480">
        </el-table-column>
        <el-table-column
          prop="count"
          label="题数"
          width="480">
        </el-table-column>
        <el-table-column
          prop="id"
          label="题号"
          width="auto">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tableData:[
          {
            id: '1001',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1002',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1003',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1004',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1005',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1006',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1007',
            count:'1',
            time: '2020/11/19 17:00:00',
          },
          {
            id: '1008、1009',
            count:'2',
            time: '2020/11/19 17:00:00',
          },
        ]
      }
    }
  }
</script>

<style>
</style>
