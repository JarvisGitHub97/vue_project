//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入UI组件
// import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//导入样式库
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/bootstrap/css/bootstrap.css'
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

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// import 'default-passive-events'
//配置根路径
//Vue.http.options.root = "";

import Vuex from 'vuex'
Vue.use(Vuex);

var localCart = JSON.parse(localStorage.getItem('cartData') || '[]');
var store = new Vuex.Store({
  state: {//this.$store.state.xxx
    //数据：商品的id，价格，数量，是否选中
    cart: localCart
  },

  mutations: {//this.$store.commit('name', [arg])
    goodsToStore(state, goodInfo) {
      //把加入购物车我的商品信息更新到store上
      //1. store上是否已经有该商品，有则增加数量即可
      //2. store上没有直接push
      var flag = false; 
      state.cart.some(item=>{
        if(item.id == goodInfo.id) {
          item.count += parseInt(goodInfo.count);
          flag = true;
          return true   //找到就不再遍历
        }
      })
      if(!flag) {
        state.cart.push(goodInfo);
      }
      localStorage.setItem('cartData', JSON.stringify(state.cart))
    },
    //修改购物车中商品中的数量值，同步到store中
    updateStore(state, goodInfo) {
      state.cart.some(item=>{
        if(item.id == goodInfo.id) {
          item.count = parseInt(goodInfo.count);
          return true;
        }
      })
      localStorage.setItem('cartData', JSON.stringify(state.cart))
    },
    removeSelected(state, id) {
      state.cart.some((item, index)=>{
        if(item.id == id) {
          state.cart.splice(index, 1);
          return true;
        }
      })
      localStorage.setItem('cartData', JSON.stringify(state.cart)) 
    },
    updateSelectStatus(state, info) {
      state.cart.some(item=>{
        if(item.id == info.id) {
          item.selected = info.selected;
        }
      })
      localStorage.setItem('cartData', JSON.stringify(state.cart)) 
    }
  },

  getters: {//this.$store.getters.xxx
    //相当于计算属性computed,过滤器filters, 对数据做包装
    getCount(state) {
      var cartCount = 0;
      state.cart.forEach(item=>{
        cartCount += item.count;
      })   
      return cartCount
    },
    idMapCount(state) {
      var obj = {};
      state.cart.forEach(item=>{
        obj[item.id] = item.count;
      })
      return obj;
    },
    getSelectStatus(state) {
      var selectStatus = {};
      state.cart.forEach(item=>{
          selectStatus[item.id] = item.selected;
      })
      return selectStatus;
    },
    computeCart(state) {
      var obj = {
        count: 0,
        money: 0
      };
      state.cart.forEach(item=>{
        if(item.selected) {
          obj.count += item.count;
          obj.money += item.count * item.price;
        }
      })
      return obj;
    }
  }
});

var vm = new Vue({
  el: '#app', 
  render: c => c(app),
  router: router,
  store: store
})