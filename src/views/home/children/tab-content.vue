<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first"
        ><list-view></list-view
      ></el-tab-pane>
      <el-tab-pane label="最新" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="热榜" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import listView from "./list-view.vue";
export default {
  components: {
    listView,
  },
  name: "TabContent",
  data() {
    return {
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

<style scoped></style>
