<template>
  <div class="shopList">
    <h3>拼夕夕</h3>
    <div class="good-box">
      <div class="good-item" v-for="item in item" :key="item.id" @click="getGoodInfo(item.id)">
        <img :src="item.img_url" alt="">
        <div class="title">{{ item.title }}</div>
        <div class="info">
          <div class="price">
            <span class="new">{{ item.new_price }}</span>
            <span class="old">{{ item.old_price }}</span>
          </div>
          <div class="count">
            <span>销量：{{ item.saled }}</span>
            <span>热度：{{ item.hot }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    item: []
  }
},
created() {
  this.getGoods();
},
methods: {
  getGoods() {
    this.$http.get("static/goods/goodList.json").then(result=>{
      this.item = result.body;
    })
  },
  getGoodInfo(id) {
    this.$router.push({ name: "myInfo", params: {id: id}});
  }
}
}

</script>

<style lang="scss" scoped>
.shopList {
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
    color: crimson;
  }
  .good-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    .good-item {
      width: 49%;
      min-height: 250px;
      margin: 3px 0;
      padding: 3px;
      box-shadow: 0 0 5px #aaa;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        max-width: 100%;
      }
      .title {
        font-size: 14px;
        font-weight: 700;
        padding: 5px;
      }
      .info {
        background-color: #eee;
        font-size: 12px;
        .price {
          .new {
            color: crimson;
            font-size: 15px;
            font-weight: 700;
          }
          .old {
            text-decoration: line-through
          }
        }
        .count {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>