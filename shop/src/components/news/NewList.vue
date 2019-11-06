<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../img/1.png">
          <div class="mui-media-body">
            <h1>等待</h1>
            <p class='mui-ellipsis'>
              <span>2019.9.10</span>
              <span>阅读量：684</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class='mui-navigate-right' href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/1.png">
          <div class="mui-media-body">
            <h1>等待</h1>
            <p class='mui-ellipsis'>
              <span>2019.9.10</span>
              <span>阅读量：684</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../img/1.png">
          <div class="mui-media-body">
            <h1>等待</h1>
            <p class='mui-ellipsis'>
              <span>2019.9.10</span>
              <span>阅读量：684</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      getNewsList: []
    }
  },
  created() { 
    this.getData() 
  },
  methods: {
    getData() {
      this.$http.get('./data.json').then((result)=>{
          this.getNewsList = result.body.message;
          console.log(this.getNewsList)
      }, (err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: lightseagreen;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>