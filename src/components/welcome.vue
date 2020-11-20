<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header >
      <div >
        <img src="./img/logo.jpg" alt="" />
        <span>实验班管理系统</span>
      </div>
      <div style="margin-left: 1520px;">
        <i class="el-icon-bell" style="font-size: 25px; color: darkgrey;" @click="dialogFormVisible = true" ></i>
      </div>
      <div>
        <el-dropdown>
          <span><el-avatar icon="el-icon-user-solid"></el-avatar></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="gotolink">修改</span></el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container >
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '50px' : '200px'" style="{background-color: #000000;}">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          router="true"
          default-active="/home"
          background-color="#000000"
          text-color="white"
          active-text-color="#2683c6">
          <!-- default-active 当前激活的菜单 -->
          <el-menu-item index="/home">
            <i class="el-icon-s-data"></i>
            <span slot="title"> 首页</span>
          </el-menu-item>
          <el-menu-item index="/student">
            <i class="el-icon-user"></i>
            <span slot="title"> 学生管理</span>
          </el-menu-item>
          <el-menu-item index="/acm">
            <i class="el-icon-edit"></i>
            <span slot="title"> ACM管理</span>
          </el-menu-item>
          <el-menu-item index="/duty">
            <i class="el-icon-toilet-paper"></i>
            <span slot="title"> 值日管理</span>
          </el-menu-item>
        </el-menu>


        <!-- <el-menu :default-active="this.$route.path" router mode="vertical"
          background-color="#000000"
          text-color="white"
          active-text-color="#2683c6">
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{item.class}}
                {{ item.navItem }}
            </el-menu-item>
        </el-menu> -->

      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <el-dialog title="消息通知" :visible.sync="dialogFormVisible">
          <div>
            <div><el-button type="primary" style="margin-left: 750px;">批量删除</el-button></div>
            <div>
              <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column prop="contant" label="内容"></el-table-column>
                <el-table-column prop="time" label="时间"></el-table-column>
                <el-table-column label="操作" width="145px">
                  <i class="el-icon-delete" />
                </el-table-column>
              </el-table>
            </div>
          </div>

        </el-dialog>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData:[
        {
          contant:'123456',
          time:'2020'
        }
      ],
      dialogFormVisible: false,
      form: {
        count: '',
      },
      formLabelWidth: '120px',
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: '',
      // navList:[
      //             {name:'/home',navItem:'主页', class:'el-icon-s-data'},
      //             {name:'/student',navItem:'学生管理', class:'el-icon-s-data'},
      //             {name:'/acm',navItem:'ACM管理', class:'el-icon-s-data'},
      //             {name:'/duty',navItem:'值日管理', class:'el-icon-s-data'},
      //         ],
    }
  },
  created() {},
  methods: {


    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    gotolink(){
      this.$router.replace('/information')
    }
  },
  handleSelect(key, keyPath) {
     this.$router.push({
          path: key,
          params: {data: 'query' }
        })
  },
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

.el-aside {
  background-color: #000000;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #2683c6;
  font-size: 10px;
  line-height: 24px;
  color: black;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
img {
  width: 50px;
  height: 50px;
  padding-left: 10px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
