<template>
  <div>
    <div class="mui-numbox">
			<button class="mui-btn mui-btn-numbox-minus" type="button" @click="counttmp--">-</button>
			<input id="test" class="mui-input-numbox" type="number" @change="inputChange" value="1" ref="inputBox">
			<button class="mui-btn mui-btn-numbox-plus" type="button" @click="counttmp++">+</button>
	  </div>    
  </div>
</template>

<script>

export default {
  data() {
    return {
      counttmp: 1
    }
  },
  methods: {
    inputChange() {
      this.counttmp = this.$refs.inputBox.value
    },
    update() {
      if(this.counttmp < 1 ) {
        this.counttmp = 1;
      }
      this.$refs.inputBox.value = this.counttmp;
      this.$emit("getCount", parseInt(this.counttmp))
    }
  },
  watch: {
    'counttmp': 'update'
  }
}
</script>

<style lang="scss" scoped>
  .mui-numbox {
    height: 25px;
  }
</style>