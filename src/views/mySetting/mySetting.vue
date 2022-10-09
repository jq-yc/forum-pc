<template>
  <div>
    <div class="flex justify-center">
      <div class="main mt-4">
        <!-- 返回个人主页 -->
        <div
          class="flex items-center pl-4 text-xs text-gray-400 pt-3 pb-3 mb-2"
        >
          <i class="el-icon-arrow-left"></i>
          <span>返回个人主页</span>
        </div>
        <!-- 选项卡 -->
        <div class="info-tab flex">
          <div class="p-2 flex flex-col">
            <router-link to="/setting/personal-info" class="text-blue-300"
              >个人资料</router-link
            >
            <router-link to="/setting/account-setting" class="text-blue-400"
              >账号设置</router-link
            >
            <router-link to="/setting/resume-manage" class="text-blue-500"
              >简历管理</router-link
            >
            <router-link to="/setting/shield-manage" class="text-blue-600"
              >屏蔽管理</router-link
            >
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 1200px;
}
.info-tab {
  height: 626px;
}
</style>
