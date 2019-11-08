<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>    
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
              <img src="../../img/menu1.png" alt="">
              <div class="mui-media-body">热评专区 </div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
              <img src="../../img/menu2.png" alt="">
              <div class="mui-media-body">图片浏览</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu3.png" alt="">
              <div class="mui-media-body">今日推荐</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu4.png" alt="">
              <div class="mui-media-body">天猫国际</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu5.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>ss
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data: []
    }
  },
  // created() {
  //   this.getBanner()
  // },
  methods: {
    // getBanner() {
      // this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
      //   this.data = result.body.message;
      // })
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  background-color: #fff;
  
  .mint-swipe-item {
    &:nth-child(1) {
        background: lightblue;
    }
    &:nth-child(2) {
      background: moccasin;
    }
    &:nth-child(3) {
      background: pink;
    }
    img {
      width: 100%;
      height: 100%
    }
  }
}
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