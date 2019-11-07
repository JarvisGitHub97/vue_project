//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入UI组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
//导入样式库
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入路由实例
import router from './router'
//导入自定义组件
import app from './App.vue'

import moment from 'moment'
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//导入请求数据模块
import VueResource from 'vue-resource'
Vue.use(VueResource)


//配置根路径
//Vue.http.options.root = "";

var vm = new Vue({
  el: '#app', 
  render: c => c(app),
  router: router
})