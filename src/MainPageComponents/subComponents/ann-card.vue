<template>
  <div class="ann-card">
    <small>发布时间： {{ time }}</small>
    <small class="right-aligned">发布人：{{ issuer }}</small>
    <div class="ann-text">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ann-card",
  props: ['issuer', 'time', 'content']
}
</script>

<style scoped>
@import "../../style/announcement.css";
</style>