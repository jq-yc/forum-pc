<template>
  <div>
    <div class="list-view">
      <div class="user-info">
        <span>掘金酱</span>
        <span class="mx-2">|</span>
        <span>10天前</span>
        <span class="mx-2">|</span>
        <span>前端</span>
      </div>
      <div class="list-title mb-2">聊聊我在新加坡的生活和工作体验</div>
      <div class="list-content mb-2">
        本文主要分享了笔者在新加坡生活和工作了几个月以来，在租房、出行、吃饭、工作、教育等方面的生活和工作体验。
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
  </div>
</template>

<script>
export default {
  name: "ListView",
};
</script>

<style scoped>
.list-view {
  width: 900px;
  height: 140px;
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
