<template>
  <div class="cartInfo">
	  <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner" v-for="item in renderData" :key="item.id">
          <mt-switch></mt-switch>
          <img :src="item.src">
          <div class="right">
            <h3>{{item.title}}</h3>
              <cartCount></cartCount>
              <span>{{item.price}}</span>
              <span>删除</span>  
          </div>
				</div>
			</div>
	  </div>

	  <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
          商品结算区
				</div>
			</div>
	  </div>
  </div>
</template>

<script>
import cartCount from '../cart/cartCount.vue'
export default {
  data() {
    return {
      renderData: []
    }
  },
  created() {
    this.getGoodCount();
  },
  methods: {
    getGoodCount() {
      var idArr = [];
      this.$store.state.cart.forEach(item=>{
        idArr.push(item.id);
      })
      if(idArr.length<=0) return;
      this.$http.get('static/cart/cartInfo.json').then(result=>{
        this.renderData = 
          result.body.filter(list=>{
            for(let i=0; i<idArr.length; i++){
              if(list.id === idArr[i]){
                return true
              }
            }
          })
      });

    }
  },
  components: {
    cartCount
  }
}

</script>

<style lang="scss" scoped>
img {
  width: 60px;
  height: 50px;
  margin: 0 5px;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;

  .right h3{
    font-size: 14px;
  }
  span {
      font-size: 12px;
      color: red;
  }
}
.cartInfo {
  background-color: #eee;
  overflow: hidden;
}
</style>