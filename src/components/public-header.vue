<template>
  <div class="bg-white mb-4">
    <!-- 上 -->
    <div class="public-header">
      <div class="header-top">
        <div>
          <!-- <img
            src="http://front.dev.toimc.com:22500/img/logo-2.c66f7210.png"
            alt=""
          /> -->
          <img class="w-60" :src="require('@/assets/goudaner.png')" alt="" />
        </div>
        <div class="top-menu">
          <div class="menu-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiaoliu"></use></svg
            ><span>交流</span>
          </div>
          <div class="menu-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mingxinganli"></use></svg
            ><span>案例</span>
          </div>
          <div class="menu-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-uicn"></use></svg
            ><span>框架</span>
          </div>
        </div>
        <div class="header-right">
          <el-dropdown class="dropdown-menu" trigger="click" v-if="!!nickname">
            <!-- <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span> -->
            <svg class="icon icon-profile" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
            <el-dropdown-menu slot="dropdown">
              <div class="personal-info">
                <!-- 头像-昵称-矿石 -->
                <div class="portrait flex items-center mb-3">
                  <img
                    class="w-12 rounded-full mr-3"
                    src="https://p3-passport.byteimg.com/img/user-avatar/432fdb14401df56cb269f69dd08c95b7~100x100.awebp"
                  />
                  <div>
                    <div class="text-sm mb-2">是我吖</div>
                    <div class="text-xs">
                      矿石:<span>2.5w</span><i class="el-icon-arrow-right"></i>
                    </div>
                  </div>
                </div>
                <!-- 等级 -->
                <div class="grade">
                  <div class="text-xs flex justify-between">
                    <div>
                      掘友等级
                      <span class="inline-block">JY.3</span>
                    </div>
                    <div>
                      <span> 97.1 / 150 </span>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </div>
                  <div class="progress-bar relative">
                    <div class="pace absolute"></div>
                  </div>
                </div>
                <!-- 关注-赞过-收藏 -->
                <div class="attention flex justify-around mb-4">
                  <div class="flex flex-col items-center mb-2">
                    <div class="text-base">1</div>
                    <div class="text-xs text-gray-400">关注</div>
                  </div>
                  <div class="flex flex-col items-center mb-2">
                    <div class="text-base">1</div>
                    <div class="text-xs text-gray-400">赞过</div>
                  </div>
                  <div class="flex flex-col items-center mb-2">
                    <div class="text-base">1</div>
                    <div class="text-xs text-gray-400">收藏</div>
                  </div>
                </div>
                <!-- 功能列表 -->
                <div
                  class="function-list flex justify-between flex-wrap pb-2 mb-3"
                >
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-sunny mr-2"></i>
                    <span class="text-xs">我的主页</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-present mr-2"></i>
                    <span class="text-xs">成长福利</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-date mr-2"></i>
                    <span class="text-xs">计划看板</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-bicycle mr-2"></i>
                    <span class="text-xs">会员中心</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-alarm-clock mr-2"></i>
                    <span class="text-xs">课程中心</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-apple mr-2"></i>
                    <span class="text-xs">我的优惠</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-sugar mr-2"></i>
                    <span class="text-xs">我的报名</span>
                  </div>
                  <div class="flex items-center h-8">
                    <i class="text-gray-500 el-icon-ship mr-2"></i>
                    <span class="text-xs">我的足迹</span>
                  </div>
                </div>
                <!-- 设置-退出登录 -->
                <div
                  class="settings text-xs text-gray-400 flex justify-between items-center"
                >
                  <div @click="toSettings()">我的设置</div>
                  <div @click="logout()">退出登录</div>
                </div>
              </div>
            </el-dropdown-menu>
          </el-dropdown>

          <div v-if="nickname">{{ nickname }}</div>
          <div v-else>
            <router-link to="./login" class="mr-2">登入</router-link>
            <router-link to="">注册</router-link>
          </div>

          <a href=""
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ"></use></svg
          ></a>
          <a href="">
            <svg class="icon" aria-hidden="true">
              <use
                xlink:href="#icon-social-weibo
"
              ></use></svg
          ></a>
        </div>
      </div>
    </div>
    <!-- 下 -->
    <div class="header-bottom">
      <div>
        <router-link to="/" class="home-nav">首页</router-link>
        <router-link to="" class="home-nav">沸点</router-link>
        <router-link to="" class="home-nav">课程</router-link>
        <router-link to="" class="home-nav">直播</router-link>
        <router-link to="" class="home-nav">活动</router-link>
        <router-link to="" class="home-nav">商城</router-link>
      </div>
      <div class="publish-btn">
        <span
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use></svg
        ></span>
        <el-button type="primary" @click="publish()">发表新帖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    publish() {
      this.$router.push("/publish");
    },
    toSettings() {
      this.$router.push("./setting");
    },
    logout() {
      this.$store.commit("SET_USERINFO", {});
      localStorage.setItem("setToken", "");
    },
  },
  computed: {
    nickname() {
      return this.$store.state.userInfo?.nickname;
    },
  },
};
</script>

<style scoped>
/* .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
} */
.el-icon-arrow-down {
  font-size: 12px;
}
.personal-info {
  width: 224px;
  height: 385px;
  padding: 20px;
  border: 1px solid #e4e6eb;
  border-radius: 4px;
  cursor: pointer;
}
.el-dropdown-menu {
  padding: 0;
}
.grade {
  display: block;
  font-size: 12px;
  color: #1e80ff;
  line-height: 18px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px 8px 8px;
  background: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/progress-bar.a63566c.png)
    no-repeat;
  background-size: 100% 100%;
  margin-bottom: 16px;
}
.progress-bar {
  height: 5px;
  border-radius: 4px;
  background: rgba(30, 128, 255, 0.2);
}
.pace {
  width: 130px;
  height: 5px;
  background: #1e80ff;
  border-radius: 4px;
  left: 0;
}
.attention {
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
}
.function-list {
  color: #252933;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
}
.public-header {
  background-color: #393d49;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  max-width: 1200px;
  margin: auto;
}
.top-menu {
  display: flex;
}
.menu-item {
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 8px;
  font-size: 22px;
}
.icon-profile {
  font-size: 36px;
}
.header-right {
  display: flex;
  align-items: center;
  min-width: 280px;
  justify-content: space-evenly;
}
.header-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 15px;
  max-width: 1200px;
  margin: auto;
}
.home-nav {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
}
.publish-btn {
  display: flex;
  align-items: center;
}
.dropdown-menu {
}
</style>
