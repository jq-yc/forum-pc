<template>
  <div>
    <span slot="label" class="block w-52">
      <span class="el-icon-postcard mr-2"></span>
      <span>个人资料</span>
    </span>
    <!-- 右侧显示内容 -->
    <div class="ml-4">
      <div class="text-xl font-medium">个人资料</div>
      <div class="personal-info flex">
        <div class="user-info">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-form-item label="用户名">
              <el-input
                type="text"
                placeholder="填写你的用户名"
                v-model="text"
                maxlength="20"
                show-word-limit
              >
              </el-input>
            </el-form-item>
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-form-item label="职位">
              <el-input
                type="text"
                placeholder="填写你的职位"
                v-model="text"
                maxlength="50"
                show-word-limit
              >
              </el-input>
            </el-form-item>
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-form-item label="公司">
              <el-input
                type="text"
                placeholder="填写你的公司"
                v-model="text"
                maxlength="50"
                show-word-limit
              >
              </el-input>
            </el-form-item>
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-form-item label="个人主页">
              <el-input
                type="text"
                placeholder="填写你的个人主页"
                v-model="text"
                maxlength="100"
                show-word-limit
              >
              </el-input>
            </el-form-item>
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-form-item label="个人介绍">
              <el-input
                type="textarea"
                placeholder="填写职业技能、擅长的事情、喜欢的事情等"
                v-model="textarea"
                maxlength="100"
                show-word-limit
                style="width: 440px"
              >
              </el-input>
            </el-form-item>
            <div class="divide ml-2 mt-4 mb-4"></div>
            <el-button type="primary" class="mt-4 ml-16">保存修改</el-button>
          </el-form>
        </div>
        <div
          class="user-portrait pl-16 flex flex-col flex-wrap items-center mt-4"
        >
          <div class="mb-2">
            <img
              class="rounded-full"
              src="https://p3-passport.byteimg.com/img/user-avatar/432fdb14401df56cb269f69dd08c95b7~100x100.awebp"
            />
          </div>
          <div class="text-sm mb-2">我的头像</div>
          <div class="text-xs text-gray-500 leading-5">
            支持 jpg、png、jpeg 格式大小 5M 以内的图片
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      activeName: "first",
      labelPosition: "left",
      form: {
        desc: "",
      },
      text: "",
      textarea: "",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.personal-info {
  width: 900px;
  min-height: 550px;
}
.divide {
  width: 100%;
  border-top: 1px solid #eaeaea;
}
.user-info {
  width: 560px;
}
.user-portrait {
  width: 186px;
}
.el-input {
  width: 440px;
}
/deep/ .el-input__inner,
/deep/ .el-textarea__inner {
  background-color: #fafafa;
}
/deep/ .el-tabs__header,
/deep/ .el-tabs__content {
  background: white;
}
/deep/ .el-input__inner:hover,
/deep/ .el-textarea__inner:hover {
  background-color: #e5e6eb;
}
/deep/ .el-input__count .el-input__count-inner {
  background: transparent;
}
/deep/ .el-textarea .el-input__count {
  background: transparent;
}
</style>
