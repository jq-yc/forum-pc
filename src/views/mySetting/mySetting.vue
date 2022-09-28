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
        <div class="info-tab">
          <el-tabs
            :tab-position="tabPosition"
            v-model="activeName"
            type="card"
            @tab-click="handleClick"
          >
            <el-tab-pane label="个人资料" name="first">个人资料</el-tab-pane>
            <el-tab-pane label="账号设置" name="second">账号设置</el-tab-pane>
            <el-tab-pane label="简历管理" name="third">简历管理</el-tab-pane>
            <el-tab-pane label="屏蔽管理" name="fourth">屏蔽管理</el-tab-pane>
          </el-tabs>
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
.main {
  width: 1200px;
  background-color: wheat;
}
.info-tab {
  background-color: yellowgreen;
}
</style>
