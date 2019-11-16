<template>
  <div>
    <div class="mui-numbox">
			<button class="mui-btn mui-btn-numbox-minus" type="button" @click="counttmp--">-</button>
			<input id="test" class="mui-input-numbox" type="number"  :value="counttmp" ref="inputBox" readonly>
			<button class="mui-btn mui-btn-numbox-plus" type="button" @click="counttmp++">+</button>
	  </div>    
  </div>
</template>

<script>

export default {
  data() {
    return {
      counttmp: this.initCount
    }
  },
  methods: {
    update() {
      if(this.counttmp < 1 ) {
        this.counttmp = 1;
      }
      console.log(this.counttmp)
      // this.$refs.inputBox.value = this.counttmp;
      // this.$emit("getCount", parseInt(this.counttmp));
    }
  },
  watch: {
    'counttmp': 'update'
  },
  props: ['initCount']
}
</script>

<style lang="scss" scoped>
  .mui-numbox {
    height: 25px;
    width: 110px;;
  }
</style>