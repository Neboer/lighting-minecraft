<template>
    <el-container>
        <el-header>
            <div class="toolbar-top">
                <div class="bandage">灵动Minecraft</div>
                <router-link tag="div" to="/" class="toolbar-element" active-class="toolbar-element-active" exact>主页</router-link>
                <router-link tag="div" to="/announcement" class="toolbar-element" active-class="toolbar-element-active">
                    公告板
                </router-link>
                <router-link tag="div" to="/players" class="toolbar-element" active-class="toolbar-element-active">玩家
                </router-link>
                <div class="right-aligned">
                    <div class="toolbar-element">登录</div>
                    <div class="toolbar-element">注册</div>
                </div>
            </div>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>

<script>
    // import home from "./MainPageComponents/home"
    // import announcement from "./MainPageComponents/announcement";

    export default {
        name: "MainPage",
    }
</script>

<style scoped>
    @import "style/MainPage.css";
</style>