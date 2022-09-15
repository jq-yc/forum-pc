<template>
  <div class="home-wrapper">
    <public-header />
    <div class="content flex justify-between">
      <tab-content />
      <right-ad />
    </div>
  </div>
</template>

<script>
import publicHeader from "@/components/public-header.vue";
import tabContent from "./children/tab-content.vue";
import rightAd from "./children/right-ad.vue";
export default {
  name: "HomeView",
  components: {
    publicHeader,
    tabContent,
    rightAd,
  },
};
</script>

<style scoped>
.home-wrapper {
  margin: 0 auto;
}
.content {
  width: 980px;
  margin: auto;
}
</style>
