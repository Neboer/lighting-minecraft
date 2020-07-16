<template>
  <div class="container">
    <div class="lint-text">
      欢迎加入灵动mc！以后我们就是同志了（笑）。<br/>出于某些考虑，需要邀请码和手机号才可以注册账号，请您理解。
    </div>
    <el-form ref="form" :model="form_data" status-icon :rules="form_rule" label-width="auto">
      <el-form-item label="玩家名称" prop="name">
        <el-input v-model="form_data.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form_data.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password_confirm">
        <el-input type="password" v-model="form_data.password_confirm"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-col :span="10">
          <el-input v-model="form_data.captcha"></el-input>
        </el-col>
        <el-col :span="10" :offset="1">
          <img src="../assets/captcha_example.png" alt="captcha">
        </el-col>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone_number">
        <el-col :span="10">
          <el-input v-model="form_data.phone_number"></el-input>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-button type="info" style="margin: 0 20%">获取验证码</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="邀请码" prop="invite_code">
        <el-input v-model="form_data.invite_code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit_form">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form_data.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form_data: {
        name: "",
        password: "",
        password_confirm: "",
        captcha: "",
        phone_number: "",
        invite_code: ""
      },
      form_rule: {
        name: [{required: true, message: '请输入玩家名称', trigger: 'blur'}],
        password: [{required: true, message: '请输入登录密码', trigger: 'blur'}],
        password_confirm: [{required: true, validator: validatePass2, trigger: 'change'}],
        captcha: [{required: true, message: '请输入验证码', trigger: 'blur'}],
        invite_code: [{required: true, message: '请输入正确的邀请码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submit_form() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log('submit')
        } else {
          this.$alert("填写有误，请检查后再提交。", {
            confirmButtonText: '确定'
          });
        }
      })
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