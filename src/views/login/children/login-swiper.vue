<template>
  <div class="login-swiper">
    <el-carousel
      :interval="5000"
      arrow="always"
      height="100vh"
      :autoplay="false"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "loginSwiper",
};
</script>

<style>
.login-swiper {
  width: 550px;
}

.el-carousel__item h3 {
  font-size: 18px;
  line-height: 100vh;
  margin: 0;
  text-align: center;
  color: #fff;
}

.el-carousel__item:nth-child(2n) {
  background: linear-gradient(to bottom, #17243c, #012e84);
}
.el-carousel__item:nth-child(2n + 1) {
  background: linear-gradient(to top, #17243c, #012e84);
}

.el-carousel__button {
  width: 6px;
  height: 6px;
  border-radius: 6px;
}
</style>
