<template>
    <div class="ann-card">
        <small>发布时间： {{(new Date()).toLocaleDateString()}}</small>
        <small class="right-aligned">发布人：Neboer</small>
        <div class="ann-text">
            这里是一条公告的正文。本系统似乎开发重复，是否要重新开发？
        </div>
    </div>
</template>

<script>
    export default {
        name: "ann-card",
        props:['issuer', 'time', 'content']
    }
</script>

<style scoped>
    @import "../../style/announcement.css";
</style>