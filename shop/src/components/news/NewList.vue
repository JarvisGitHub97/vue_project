<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>{{ item.time | dataFormat('YYYY-MM-DD') }}</span>
              <span>阅读量：{{ item.click }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.getNewsTopic()
  },
  methods: {
    getNewsTopic() {
      this.$http.get('static/news/newsTopic.json').then((result)=>{
        this.newsList = result.body;
      }, (err)=>{console.log(err)})
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