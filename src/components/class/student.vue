<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入学生姓名" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- <el-col :span="2.5">
          <el-button type="primary" @click="addStudent">添加学生</el-button>
        </el-col> -->
        <el-col :span="2.5" style="margin-left: 375px;">
          <el-button type="primary" @click="gotolink">小组情况</el-button>
        </el-col>
        <el-col :span="2.5">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/">
            <el-tooltip
              effect="light"
              content="只能上传excel的文件"
              placement="top"
              :enterable="false"
            >
              <el-button type="primary">批量导入</el-button>
            </el-tooltip>
          </el-upload>
        </el-col>
        <el-col :span="2.5">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/">
            <el-button type="primary">模板下载</el-button>
          </el-upload>
        </el-col>
        <el-col :span="2.5">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/">
            <el-button type="primary">导出名单</el-button>
          </el-upload>

        </el-col>
        <el-col :span="2.5">
          <el-button type="primary">批量删除</el-button>
        </el-col>
      </el-row>

      <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-table :data="checkedList" stripe border style="width: 100%">
      <el-checkbox-group v-model="check" @change="handleCheckedCitiesChange">
          <el-row>
            <el-col :span="12" v-for="item in checkedList" :key="item.id" style="padding:30px">
              <el-checkbox :label="id">

                <el-table-column> {{item.name}} {{item.stuId}} {{item.classId}} {{item.phone}}</el-table-column>
              </el-checkbox>
            </el-col>
          </el-row>
        </el-checkbox-group>
        </el-table> -->


<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <!-- <el-table :data="checkedList" stripe border style="width: 100%">
        <el-table-column label="全选" width="50" :render-header="renderHeader" v-model="checkAll">
           <el-checkbox></el-checkbox>
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="stuId" label="学号"> </el-table-column>
        <el-table-column prop="classId" label="班级"> </el-table-column>
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
        <el-table-column label="操作" width="145px">
          <i class="el-icon-more rotate " />
        </el-table-column>
      </el-table> -->
      <div style="margin-top: 58px;">
        <el-form>
          <el-row>
            <el-col :span="4" style="margin-left: 65px;"><el-form-item><el-input placeholder="请输入姓名" v-model="input_1" clearable></el-input></el-form-item></el-col>
            <el-col :span="4" style="margin-left: 80px;"><el-form-item><el-input placeholder="请输入学号" v-model="input_1" clearable></el-input></el-form-item></el-col>
            <el-col :span="4" style="margin-left: 90px;"><el-form-item><el-input placeholder="请输入班级" v-model="input_1" clearable></el-input></el-form-item></el-col>
            <el-col :span="4" style="margin-left: 80px;"><el-form-item><el-input placeholder="请输入联系方式" v-model="input_1" clearable></el-input></el-form-item></el-col>
            <el-col :span="2" style="margin-left: 73px;"><el-button type="primary">添加</el-button></el-col>
          </el-row>
        </el-form>
      </div>

      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="stuId" label="学号"> </el-table-column>
          <el-table-column prop="classId" label="班级"> </el-table-column>
          <el-table-column prop="phone" label="联系方式"> </el-table-column>
          <el-table-column label="操作" width="145px">
            <i class="el-icon-more rotate " @click=""></i>
          </el-table-column>

        </el-table>


        <!-- <el-table-column label="操作" width="145px">
          <template slot-scope="">
            <el-tooltip
              effect="dark"
              content="用户修改"
              placement="top"
              :enterable="false"
            >
              <el-button type="primary" icon="el-icon-edit" @click="editStudent"></el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="用户删除"
              placement="top"
              :enterable="false"
            >
              <el-button type="danger" icon="el-icon-delete" @click="deleteStudent"></el-button>
            </el-tooltip>
          </template>
        </el-table-column> -->



      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[5, 10, 20]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
        style="margin-top: 30px;"
      >
      </el-pagination>
    </el-card>

<!-- 添加用户 -->
    <el-dialog
      title="添加学生"
      :visible.sync="addStuDialogVisible"
      width="40%"
      @close="closeAddStuDialog"
    >
      <el-form ref="addStuFormRef" label-width="80px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>

<!-- 学生信息修改 -->
  <el-dialog
      title="修改学生信息"
      :visible.sync="editStuDialogVisible"
      width="40%"
      @close="closeEditStuDialog"
    >
      <el-form ref="addStuFormRef" label-width="80px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addStuDialogVisible: false,
      editStuDialogVisible:false,
      queryInfo:{
        query:'',
        pageNum:1,
        pageSize:5
      },

      input_1: '',


      input: '',
      radio: '1',
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true,
      // isIndeterminate: false,
      // checkAll: false,
      // check: [],
      // checkedGameId: [],
      checkedList: [
        {
          name: '姜悦',
          stuId: '17905602',
          classId: '17092712',
          phone: '17816180609',
        },
        {
          name: '姜悦2',
          stuId: '17905602',
          classId: '17092712',
        },
        {
          name: '姜悦3',
          stuId: '17905602',
          classId: '17092712',
        },
        {
          name: '姜悦4',
          stuId: '17905602',
          classId: '17092712',
        },
      ],


      tableData: [
        {
          name: '姜悦',
          stuId: '17905602',
          classId: '17092712',
          phone: '17816180609',
        },
        {
          name: '姜悦2',
          stuId: '17905602',
          classId: '17092712',
        },
        {
          name: '姜悦3',
          stuId: '17905602',
          classId: '17092712',
        },
        {
          name: '姜悦4',
          stuId: '17905602',
          classId: '17092712',
        },

      ],
              multipleSelection: [],

    }
  },
  methods: {
    addStudent() {
      this.addStuDialogVisible = true
    },
    editStudent(){
      this.editStuDialogVisible = true
    },
    deleteStudent(){
      this.$confirm('是否删除该学生?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    closeAddStuDialog() {
      this.addStuDialogVisible = false
    },
    closeEditStuDialog(){
      this.editStuDialogVisible = false
    },
    handleSizeChange(newSize){},
    handleCurrentChange(newPage){},



    // 复选框
    // tableRowClassName({row, rowIndex}) {
    //   if (rowIndex === 1) {
    //     return 'warning-row';
    //   } else if (rowIndex === 3) {
    //     return 'success-row';
    //   }
    //   return '';
    // },
    // handleCheckAllChange(val) {
    //   this.checkedCities = val ? cityOptions : [];
    //   this.isIndeterminate = false;
    // },
    // handleCheckedCitiesChange(value) {
    //   let checkedCount = value.length;
    //   this.checkAll = checkedCount === this.cities.length;
    //   this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    // },
    // renderHeader(h, params) {
    //   let a = [h('el-checkbox', {
    //     props: {
    //     size: "mini",
    //     type: "primary"
    //     },
    //     on: {
    //       click: () => {
    //         this.renderAddRow();
    //       }
    //     }
    //   }, '')];
    //   return h('div', a);
    // },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    gotolink(){
      this.$router.replace('/student/group')
    }
  },

}
</script>

<style>
  .el-icon-more:before {
  content: "\E794";
  }

  .rotate {
  cursor: pointer;
  margin-left: 5px;
  transform: rotate(90deg);
  }

  .rotate:focus {
  width: 20px;
  height: 20px;
  border-radius: 4em;
  background-color: rgba(130, 132, 138, 0.2);
  }

</style>
