<template>
    <el-container>
        <el-header>
            <div class="toolbar-top">
                <div class="bandage">灵动Minecraft</div>
                <div class="right-aligned" v-if="!is_logined">
                    <div class="toolbar-element" @click="login_form_visibility = true">登录</div>
                    <router-link tag="div" to="/register" class="toolbar-element" active-class="toolbar-element-active">
                        注册
                    </router-link>
                </div>
                <div class="right-aligned" v-if="is_logined">
                    <div class="toolbar-element">{{login_user}}</div>
                    <div class="toolbar-element"><i class="el-icon-switch-button"></i> 注销</div>
                </div>
                <div class="toolbar-all-menu">
                    <router-link tag="div" to="/" class="toolbar-element" active-class="toolbar-element-active" exact>主页
                    </router-link>
                    <router-link tag="div" to="/announcement" class="toolbar-element" active-class="toolbar-element-active">
                        公告
                    </router-link>
                    <router-link tag="div" to="/game" class="toolbar-element" active-class="toolbar-element-active">
                        游戏
                    </router-link>
                    <router-link tag="div" to="/about" class="toolbar-element" active-class="toolbar-element-active">
                        关于
                    </router-link>
                    <router-link tag="div" to="/player" class="toolbar-element" active-class="toolbar-element-active"
                                 v-if="is_logined">个人中心
                    </router-link>
                </div>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <login :visible="login_form_visibility" v-on:close="close_form" v-on:login="login"></login>
    </el-container>
</template>

<script>
    import login from './MainPageComponents/subComponents/home-login'

    export default {
        name: "MainPage",
        components: {login},
        data() {
            return {is_logined: false, login_form_visibility: false, login_user: ''}
        },
        methods: {
            close_form() {
                this.login_form_visibility = false
            },

            login(username) {
                this.login_user = username;
                this.is_logined = true;
            }
        }
    }
</script>

<style scoped>
    @import "style/MainPage.css";
</style>