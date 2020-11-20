<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/student'}">学生管理</el-breadcrumb-item>
      <el-breadcrumb-item>小组情况</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="group"
          label="组号"
          width="480">
        </el-table-column>
        <el-table-column
          prop="count"
          label="人数"
          width="480">
        </el-table-column>
        <el-table-column
          prop="member"
          label="成员">
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
            group: '1',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '2',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '3',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '4',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '5',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '6',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '7',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
          {
            group: '8',
            count: '8',
            member: '姜悦, 姜大悦, 姜中悦, 姜小悦, 姜胖悦, 姜瘦悦, 姜高悦, 姜矮悦'
          },
        ]
      }
    }
  }
</script>

<style>
</style>
