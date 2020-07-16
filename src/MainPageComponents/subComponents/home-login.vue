<template>
  <el-dialog title="登录" :visible="visible" @close="$emit('close')" width="20rem">
    <el-form :rules="rules" :model="login_form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="login_form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="login_form.password" autocomplete="off" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">取 消</el-button>
      <el-button type="primary" @click="temp_login" :loading="loading">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "login",
  props: ['visible'],
  data() {
    return {
      loading: false,
      login_form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    temp_login() {
      this.loading = true
      console.log({username: this.login_form.username, password: this.login_form.password});
      this.axios.post('/api/login', {
        username: this.login_form.username,
        password: this.login_form.password
      }).then((res) => {
        if (res.data.result === 'failed') {
          this.$message({message: '登录失败', type: 'error'})
        } else {
          this.$message({message: '登录成功', type: 'success'})
          this.$emit('login_successful', this.login_form.username);
          this.$emit('close');
        }
      }).catch(() => {
        this.$message({message: '网络错误', type: 'error'})
      }).finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

<style scoped>
@media (max-width: 800px) {

}
</style>