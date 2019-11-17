<template>
  <div class="cartInfo">
	  <div class="mui-card" v-for="(item, objIndex) in renderData" :key="item.id">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
          <!-- 此处没有双向绑定，因为是getters -->
          <mt-switch v-model="$store.getters.getSelectStatus[item.id]" 
          @change="storeSelected(item.id, $store.getters.getSelectStatus[item.id])"></mt-switch>  
          <img :src="item.src">
          <div class="right">
            <h3>{{item.title}}</h3>
              <cartCount :initCount="$store.getters.idMapCount[item.id]" :goodId="item.id"></cartCount>
              <div class="right-bottom">
                <span>￥{{item.price}}</span>
                <button class="btn btn-sm btn-warning" @click="remove(item.id, objIndex)">删除</button>  
              </div>
          </div>
				</div>
			</div>
	  </div>

	  <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner countMoney">
          <div class="money">
             <p>总计（包邮）</p>
             <p>已购商品：<span>{{ $store.getters.computeCart.count }}</span> 件，共 <span>￥{{ $store.getters.computeCart.money }}</span> 元</p> 
          </div> 
          <div class="go">
            <mt-button type="danger">结算</mt-button>
          </div>
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
    },
    remove(id, index) {
      this.renderData.splice(index, 1);
      this.$store.commit('removeSelected', id)
    },
    storeSelected(id, status) {
      this.$store.commit('updateSelectStatus', { id:id, selected:status })
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
    font-size: 13px;
  }
  span {
      font-size: 16px;
      color: red;
  }
  .right-bottom {
    display: flex;
    justify-content: space-between
  }
}
.countMoney {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  p {
    margin-bottom: 0.5rem
  }
}
.cartInfo {
  background-color: #eee;
  overflow: hidden;
}
</style>