<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header >
      <div >
        <img src="./img/logo.jpg" alt="" />
        <span>实验班管理系统</span>
      </div>
      <div>
        <el-avatar icon="el-icon-user-solid" ></el-avatar>
      </div>
    </el-header>
    <el-main>
      <el-card style="height: 800px;">
        <el-row>
          <el-col style="margin-left: 1780px;"><el-button type="primary" @click="dialogFormVisible2 = true">+</el-button></el-col>
        </el-row>

      </el-card>
      <el-dialog title="新建班级" :visible.sync="dialogFormVisible2">
        <el-form :model="form">
          <el-form-item label="班级名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible2: false,
      form: {
        name: '',
      },
      // formLabelWidth: '100px',
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
      },
    }
  },
  methods:{
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },
  }
}
</script>

<style lang="less" scoped>
  .el-table tbody tr:hover>td {
      background-color:#ffffff!important
  }

  .sidebar-expand{
      width: 180px;
  }
.main-sidebar {
      background-color: #000c17;
      position: fixed;
      top: 50px;
      left: 0;
      bottom: 0;
      height: calc(100vh - 50px);
      z-index: 200;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: auto;
  }
.home-container {
  height: 100%;
}
.el-header {
  box-shadow: var(--border-subtle-color,rgba(0, 0, 0, .08)) 0 1px 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: black;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 30px;
      margin-left: 15px;
    }
  }
}

img {
  width: 50px;
  height: 50px;
  padding-left: 10px;
}
</style>
