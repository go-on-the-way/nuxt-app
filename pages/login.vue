<template>
  <div class="sl-login-container">
    <div class="sl-login">
      <h3 class="sl-login-title">
        <Logo />
      </h3>
      <el-form
        ref="loginForm"
        class="sl-login-form"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item prop="username">
          <span class="el-icon-s-custom form-item-icon"></span>
          <el-input
            v-model="loginForm.username"
            name="username"
            type="text"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <span class="el-icon-lock form-item-icon"></span>
          <el-input
            v-model="loginForm.password"
            name="password"
            type="password"
            placeholder="密码"
            @keyup.enter.native="login"
          />
        </el-form-item>
        <div class="align-center">
          <el-button :loading="isLoading" type="primary" @click="login">
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {},
      isLoading: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins/layout.scss';
@import '~assets/scss/mixins/clearfix.scss';

$inputBgColor: #454545;
$boxShadowColor: rgba(0, 0, 0, 0.7);

.sl-login-container {
  height: 100%;
  background-color: $color-login-bg;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.sl-login-container /deep/ {
  .el-input {
    background-color: $inputBgColor;
  }

  .el-input__inner {
    display: inline-block;
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 0.3em 0 2em;
    color: $color-white;
    border-radius: 0;
    border: none !important;
    background: transparent;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1001px $boxShadowColor inset !important;
      box-shadow: 0 0 0 1001px $boxShadowColor inset !important;
      -webkit-text-fill-color: #fff !important;
    }
  }
}

.sl-login-title {
  margin-bottom: 1em;
  font-size: 2.5rem;
  color: $color-white;
  letter-spacing: 0.2em;
  text-align: center;
  img {
    height: 12rem;
  }
}

.sl-login {
  display: inline-block;
  position: absolute;
  width: 25%;
  left: 50%;
  top: 40%;
  padding: 1em;
  transform: translate(-50%, -50%);
  @include responsive-layout;
}

.form-item-icon {
  position: absolute;
  left: 0.5em;
  top: 50%;
  color: $color-white;
  transform: translateY(-50%);
  z-index: 10;
}
</style>
