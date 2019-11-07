import VueRouter from 'vue-router'
//导入路由组件
import Home from './components/tabbar/Homecom.vue'
import Member from './components/tabbar/Membercom.vue'
import Cart from './components/tabbar/Cartcom.vue'
import Search from './components/tabbar/Searchcom.vue'
import NewList from './components/news/NewList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search },
    { path: '/home/newList', component: NewList },
    { path: '/home/newsInfo/:id', component: NewsInfo}
  ],
  linkActiveClass: 'mui-active'
})

export default router