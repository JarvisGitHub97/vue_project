<template>
  <div >
    <div class="hi"><img src="../../img/hi.png" ></div>
    <form class="form-inline my-2 my-lg-0" role="search" method="get" action="http://www.baidu.com" target="_blank">
    <div class="input-group search">
    <input type="text" class="form-control" name="keyword" placeholder="右转百度><">
    <span class="input-group-btn">
    <button type="submit" class="btn btn-danger">搜索</button>
    </span>
    </div>
    </form>
  </div>
</template>

<script></script>

<style lang="scss"scoped>
.hi {
  text-align: center;
  margin-top: 40%;
  img {
    width:100px;
    height: 100px;
  }
}
.input-group {
  margin: 10px auto;
  width: 80%;
}
</style>