<template>
  <div class="commentArea">
      <div class="title">发表评论</div>
      <textarea placeholder="输入你想说的话~~（最多200字）" maxlength="200"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>

      <div class="show-item" v-for="(item) in comments" :key="item.id">
        <div class="speaker">
          <span>用户&nbsp;{{item.id}}:&nbsp;&nbsp; 阿花</span>
          <span>时间：{{ item.time | dataFormat('YYYY-MM-DD') }}</span>
        </div>
        <div class="remark">
          <div>{{ item.text }}</div>
        </div>
      </div>

      <mt-button type="danger" size="large">加载更多</mt-button>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    }
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http.get('static/comment.json').then((result)=>{
        this.comments = result.body;
      }, (err)=>{console.log(err)})
    }
  }
  
}
</script>

<style lang="scss">
.commentArea {
  textarea{
    font-size: 14px;
  }
  .show-item {
    margin: 10px 0;
    font-size: 14px;
    .speaker {
      font-weight: bold;
      color: cornflowerblue;
      display: flex;
      justify-content: space-between;  
      margin: 0 5px;    
    }
    .remark {
      border: 1px solid #999;
      border-radius: 5px;
      padding :3px 6px;
    }
  }
}
</style>