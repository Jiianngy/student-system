import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/welcome.vue'
import Login from '../components/Login.vue'
import EditPassword from '../components/EditPassword.vue'
import Home from '../components/home/Home.vue'
import ACM from '../components/acm/acm.vue'
import SACM from '../components/acm/acm_submit.vue'
import Student from '../components/class/student.vue'
import Duty from '../components/duty/duty.vue'
import ADuty from '../components/duty/duty_arr.vue'
import Add from '../components/class/add.vue'
import Group from '../components/class/group.vue'
import Select from '../components/select.vue'
import Show from '../components/acm/show.vue'
import Information from '../components/home/information.vue'
import PAcm from '../components/acm/acm_pic.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/user/edit', component: EditPassword },
  { path: '/select', component: Select },

  { path: '/welcome',
    name: 'welcome',
    component: Welcome,
    children:[
      {
        path: '/home', name: 'home', component: Home,
      },
      {
        path: '/student', name: 'student', component: Student,
      },
      {
        path: '/acm', name: 'acm', component: ACM,
      },
      {
        path: '/duty', name: 'duty', component: Duty,
      },
      {
        path: '/duty/arrange', component: ADuty
      },
      {
        path: '/add', component: Add
      },
      {
        path: '/student/group', component: Group
      },
      {
        path: '/submit', component: SACM
      },
      {
        path: '/submit/show', component: Show
      },
      {
        path: '/information', component: Information
      },
      {
        path: '/acm/chart', component: PAcm
      },
    ]
  },

  // {
  //   path: '/home',
  //   component: Home,
  //   children: [
  //     { path: '/home', redirect: '/welcome' },
  //     { path: '/welcome', component: Welcome },
  //     { path: '/user', component:User },
  //     { path: '/main', component:Class },
  //     { path: '/acm', component:ACM },
  //     // { path: '/acm', component: acm },
  //   ]
  // },
]

const router = new VueRouter({
  routes
})

export default router
