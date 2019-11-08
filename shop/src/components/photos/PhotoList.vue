<template>
  <div class="photo-container">
    <!-- 上边栏 -->
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>

					</div>
				</div>
		  </div>
    <!-- 图片展示区 -->
      <h4>每周推荐</h4>
      <ul class="showPhoto">
        <li v-for="item in list" :key="item.id">
          <img v-lazy="item.img_url">
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="body">{{ item.text }}</div>
          </div>
        </li>
      </ul>

  </div>
</template>

<script>
// import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
      list: ''
    }
  },
  created() {
    this.getphotoList()
  },
  // mounted() {
  //   mui('.mui-scroll-wrapper').scroll({
  //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  //   })
  // },
  methods: {
    getphotoList() {
      this.$http.get('static/photo/photoMin.json').then(result=>{
        this.list = result.body;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// * {
// 		touch-action: pan-y;
// 	}


.photo-container {
  h4 {
    text-align: center;
    padding: 5px 0;
  }
  .showPhoto {
    margin: 0;
    padding: 10px;
    li {
      position: relative;
      list-style: none;
      margin-bottom: 10px;
      img[lazy=loading] {
        background-color: #ccc;
        width: 200px;
        height: 300px;
        margin: auto;
      }
      img {
        width: 100%;
      }
      .info {
        width: 100%;
        background-color: rgba(0, 0, 0, .1);
        position: absolute;
        bottom: 0;
        .title {
          padding: 5px 0 0 5px;
          font-size: 14px;
          font-weight: 700;
        }
        .body {
          font-size: 13px;
          padding: 5px 5px 0 5px;
        }
      }
    }
  }
}
</style>