<template>
  <div>
    <!-- 头部 -->
    <div class="">
      <el-button type="primary" @click="post()">发布</el-button>
    </div>
    <!-- 文本区域 -->
    <div class="">
      <el-input type="text" placeholder="输入标题" v-model="title"></el-input>
      <el-input
        type="textarea"
        :rows="20"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import { publishArticle } from "@/api/article.js";
export default {
  data() {
    return {
      textarea: "",
      title: "",
    };
  },
  methods: {
    post() {
      const _data = {
        title: this.title,
        author: this.author,
        content: this.textarea,
        cover_url: "",
        type: 0,
      };
      publishArticle(_data).then((response) => {
        const { data } = response;
        if (data.data) {
          this.$message.success("发表成功，跳转至首页");
          this.$router.push("/");
        }
      });
    },
  },
  computed: {
    author() {
      return this.$store.state.userInfo?.nickname;
    },
  },
};
</script>

<style></style>
