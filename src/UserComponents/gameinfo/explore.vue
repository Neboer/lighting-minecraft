<template>
  <div>
    <el-button type="primary" style="height: fit-content"><i class="el-icon-circle-plus el-icon--left"></i>新建家</el-button>
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  name: "explore",
  components: {
    vueWaterfallEasy
  },
  data(){
    return {
      imgsArr: [],
      group: 0
    }
  }
}
</script>

<style scoped>

</style>