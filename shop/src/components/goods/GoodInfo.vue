<template>
  <div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
     <div class="ball" v-show="ballFlag" ref="ball"></div>     
    </transition>

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
              <p class="buy">
                购买数量：<countBox :class="{ myClass: 'true' }" @getCount="updateCount"></countBox>
                </p>
              <div class="cart">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
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
import countBox from './CountBox.vue'
export default {
  data() {
    return {
      list: [],
      id: this.$route.params.id,
      info: {},
      ballFlag: false,
      selectCount: 1
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
        this.info = result.body[this.id-1]
      })
    },
    noMore() {
      Toast("没有了><")
    },
    updateCount(count) {
      this.selectCount = count;
    },
    addToCart() {
      this.ballFlag = !this.ballFlag;
      var goodsMsg = {
        id: this.id,
        price: this.info.new_price,
        count: this.selectCount,
        selected: true
      };
      this.$store.commit('goodsToStore', goodsMsg);

    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //
      const targetPosition = document.getElementById('target').getBoundingClientRect();
      const xDist = targetPosition.left - ballPosition.left;
      const yDist = targetPosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.31,-0.11,1,.46)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
    
  },
  created() {
    this.getGoodBanner(),
    this.getGoodInfo()
  },
  components: {
    banner, 
    countBox
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
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  background-color: #DC143C;
  left: 150px;
  top: 400px;
}
.myClass {
  display: inline;
}

</style>