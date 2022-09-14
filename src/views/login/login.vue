<template>
  <div class="flex">
    <!-- 轮播图 -->
    <div>
      <login-swiper />
      <div class="login-container"></div>
    </div>
    <!-- form表单 -->
    <div class="flex justify-center items-center flex-col flex-1">
      <div class="">登录FORUM-PC</div>
      <div>登录FORUM-PC</div>
      <div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label-width="0" prop="pass">
            <el-input
              placeholder="用户名"
              prefix-icon="el-icon-user"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="checkPass">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div class="flex justify-between">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <a href="">忘记密码</a>
          </div>
          <div label-width="0">
            <div
              class="my-5 bg-blue-600 text-white text-center"
              @click="submitForm('ruleForm')"
            >
              登录
            </div>
            <div class="text-center">注册账号</div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginSwiper from "./children/login-swiper.vue";
export default {
  name: "loginView",
  components: {
    loginSwiper,
  },
  data() {
    return {
      checked: true,
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style></style>
