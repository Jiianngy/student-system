<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/duty'}">值日管理</el-breadcrumb-item>
      <el-breadcrumb-item>安排值日</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 60px;">
          <el-col>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="按个人" name="first">
                <div>
                  <div style="height: 400px;">
                    <el-row>
                      <el-col :span="6">
                        <div style="float: left;">
                          <div style="float: left;">周一</div>
                          <div style="float: left; ">
                            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="20px" class="demo-dynamic">
                              <el-form-item
                                v-for="(domain, index) in dynamicValidateForm.domains"
                                :key="domain.key"
                                :prop="'domains.' + index + '.value'"
                                >
                                <div style="float: left;"><el-input v-model="domain.value"></el-input></div>
                                <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain(domain)">删除</el-button></div>
                              </el-form-item>
                              <el-form-item>
                                <el-button @click="addDomain">新增</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div style="float: left;">
                          <div style="float: left;">周二</div>
                          <div style="float: left; ">
                            <el-form :model="dynamicValidateForm2" ref="dynamicValidateForm2" label-width="20px" class="demo-dynamic">
                              <el-form-item
                                v-for="(domain, index2) in dynamicValidateForm2.domains"
                                :key="domain.key"
                                :prop="'domains.' + index2 + '.value'"
                                >
                                <div style="float: left;"><el-input v-model="domain.value"></el-input></div>
                                <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain2(domain)">删除</el-button></div>
                              </el-form-item>
                              <el-form-item>
                                <el-button @click="addDomain2">新增</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div style="float: left;">
                          <div style="float: left;" >周三</div>
                          <div style="float: left; ">
                            <el-form :model="dynamicValidateForm3" ref="dynamicValidateForm3" label-width="20px" class="demo-dynamic">
                              <el-form-item
                                v-for="(domain, index3) in dynamicValidateForm3.domains"
                                :key="domain.key"
                                :prop="'domains.' + index3 + '.value'"
                                >
                                <div style="float: left;"><el-input v-model="domain.value"></el-input></div>
                                <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain3(domain)">删除</el-button></div>
                              </el-form-item>
                              <el-form-item>
                                <el-button @click="addDomain3">新增</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="5">
                        <div style="float: left;">
                          <div style="float: left;">周四</div>
                          <div style="float: left; ">
                            <el-form :model="dynamicValidateForm4" ref="dynamicValidateForm4" label-width="20px" class="demo-dynamic">
                              <el-form-item
                                v-for="(domain, index4) in dynamicValidateForm4.domains"
                                :key="domain.key"
                                :prop="'domains.' + index4 + '.value'"
                                >
                                <div style="float: left;"><el-input v-model="domain.value"></el-input></div>
                                <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain4(domain)">删除</el-button></div>
                              </el-form-item>
                              <el-form-item>
                                <el-button @click="addDomain4">新增</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                      <el-col>
                        <div>
                          <div style="float: left;">周五</div>
                          <div style="float: left; ">
                            <el-form :model="dynamicValidateForm5" ref="dynamicValidateForm5" label-width="20px" class="demo-dynamic">
                              <el-form-item
                                v-for="(domain, index5) in dynamicValidateForm5.domains"
                                :key="domain.key"
                                :prop="'domains.' + index5 + '.value'"
                                >
                                <div style="float: left;"><el-input v-model="domain.value"></el-input></div>
                                <div style="float: left; margin-left: 8px;"><el-button @click.prevent="removeDomain5(domain)">删除</el-button></div>
                              </el-form-item>
                              <el-form-item>
                                <el-button @click="addDomain5">新增</el-button>
                              </el-form-item>
                            </el-form>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div>
                    <el-row style="margin-top: 20px; ">
                      <el-col :span="2" style="margin-left: 600px;"><el-button type="primary">保存</el-button></el-col>
                      <el-col :span="1"><el-button type="primary" @click="gotolink">提交</el-button></el-col>
                    </el-row>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="按小组" name="second">
                <div>
                  <div style="margin-top: 20px; margin-left: 5px;">
                    <div>
                      <el-row>
                        <el-col :span="1">周一</el-col>
                        <el-col :span="6">
                          <el-form>
                            <el-form-item>
                              <el-select v-model="group1" placeholder="请选择组">
                                <el-option label="第一组" value="one"></el-option>
                                <el-option label="第二组" value="two"></el-option>
                                <el-option label="第三组" value="three"></el-option>
                                <el-option label="第四组" value="four"></el-option>
                                <el-option label="第五组" value="five"></el-option>
                                <el-option label="第六组" value="six"></el-option>
                                <el-option label="第七组" value="seven"></el-option>
                                <el-option label="第八组" value="eight"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <el-col :span="1">周二</el-col>
                        <el-col :span="6">
                          <el-form>
                            <el-form-item>
                              <el-select v-model="group2" placeholder="请选择组">
                                <el-option label="第一组" value="one"></el-option>
                                <el-option label="第二组" value="two"></el-option>
                                <el-option label="第三组" value="three"></el-option>
                                <el-option label="第四组" value="four"></el-option>
                                <el-option label="第五组" value="five"></el-option>
                                <el-option label="第六组" value="six"></el-option>
                                <el-option label="第七组" value="seven"></el-option>
                                <el-option label="第八组" value="eight"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <el-col :span="1">周三</el-col>
                        <el-col :span="6">
                          <el-form>
                            <el-form-item>
                              <el-select v-model="group3" placeholder="请选择组">
                                <el-option label="第一组" value="one"></el-option>
                                <el-option label="第二组" value="two"></el-option>
                                <el-option label="第三组" value="three"></el-option>
                                <el-option label="第四组" value="four"></el-option>
                                <el-option label="第五组" value="five"></el-option>
                                <el-option label="第六组" value="six"></el-option>
                                <el-option label="第七组" value="seven"></el-option>
                                <el-option label="第八组" value="eight"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <el-col :span="1">周四</el-col>
                        <el-col :span="6">
                          <el-form>
                            <el-form-item>
                              <el-select v-model="group4" placeholder="请选择组">
                                <el-option label="第一组" value="one"></el-option>
                                <el-option label="第二组" value="two"></el-option>
                                <el-option label="第三组" value="three"></el-option>
                                <el-option label="第四组" value="four"></el-option>
                                <el-option label="第五组" value="five"></el-option>
                                <el-option label="第六组" value="six"></el-option>
                                <el-option label="第七组" value="seven"></el-option>
                                <el-option label="第八组" value="eight"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <el-col :span="1">周五</el-col>
                        <el-col :span="6">
                          <el-form>
                            <el-form-item>
                              <el-select v-model="group5" placeholder="请选择组">
                                <el-option label="第一组" value="one"></el-option>
                                <el-option label="第二组" value="two"></el-option>
                                <el-option label="第三组" value="three"></el-option>
                                <el-option label="第四组" value="four"></el-option>
                                <el-option label="第五组" value="five"></el-option>
                                <el-option label="第六组" value="six"></el-option>
                                <el-option label="第七组" value="seven"></el-option>
                                <el-option label="第八组" value="eight"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div>
                    <el-row style="margin-top: 20px; ">
                      <el-col :span="2" style="margin-left: 600px;"><el-button type="primary">保存</el-button></el-col>
                      <el-col :span="1"><el-button type="primary" @click="gotolink">提交</el-button></el-col>
                    </el-row>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </div>




    </el-card>

  </div>
</template>

<script>
  export default {
      data() {
        return {

          group1: '',
          group2: '',
          group3: '',
          group4: '',
          group5: '',

          dynamicValidateForm: {
            domains: [{
              value: ''
            }],
          },
          dynamicValidateForm2: {
            domains: [{
              value: ''
            }],
          },
          dynamicValidateForm3: {
            domains: [{
              value: ''
            }],
          },
          dynamicValidateForm4: {
            domains: [{
              value: ''
            }],
          },
          dynamicValidateForm5: {
            domains: [{
              value: ''
            }],
          },

          value1: '',

          activeName: 'first',

        };
      },


      methods: {
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
        removeDomain2(item2) {
          var index2 = this.dynamicValidateForm2.domains.indexOf(item2)
          if (index2 !== -1) {
            this.dynamicValidateForm2.domains.splice(index2, 1)
          }
        },
        addDomain2() {
          this.dynamicValidateForm2.domains.push({
            value: '',
            key: Date.now()
          });
        },
        removeDomain3(item3) {
          var index3 = this.dynamicValidateForm3.domains.indexOf(item3)
          if (index3 !== -1) {
            this.dynamicValidateForm3.domains.splice(index3, 1)
          }
        },
        addDomain3() {
          this.dynamicValidateForm3.domains.push({
            value: '',
            key: Date.now()
          });
        },
        removeDomain4(item4) {
          var index4 = this.dynamicValidateForm4.domains.indexOf(item4)
          if (index4 !== -1) {
            this.dynamicValidateForm4.domains.splice(index4, 1)
          }
        },
        addDomain4() {
          this.dynamicValidateForm4.domains.push({
            value: '',
            key: Date.now()
          });
        },
        removeDomain5(item5) {
          var index5 = this.dynamicValidateForm5.domains.indexOf(item5)
          if (index5 !== -1) {
            this.dynamicValidateForm5.domains.splice(index5, 1)
          }
        },
        addDomain5() {
          this.dynamicValidateForm5.domains.push({
            value: '',
            key: Date.now()
          });
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        gotolink(){
          this.$router.replace('/duty');
        }
      }

    };


</script>

<style>


</style>
