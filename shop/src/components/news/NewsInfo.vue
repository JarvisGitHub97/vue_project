<template>
  <div class="nInfo-container">

    <div class="title">{{ info.title }}</div>

      <div class="time-container">
        <span>发表时间:{{ info.time | dataFormat('YYYY-MM-DD') }}</span>
        <span>阅读量:{{ info.click }}</span>
      </div>

      <div class="content" v-html="info.content"></div>

      <comment-area></comment-area>
  </div>

</template>
  
<script>

import comment from '../mincomment/Comment.vue'
export default {
  data () {
    return {
      id: this.$route.params.id-1,
      info: []
    }
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get('static/news/newsInfo.json').then((result)=>{
        this.info = (result.body)[this.id];
      })
    }
  },
  components: {
    "comment-area": comment
  }
}
</script>

<style lang="scss">
.nInfo-container {
  padding: 6px;
  .title {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
  }
  .time-container {
    font-size: 13px;
    color: cornflowerblue;
    display: flex;
    justify-content: space-between;
    margin: 0 15px
  }
  .content {
    margin: 5px 5px;
  }
}
</style>