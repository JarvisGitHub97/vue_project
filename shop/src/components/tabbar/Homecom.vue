<template>
  <div>
    <banner :bannerData="list"></banner>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
              <img src="../../img/menu1.png" alt="">
              <div class="mui-media-body">热评专区 </div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
              <img src="../../img/menu2.png" alt="">
              <div class="mui-media-body">图片浏览</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodList">
              <img src="../../img/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/forth">
              <img src="../../img/menu4.png" alt="">
              <div class="mui-media-body">天猫国际</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/fifth">
              <img src="../../img/menu5.png" alt="">
              <div class="mui-media-body">留言反馈</div></router-link></li>ss
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/sixth">
              <img src="../../img/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></router-link></li>
    </ul> 
  </div>
</template>

<script>
import banner from '../banner.vue'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      this.$http.get('static/banner/homeBanner.json').then(result=>{
        this.list = result.body;
      })
    }
  },
  components: {
    banner
  }
}
</script>

<style lang="scss" scoped>
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
      width: 50px;
      height: 50px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>