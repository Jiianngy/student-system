<template>
  <div class="edit-password">
    <el-steps finish-status="success" align-center :active="activeIndex - 0">
      <el-step
        title="填写手机验证"
        description="注意:初次修改的填写的手机号将会在以后找回密码使用"
      ></el-step>
      <el-step title="设置新密码"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-form ref="editFormRef" :model="editForm" :rules="editFormRules" label-position="top" class="edit-form">
      <el-tabs tab-position="left" v-model="activeIndex" :before-leave = "beforeTabLeave">

        <el-tab-pane label="填写手机验证" name="0">
          <el-form-item label="请填写学号" prop="number">
            <el-input placeholder="请输入学号" v-model="editForm.number"></el-input>
          </el-form-item>
          <el-form-item label="请填写手机号" prop="phone">
            <div>
              <el-input placeholder="请输手机号"  v-model="editForm.phone">
                <el-button slot="append" @click="getChekcode" :disabled="getChekcodeFlag">{{ buttonMessage }}</el-button>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="验证码" prop="checkCode">
            <el-input placeholder="请输入验证码" v-model="editForm.checkCode"></el-input>
          </el-form-item>

        </el-tab-pane>

        <el-tab-pane label="设置新密码" name="1">
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请填写密码" v-model="editForm.password" type="password" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input placeholder="请确认密码" v-model="editForm.checkPassword" type="password" autocomplete="off" show-password></el-input>
          </el-form-item>
          <div class="divBtn">
            <el-button class="btn" type="primary" @click="submit">确认</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane label="完成" name="2" disabled>
          <div class="tip-class">
            <span>密码修改完成,3秒后自动跳转到登录界面</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    //验证密码
    var authPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.editForm.password) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback();
      }
    }
    //校验手机哈
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        return callback()
      }
      return callback(new Error("请输入合法的手机号"))
    }
    return {
      editForm:{
        number:'',
        phone:'',
        checkCode:'',
        password:'',
        checkPassword:''
      },
      activeIndex: '0',
      buttonMessage: '获取验证码',
      getChekcodeFlag: false,
      waitTime: 60,
      editFormRules:{
        number:[
          { required: true, message: '学号不能为空', trigger: "blur" },
        ],
        phone:[
          { required: true, message: '手机号不能为空',trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        checkCode:[
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        password:[
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        checkPassword:[
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: authPassword, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    time() {
      // if(this.wait == 60){
      // }
      if (this.waitTime == 0) {
        this.getChekcodeFlag = false
        this.buttonMessage = '获取验证码'
        this.waitTime = 60
      } else {
        this.getChekcodeFlag = true
        this.buttonMessage = '重新发送(' + this.waitTime + ')'
        this.waitTime--
        setTimeout(() => {
          this.time()
        }, 1000)
      }
    },
    getChekcode() {
      this.time()
    },
    beforeTabLeave(activeName, oldActiveName){
      if(oldActiveName === '0' && activeName === '2'){
          this.$message.error('请先填写密码')
          return false
      }
      if(oldActiveName === '0' && activeName === '1'){
        if(this.editForm.number === ''){
          this.$message.error('请填写学号')
          return false
        }
         const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if(this.editForm.phone === '' || !regMobile.test(this.editForm.phone)){
          this.$message.error('请填写合法的手机号')
          return false
        }
        if(this.editForm.checkCode === ''){
          this.$message.error('请填写验证码')
          return false
        }
      }

      // if(oldActiveName === '1' && activeName === '2'){
      //    //this.$message.error('请先填写密码')
      //   return false
      // }
    },

    submit(){
      this.$refs['editFormRef'].validate(valid => {
        if (!valid){
          return this.$message.error('请填写必要的表单项！')
        }else{
          //发送请求

        this.activeIndex = '2'
         setTimeout(()=>{
           this.$router.push('/login')
         },3000)
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.el-input {
  width: 85%;
}
.edit-password {
  margin-top: 40px;
}
.edit-form {
  margin: 80px;
}
.divBtn {
  position: relative;
  .btn {
    position: absolute;
    display: block;
    margin: 5% 0 0 40%;
  }
}
.el-icon-circle-check:before {
  content: '\e720';
  font-size: 100px;
  background-color: gainsboro;
  margin: 285%;
}
.tip-class{
  // width: 1000px;
  color: green;
  font-size:30px;
  text-align: center;
}
</style>>
