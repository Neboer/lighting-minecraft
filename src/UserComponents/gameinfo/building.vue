<template>
  <div>
    <h2 class="title">公寓大楼 </h2><span class="corr">x126 y144 z0</span>
    <div class="image-flex-container">
      <img src="../../assets/home/home1.png" alt="home1" class="image"/>
      <img src="../../assets/home/home2.png" alt="home1" class="image"/>
      <div class="plus-icon-container">
        <i class="el-icon-plus plus-icon"></i>
      </div>
    </div>
    <div>
      这是我在地下的家！
    </div>
  </div>
</template>

<script>
export default {
  name: "building"
}
</script>

<style scoped>
.image-flex-container {
  height: fit-content;
  vertical-align: center;
  display: flex;
  width: 100%;
  overflow-x: scroll;
}

.image {
  height: 100px;
  margin: 0 10px;
}

.plus-icon-container {
  display: inline-block;
  border: black 1px solid;
  width: 100px;
  min-width: 100px;
  height: 100px;
  border-radius: 1rem;
  cursor: pointer;
}

.plus-icon {
  margin: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}

.title {
  display: inline-block;
}

.corr {
  margin-left: 2em;
}
</style>