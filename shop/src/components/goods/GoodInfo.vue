<template>
  <div>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <banner :bannerData="list" :isFull="false"></banner>
					</div>
				</div>
	  </div>

      <div class="mui-card">
				<div class="mui-card-header">{{ info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <div class="price">
              <p><span>{{ info.new_price }}</span>&nbsp;&nbsp;<del>{{ info.old_price }}</del></p>
              <p class="buy">购买数量：</p>
              <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					      <input id="test" class="mui-input-numbox" type="number" value="5" />
					      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				      </div>
              <div class="cart">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small">加入购物车</mt-button>
              </div>
            </div>
					</div>
				</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner myArea">
            <p>上架时间：{{ info.time | dataFormat }}</p>
            <p>销量：{{ info.saled }}</p>
					</div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="danger" plain size="large" @click="noMore">图文详情</mt-button>
          <mt-button type="primary" plain size="large" @click="noMore">买家评论</mt-button>
        </div>
			</div>
  </div>
</template>

<script>
import banner from '../banner.vue';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      list: [],
      id: this.$route.params.id,
      info: {}
    }
  },
  methods: {
    getGoodBanner() {
      this.$http.get('static/goods/goodBanner.json').then(result=>{
        this.list = result.body[this.id-1];
        /*this.list.forEach(item=>{
          item.url = item.xx;
        })*/
      })
    },
    getGoodInfo() {
      this.$http.get('static/goods/goodInfo.json').then(result=>{
        this.info =result.body[this.id]
      })
    },
    noMore() {
      Toast("没有了><")
    }
  },
  created() {
    this.getGoodBanner(),
    this.getGoodInfo()
  },
  components: {
    banner
  }
}

</script>

<style lang="scss" scoped>
.price {
  font-size: 14px;
  span {
    font-size: 18px;
    color: #DC143C;
    font-weight: bold;
  }
  .mui-numbox, .buy{
    display: inline-block;;
  }
  .mui-numbox {
    height: 25px;
  }
}
.myArea {
  padding: 10px 15px 0 15px;
}
.mui-card-footer {
  display: block;
  button {
    margin: 15px 0 15px 0;
  }
}
</style>