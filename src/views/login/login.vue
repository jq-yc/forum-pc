<template>
  <div class="flex">
    <!-- 轮播图 -->
    <div>
      <login-swiper />
      <div class="login-container"></div>
    </div>
    <!-- form表单 -->
    <div class="flex justify-center items-center flex-col flex-1">
      <div class="w-80">
        <div class="text-xl text-left w-full mb-0.5">登录FORUM-PC</div>
        <div class="text-base text-gray-400 text-left w-full mb-6">
          登录FORUM-PC
        </div>
        <el-form
          status-icon
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label-width="0" prop="pass">
            <el-input
              placeholder="用户名"
              prefix-icon="el-icon-user"
              type="text"
              v-model="username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="pass" v-if="layout !== 'login'">
            <el-input
              placeholder="昵称"
              prefix-icon="el-icon-user"
              type="text"
              v-model="nickname"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="checkPass">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              type="password"
              v-model="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div class="flex justify-between">
            <el-checkbox v-model="checked"
              ><span class="text-black">记住密码</span></el-checkbox
            >
            <a href="" class="text-blue-500 text-sm">忘记密码</a>
          </div>
          <div label-width="0">
            <div
              class="text-center"
              :class="{
                'my-5 py-1 bg-blue-600 text-white': layout === 'login',
              }"
              @click="login()"
            >
              登录
            </div>
            <div
              class="text-center"
              @click="register()"
              :class="{
                'my-5 py-1 bg-blue-600 text-white': layout === 'register',
              }"
            >
              注册账号
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { userRegister, userLogin } from "@/api/login";
import loginSwiper from "./children/login-swiper.vue";
export default {
  name: "loginView",
  components: {
    loginSwiper,
  },
  data() {
    return {
      checked: true,
      username: "",
      password: "",
      // 昵称
      nickname: "",
      layout: "login",
    };
  },
  methods: {
    login() {
      if (this.layout === "login") {
        // 登录
        const _data = {
          username: this.username,
          password: this.password,
        };
        userLogin(_data).then((response) => {
          const { data } = response;
          if (data.data) {
            this.$store.commit("SET_USERINFO", data.data);
            this.$message.success("登录成功，跳转至首页");
            this.$router.push("/");
          }
        });
      } else {
        this.layout = "login";
      }
    },
    register() {
      if (this.layout === "register") {
        const _data = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        userRegister(_data).then((response) => {
          const { data } = response;
          if (data.data) {
            this.$message.success("注册成功，跳转至登录页");
            this.layout = "login";
          }
        });
      } else {
        this.layout = "register";
      }
    },
  },
};
</script>

<style></style>
