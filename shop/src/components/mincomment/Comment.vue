<template>
  <div class="commentArea">
      <div class="title">发表评论</div>
      <textarea placeholder="输入你想说的话~~（最多200字）" maxlength="200" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="sendMsg">确认发送</mt-button>

      <div class="show-item" v-for="(item) in comments" :key="item.id">
        <div class="speaker">
          <span>用户&nbsp;{{item.id}}:&nbsp;&nbsp; </span>
          <span>时间：{{ item.time | dataFormat('YYYY-MM-DD') }}</span>
        </div>
        <div class="remark">
          <div>{{ item.text }}</div>
        </div>
      </div>

      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>     
  </div>
</template>

<script> 
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      comments: [],
      msg: '',
      tmpMsg: '',
  //父组件的传值？
      id: ''

    }
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http.get('static/comment/comment.json').then((result)=>{
        this.comments = result.body;
      }, (err)=>{console.log(err)})
    },
    getMore() {
      this.$http.get('static/comment/more.json').then(result=>{
        this.comments = this.comments.concat(result.body);
        Toast("没有更多了><")
      })
    },
    sendMsg() {
      //这里只用简单的拼接，不用post进行数据的传递，因为没有定义后端接收数据后的处理
      if(this.msg.trim().length === 0) return Toast("评论内容不能为空");
      
      this.tmpMsg = `{"id": ${Math.round(Math.random()*1000)},"commentName": "匿名用户","time": "2019-04-23","text": "${this.msg.trim()}"}`;
      this.tmpMsg = JSON.parse(this.tmpMsg);
      this.comments.unshift(this.tmpMsg);
      this.msg = ''
    }
  },
  prop: ["id"]
}
</script>

<style lang="scss">
.commentArea {
  padding: 5px;
  .title {
    font-weight: 600;
    text-align: center;
  }
  textarea {
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