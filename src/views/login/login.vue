<template>
  <div>
    <!-- 轮播图 -->
    <div>
      <login-swiper />
    </div>
  </div>
</template>

<script>
import loginSwiper from "./children/login-swiper.vue";
export default {
  name: "loginView",
  components: {
    loginSwiper,
  },
};
</script>

<style></style>
