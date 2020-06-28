<template>
    <el-container class="container">
        <el-aside class="aside-menu">
            <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    :collapse="false"
                    :router="true"
            >
                <el-menu-item index="1" route="/player/baseinfo">
                    <i class="el-icon-info"></i>
                    <span>基本信息</span>
                </el-menu-item>
                <el-menu-item index="2" route="/player/gameinfo">
                    <img src="./assets/minecraftaxe.svg" style="max-width: 18px; margin-right: 10px; margin-left: 5px">
                    <span>游戏信息</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span>登录记录</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-user"></i>
                    <span>邀请</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-medal"></i>
                    <span>成就</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
    .container {
        margin: 1.5rem;
    }
    @media (max-width: 800px) {
        .container {
            margin: 1.5rem 0;
        }
    }
</style>