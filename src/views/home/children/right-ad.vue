<template>
  <div class="right-ad">
    <!-- 签到框 -->
    <div class="sign-in mb-2 p-4 ring-1 ring-gray-200 bg-white">
      <i class="el-icon-date text-xl mr-2"></i>
      <span class="text-base mr-8">晚上好!</span>
      <span class="bg-blue-100 text-sm text-center rounded-3xl">已签到</span>
      <div class="con-sign text-center text-sm mt-2">
        你已经连续签到<span class="text-base rest-day">109</span>天
      </div>
    </div>
    <!-- 掘金小册 -->
    <div class="nugget-booklet bg-white">
      <img
        class="mb-3"
        src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b12229c2903a49dcb7e4f7206f075138~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
        alt=""
      />
      <img
        class="mb-3"
        src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6d4666826e145c59c0b05b6e20a09c7~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
        alt=""
      />
    </div>
    <!-- 下载掘金APP -->
    <div
      class="bg-white download-app mb-3 flex items-center justify-around ring-1 ring-gray-200"
    >
      <img
        class="app-code"
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
        alt=""
      />
      <div class="text">
        <p class="text-sm leading-normal mb-1">下载稀土掘金APP</p>
        <p class="text-xs text-gray-400 leading-normal">
          一个帮助开发者成长的社区
        </p>
      </div>
    </div>
    <!-- 作者榜 -->
    <div class="author-list mb-3 ring-1 ring-gray-200 bg-white">
      <div class="author-title ml-2 flex items-center">
        <i class="el-icon-medal-1"></i>
        <span class="text-sm">作者榜</span>
      </div>
      <div class="author-info">
        <div class="flex p-2 items-center" v-for="item in 3" :key="item">
          <img
            class="author-portrait rounded-3xl mr-2"
            src="https://p3-passport.byteimg.com/img/user-avatar/dac9f5ba3e7b6d8015a9b37536d4ef59~100x100.awebp"
            alt=""
          />
          <div class="flex flex-col">
            <div class="flex items-center mb-1">
              <span class="text-sm">代码与野兽</span>
              <img
                class="author-level"
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png"
                alt=""
              />
            </div>
            <div class="text-xs text-gray-400">公众号@代码与野兽</div>
          </div>
        </div>
        <!-- 跳转完整榜单 -->
        <div class="link-to text-sm flex items-center justify-center">
          <span class="complete-list">完整榜单</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightAd",
};
</script>

<style scoped>
.right-ad {
  width: 240px;
}

.bg-blue-100 {
  color: #1e80f1;
  width: 72px;
  height: 32px;
  display: inline-block;
  line-height: 32px;
}
.con-sign {
  color: #4e5969;
}
.rest-day {
  color: #1d7dfa;
}
.download-app {
  height: 74px;
}
.app-code {
  width: 50px;
  height: 50px;
}
.text {
  width: 144px;
}
.author-title {
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  height: 42px;
}
.author-portrait {
  width: 45px;
  height: 45px;
}
.author-level {
  width: 35px;
  height: 18px;
}
.link-to {
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
  height: 42px;
  color: #007fff;
}
</style>
