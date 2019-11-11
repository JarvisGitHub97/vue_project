<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerData" :key="item.id">
        <img :src="item.url" alt="" :class="{'full': isFull}">
      </mt-swipe-item>
    </mt-swipe>   
  </div>
</template>

<script>
export default {
props: ['bannerData', 'isFull']
}

</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  background-color: #fff;
  
  .mint-swipe-item {
    text-align: center;
    background-color: #fff;
    img {
      height: 100%
    }
  }
}
.full {
  width: 100%;
}
</style>