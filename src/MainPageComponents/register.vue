<template>
    <div class="container">
        <div class="lint-text">
            欢迎加入灵动mc！以后我们就是同志了（笑）。<br/>出于某些考虑，需要验证码和手机号才可以注册账号，请您理解。<br/>受到登录插件的限制，
            目前游戏密码长度限制在6-10位之间<br/>且密码仅能包含a-g或0-9的字符。
        </div>
        <el-form ref="form" :model="form_data" label-width="auto">
            <el-form-item label="玩家名称">
                <el-input v-model="form_data.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form_data.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form_data.password_confirm"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-col :span="10">
                    <el-input v-model="form_data.captcha"></el-input>
                </el-col>
                <el-col :span="10" :offset="1">
                    <img src="../assets/captcha_example.png" alt="captcha">
                </el-col>
            </el-form-item>
            <el-form-item label="邀请码">
                <el-input v-model="form_data.invite_code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                form_data: {
                    name: "",
                    password: "",
                    password_confirm: "",
                    captcha: "",
                    invite_code: ""
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 600px;
        margin: auto;
    }

    .lint-text {
        margin-bottom: 1rem;
        text-align: center;
    }

    @media (max-width: 800px) {
        .container {
            width: 100%;
            margin: 0;
        }

        .lint-text {
            text-align: unset;
        }
    }
</style>