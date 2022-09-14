<template>
  <div class="home-wrapper">
    <publicHeader />
    <tabContent />
  </div>
</template>

<script>
import publicHeader from "@/components/public-header.vue";
import tabContent from "./children/tab-content.vue";
export default {
  name: "HomeView",
  components: {
    publicHeader,
    tabContent,
  },
};
</script>

<style scoped>
.home-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
