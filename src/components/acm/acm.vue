<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>ACM管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>

      <el-row :gutter="20">
        <el-col :span="10">
          <el-select v-model="value" placeholder="请选择第几学期" style="width: 400px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2.5" style="margin-left: 640px;">
          <el-button type="primary" @click="dialogFormVisible = true">设置第一周开始时间</el-button>
        </el-col>
        <el-col :span="2.5">
            <el-button type="primary" @click="dialogFormVisible2 = true">设定目标数</el-button>
        </el-col>
      </el-row>

      <el-row style="margin-top: 60px;">
        <el-col>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="周" name="first">
              <div>
                <div style="float: left;">
                  <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">{{ all_city }}<i class="el-icon-arrow-down el-icon--right" /></span>
                    <el-dropdown-menu slot="dropdown" align="center">
                      <el-dropdown-item v-for="item in all_city_list" :key="item.value" :command="{value:item.value,label:item.label,flag:1}"> {{ item.label }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div style="float: left; margin-left: 1560px;">
                  <el-button @click="gotolink">图</el-button>
                </div>
                <div>
                  <el-table :data="checkedList" stripe border style="width: 100%">


                    <el-table-column prop="id" label="学号"> </el-table-column>
                    <el-table-column prop="name" label="姓名"> </el-table-column>
                    <el-table-column prop="count" label="完成数"> </el-table-column>
                    <el-table-column prop="isPass" label="是否达标"> </el-table-column>

                  </el-table>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="总计" name="second">
              <div>
                <el-table :data="checkedList2" stripe border style="width: 100%">


                  <el-table-column prop="id" label="学号"> </el-table-column>
                  <el-table-column prop="name" label="姓名"> </el-table-column>
                  <el-table-column prop="count" label="完成数"> </el-table-column>


                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

    </el-card>

    <el-dialog title="设置学期开始时间" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="学期开始时间" :label-width="formLabelWidth" v-model="form.time" autocomplete="off">








          <div class="block" >
              <el-date-picker
                v-model="formtime"
                type="date"
                placeholder="选择日期"
                autocomplete="off">
              </el-date-picker>
            </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="设置目标数" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="目标数" :label-width="formLabelWidth">
          <el-input v-model="form.count" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeName: 'first',
           dialogFormVisible: false,
           dialogFormVisible2: false,
          form: {
            time: '',
            count: '',
          },
          formLabelWidth: '120px',
          formtime:'',
          checkedList:[
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '5',
              isPass: '是',
            },

          ],

          checkedList2:[
            {
              id: '17905602',
              name: '姜悦',
              count: '100',

            },
            {
              id: '17905602',
              name: '姜悦',
              count: '100',

            },
            {
              id: '17905602',
              name: '姜悦',
              count: '100',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '100',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '100',
            },
            {
              id: '17905602',
              name: '姜悦',
              count: '100',
            },

          ],

          options: [
            {
              value: '选项1',
              label: '2019年第1学期'
            },
            {
              value: '选项2',
              label: '2019年第2学期'
            },
            {
              value: '选项3',
              label: '2020年第1学期'
            },
            {
              value: '选项4',
              label: '2020年第2学期'
            },
            {
              value: '选项5',
              label: '2021年第1学期'
            },
            ],

          options2: [
            {
              value: '选项1',
              label: '第1周'
            }, {
              value: '选项2',
              label: '第2周'
            }, {
              value: '选项3',
              label: '第3周'
            }, {
              value: '选项4',
              label: '第4周'
            }, {
              value: '选项5',
              label: '第5周'
            }],

          value: '',

          all_city_list:[
            {
              label:'第1周',
              value: '1'
            },
            {
              label:'第2周',
              value: '2',
            },
          ],
        }
    },

      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },

        handleCommand(command) {
          console.log(command)
          var isCommand = ''
          switch (command.flag) {
            case 1:
              this.all_city = command.label
              isCommand="AreaCode"
              break
            case 2:
              this.all_type_org = command.label
              isCommand="IsActived"
              break
            default:
              return
          }
        },
        closeEditStuDialog(){
          this.editStuDialogVisible = false
        },
        gotolink(){
          this.$router.replace('/acm/chart');
        }





        // handleCommand(command) {
        //     console.log(command)
        //     var isCommand = ''
        //     switch (command.flag) {
        //       case 1:
        //         this.all_city = command.label
        //         isCommand="AreaCode"
        //         break
        //       case 2:
        //         this.all_type_org = command.label
        //         isCommand="IsActived"
        //       break
        //       default:
        //         return
        //     }
        //  //点击之后 发起请求 筛选数据
        //     var data = {
        //       "data": {
        //       "numberPerPage": 10,
        //       "currentPage":this.currentPage,
        //       "filters": [
        //         {
        //         "key": isCommand,
        //         "value": command.value
        //         }
        //       ]
        //       },
        //       "correlationId": "535d12c3-4a75-4e5f-9236-9d8967f0bca8",
        //       "invokingUser": "57a080b5-dd88-41b7-a9ea-7d7850bd396a",
        //       "businessProcessName": "CommunitySearchService"
        //     }
        // //请求函数 我用的是vue-admin-template的vue后台基础模板 请求是封装好的
        //     communitySearch(data).then(res => {
        //       let Data = JSON.parse(JSON.stringify(res.data));
        //       Data.forEach((item, index) => {
        //         if(item.isActived==true){
        //           item.isActived="有效"
        //         }
        //         if(item.isActived==false){
        //           item.isActived="无效"
        //         }
        //       })
        //       this.tableData =Data
        //       this.total = res.pager.totalItems
        //     })
        //   },




      }
    };
</script>

<style>
</style>
