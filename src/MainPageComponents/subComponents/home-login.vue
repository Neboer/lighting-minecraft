<template>
    <el-dialog title="登录" :visible="visible" @close="$emit('close')" width="20rem">
        <el-form>
            <el-form-item label="用户名">
                <el-input v-model="username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('close')">取 消</el-button>
            <el-button type="primary" @click="temp_login">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "login",
        props: ['visible'],
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            temp_login() {
                if (this.username && this.password) {
                    this.$emit('login', this.username);
                    this.$emit('close');
                }
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 800px) {

    }
</style>