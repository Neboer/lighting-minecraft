<template>
  <div class="big-container">
    <div>
      <div class="line-box">
        <img src="../../assets/home/home1.png" alt="good" class="line-image"/>
        <div class="line-text">
          <h1>这是我的家！</h1>
          <div>没想到吧，这里很漂亮……虽然在地下，但是一样没问题的！</div>
        </div>
      </div>

      <div class="line-box">
        <img src="../../assets/home/home2.png" alt="good" class="line-image"/>
        <div class="line-text">
          <h1>这是我的第二个家！</h1>
          <div>嘿嘿嘿嘿，这是公寓里的小房间！虽然很小的地方但是很不错啊！</div>
        </div>
      </div>
    </div>

    <el-button type="primary" style="height: fit-content"><i class="el-icon-circle-plus el-icon--left"></i>新建家</el-button>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
  .big-container {
    display: flex;
  }

  .line-box {
    display: flex;
    height: 200px;
    margin: 10px 0;
  }

  .line-image {
    max-height: 100%;
  }

  .line-text {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    .big-container {
      flex-direction: column-reverse;
      margin-left: 10px;
    }

    .line-box {
      display: block;
      height: unset;
    }

    .line-image {
      width: 100%;
    }

    .line-text {
      margin-left: unset;
    }

  }
</style>