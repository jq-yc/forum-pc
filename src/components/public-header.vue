<template>
  <div>
    <!-- 上 -->
    <div class="header-top">
      <div>
        <img
          src="http://front.dev.toimc.com:22500/img/logo-2.c66f7210.png"
          alt=""
        />
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
        <svg class="icon icon-profile" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <router-link to="./login">登入</router-link>
        <router-link to="">注册</router-link>
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
    <!-- 下 -->
    <div class="header-bottom">
      <div>
        <router-link to="" class="home-nav">首页</router-link>
        <router-link to="" class="home-nav">提问</router-link>
        <router-link to="" class="home-nav">分享</router-link>
        <router-link to="" class="home-nav">讨论</router-link>
        <router-link to="" class="home-nav">建议</router-link>
        <router-link to="" class="home-nav">公告</router-link>
        <router-link to="" class="home-nav">动态</router-link>
      </div>
      <div class="publish-btn">
        <span
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use></svg
        ></span>
        <el-button type="primary">发表新帖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393d49;
  color: white;
  height: 60px;
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
</style>
