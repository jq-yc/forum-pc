<template>
  <div class="px-5">
    <div
      class="list-view py-3"
      v-for="item in list"
      :key="item.id"
      @click="toDetail(item.id)"
    >
      <div class="user-info">
        <span>掘金酱</span>
        <span class="mx-2">|</span>
        <span>10天前</span>
        <span class="mx-2">|</span>
        <span>前端</span>
      </div>
      <div class="list-title mb-2">{{ item.title }}</div>
      <div class="list-content mb-2 truncate">
        {{ item.content }}
      </div>
      <div class="list-handle flex text-sm">
        <div class="mr-4">
          <i class="el-icon-view mr-1"></i>
          <span>4.1w</span>
        </div>
        <div class="mr-4">
          <i class="el-icon-sunny mr-1"></i>
          <span>999</span>
        </div>
        <div class="mr-4">
          <i class="el-icon-chat-dot-round mr-1"></i>
          <span>521</span>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page.sync="pageNum"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getArticleList } from "@/api/article.js";
export default {
  name: "ListView",
  data() {
    return {
      pageSize: 5,
      pageNum: 1,
      total: 0,
      list: [],
    };
  },
  methods: {
    articleList() {
      getArticleList(this.pageSize, this.pageNum).then((response) => {
        const { data } = response;
        if (data.page) {
          this.total = data.page.count;
          this.list = data.data;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.articleList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.articleList();
    },
    toDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
  },
  created() {
    this.articleList();
  },
};
</script>

<style scoped>
.list-view {
  width: 700px;
  background-color: white;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
}
.user-info {
  height: 22px;
  margin: 5px 0;
  color: #4e5969;
  font-size: 12px;
}
.list-title {
  color: #1d2129;
  font-weight: bold;
}
.list-content {
  color: #86909c;
  font-size: 13px;
}
.list-handle {
  color: #4e5969;
}
</style>
