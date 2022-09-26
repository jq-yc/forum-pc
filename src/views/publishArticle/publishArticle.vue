<template>
  <div>
    <!-- 头部 -->
    <div class="">
      <el-button type="primary" @click="post()">发布</el-button>
    </div>
    <!-- 文本区域 -->
    <div class="">
      <el-input type="text" placeholder="输入标题" v-model="title"></el-input>
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { publishArticle, upLoad } from "@/api/article.js";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  components: { Editor, Toolbar },
  data() {
    return {
      textarea: "",
      title: "",
      editor: null,
      html: "<p>hello</p>",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容...", MENU_CONF: {} },
      mode: "default", // or 'simple'
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
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
    editorInit() {
      this.editorConfig.MENU_CONF["uploadImage"] = {
        server: "http://localhost:3366/api/file/upload",
        // form-data fieldName ，默认值 'wangeditor-uploaded-image'
        fieldName: "file",
        // 单个文件的最大体积限制，默认为 2M
        maxFileSize: 1 * 1024 * 1024, // 1M

        // 最多可上传几个文件，默认为 100
        maxNumberOfFiles: 10,

        // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
        allowedFileTypes: ["image/*"],

        // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
        meta: {},

        // 将 meta 拼接到 url 参数中，默认 false
        metaWithUrl: false,

        // 自定义增加 http  header
        headers: {
          "Content-Type": "multipart/form-data;",
          Authorization: "Bearer " + localStorage.getItem("setToken"),
        },
        async customUpload(file, insertFn) {
          // file 即选中的文件
          // 自己实现上传，并得到图片 url alt href
          // 最后插入图片

          // 开始上传文件 新建一个formData
          const formData = new FormData();
          // 通过append向form对象添加数据
          formData.append("file", file);
          upLoad(formData).then((res) => {
            console.log("上传成功");
            const path = `http://localhost:3366${res.data.data.filepath}`;
            console.log(path);
            debugger;

            insertFn(path, "图片", path);
          });
        },
        // 跨域是否传递 cookie ，默认为 false
        withCredentials: true,

        // 超时时间，默认为 10 秒
        timeout: 5 * 1000, // 5 秒
        // 上传之前触发
        onBeforeUpload(file) {
          // TS 语法
          // onBeforeUpload(file) {    // JS 语法
          // file 选中的文件，格式如 { key: file }
          return file;

          // 可以 return
          // 1. return file 或者 new 一个 file ，接下来将上传
          // 2. return false ，不上传这个 file
        },

        // 上传进度的回调函数
        onProgress(progress) {
          // TS 语法
          // onProgress(progress) {       // JS 语法
          // progress 是 0-100 的数字
          console.log("progress", progress);
        },

        // 单个文件上传成功之后
        onSuccess(file, res) {
          // TS 语法
          // onSuccess(file, res) {          // JS 语法
          console.log(`${file.name} 上传成功`, res);
        },

        // 单个文件上传失败
        onFailed(file, res) {
          // TS 语法
          // onFailed(file, res) {           // JS 语法
          console.log(`${file.name} 上传失败`, res);
        },

        // 上传错误，或者触发 timeout 超时
        onError(file, err, res) {
          // TS 语法
          // onError(file, err, res) {               // JS 语法
          console.log(`${file.name} 上传出错`, err, res);
        },
      };
    },
  },
  computed: {
    author() {
      return this.$store.state.userInfo?.nickname;
    },
  },
  created() {
    this.editorInit();
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = "<p>模拟 Ajax 异步设置内容 HTML</p>";
    }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
