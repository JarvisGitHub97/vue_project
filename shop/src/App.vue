<template>
  <div class="my-container">
    <!-- header -->
    <mt-header fixed title="知乎商城"></mt-header>
    <div class="back" @click="goBack">
      <img src="./img/left.png" alt="">
    </div>
    <!-- router-view -->
    <transition>
    <router-view></router-view>
    </transition>
    <!-- tabbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="target">2</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
methods: {
  goBack() {
    this.$router.go(-1);
  }
}
}

</script>


<style lang="scss" scoped>
.my-container {
    .back {
      padding: 0px;
      position: fixed;
      left: 8px;
      top: 5px;
      width: 30px;
      height: 30px;
      z-index: 100;
      img {
        width: 100%;
        height: 100%;
      }
    }
    overflow-x: hidden;
    padding-top: 40px;
    padding-bottom: 50px
  } 

  .v-enter {
    opacity: 0;
    transform: translateX(100%)
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
