<template>
  <div class="photoInfo">
    <h3>{{ list.title }} {{ list.id }}</h3>
    <div class="top">
      <span>时间：{{ list.time| dataFormat }}</span>
      <span>点击：{{ list.click }}</span>
    </div>
    <!-- 缩略图 -->
    <vue-preview :slides="picArr" class="myPic"></vue-preview>

    <div class="textInfo">
      {{ list.text }}
    </div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from '../mincomment/Comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      list: '',
      picArr: []
    }
  },
  created() {
    this.getPhotoInfo();
    this.getPic()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get('static/photo/photoInfo.json').then(result=>{
        this.list = (result.body)[this.id-1]
      })
    },

    getPic() {
      this.$http.get('static/photo/bannerPic.json').then(result=>{
        this.picArr = result.body
      })
    }  
  },
  components: {
    "cmt-box": comment
  }
}
</script>

<style lang="scss">
.photoInfo {
  h3 {
    text-align: center;
    padding: 5px 0;
    font-weight: 600; 
  }
  .top{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    span {
      font-size: 14px;
      color: cornflowerblue;
    }
  }
  .textInfo {
    font-size: 14px;
    padding: 10px;
  }
  .myPic {
    figure {
      padding: 0;
      margin: 5px;
      text-align: center;
      img {
        width: 90%;
        box-shadow: 0 0 6px #aaa;
        }
    }

  }
}
</style>