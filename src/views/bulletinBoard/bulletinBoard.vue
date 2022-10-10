<template>
  <div class="content">
    <!-- 头部信息栏 -->
    <div class="board-header flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="board-title text-white pl-2 pr-2 ml-4">
          【模板】🐤 每周ToDo
        </h3>
        <div class="board-icon ml-2 text-xl text-center text-white">
          <i class="el-icon-star-off"></i>
        </div>
        <div class="board-icon ml-2 mr-2 text-xl text-center text-white">
          <i class="el-icon-document"></i>
        </div>
        <!-- 用户头像 -->
        <div class="portrait relative ml-2 flex items-center justify-center">
          <img
            class="portrait-img"
            src="https://kanban.oss-cn-hangzhou.aliyuncs.com/6343c47f55f8e4118cd353fa.633110ec06c06125088f9ca71665385599363"
            alt=""
          />
          <i
            class="text-sm small-portrait el-icon-s-custom absolute -bottom-1 -right-0.5"
          ></i>
        </div>
        <!-- 邀请新成员 -->
        <button
          type="button"
          class="text-white text-sm invite-member ml-4 pl-4 pr-4"
        >
          邀请新成员
        </button>
      </div>
      <!-- 右边的三个按钮图标 -->
      <div class="flex items-center">
        <div class="mr-4 choose-icon text-center">
          <i class="el-icon-connection text-white text-xl"></i>
        </div>
        <div class="mr-4 choose-icon text-center">
          <i class="el-icon-share text-white text-xl"></i>
        </div>
        <div class="mr-4 choose-icon text-center">
          <i class="el-icon-setting text-white text-xl"></i>
        </div>
      </div>
    </div>
    <!-- 拖拽看板 -->
    <div class="drag-board flex">
      <div class="board-item hover:bg-gray-200 rounded-2xl mt-2 p-4">
        <!-- 标题栏 -->
        <div class="title-block mt-1 mb-2 flex items-center justify-between">
          <div>
            ✅ x月完成
            <span class="text-gray-400">(3)</span>
          </div>

          <div>
            <i class="el-icon-more transform rotate-90 cursor-pointer"></i>
          </div>
        </div>
        <!-- 看板内容 -->
        <div class="board-content">
          <!-- 上-看板条目 -->
          <div class="board-items">
            <!-- 插画练习 -->
            <div class="illustration-practice p-2">
              <!-- 设置图标 -->
              <div class="text-right">
                <i class="el-icon-more transform rotate-90 cursor-pointer"></i>
              </div>
              <div class="illustration-img">
                <img src="../../assets/kanban.png" />
              </div>
              <div class="mb-2 text-xs yellow-text text-center text-white">
                插画练习
              </div>
              <div class="text-sm mb-1">👩🏻‍🎨插画练习 4次</div>
              <div class="flex items-center">
                <div class="ml-2 mr-2">
                  <i class="el-icon-paperclip text-sm text-gray-500">&nbsp;1</i>
                </div>
                <div class="text-sm text-gray-500">
                  <i class="el-icon-document-checked"></i>
                  1/4
                  <i class="el-icon-caret-right"></i>
                </div>
              </div>
            </div>
            <div class="ceshi mt-2">xxxx项目</div>
            <div class="ceshi mt-2">xxxx项目</div>
          </div>
          <!-- 下-添加卡片 -->
          <div class="add-card"></div>
        </div>
      </div>
      <div class="board-item hover:bg-gray-200 rounded-2xl mt-2 p-4">
        <span class="cursor-pointer text-self-blue" @click="showInput">
          <i class="el-icon-plus"></i>
          添加列表
        </span>
        <div class="flex flex-wrap justify-end">
          <input class="overflow-hidden rounded-xl outline-none p-2 w-full" />
          <el-button type="text">取消</el-button>
          <el-button
            type="primary"
            round
            class="bg-self-blue tracking-widest w-16 text-justify"
            size="small"
            >添加</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ceshi {
  border: 1px solid green;
}
.content {
  background: rgb(245, 246, 248);
}
.board-header {
  width: 100%;
  height: 40px;
  background-color: rgb(240, 138, 93);
}
.board-title {
  width: 180px;
  height: 32px;
  line-height: 32px;
}
.board-title:hover,
.board-icon:hover,
.choose-icon:hover {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
}
.board-icon {
  width: 28px;
  height: 28px;
  line-height: 28px;
}
.portrait {
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
}
.small-portrait {
  color: #5487f8;
}
.portrait-img {
  width: 20px;
  height: 20px;
}
.invite-member {
  cursor: pointer;
  border: none;
  height: 28px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  line-height: 28px;
}
.choose-icon {
  width: 28px;
  height: 28px;
  line-height: 28px;
}
.drag-board {
  width: 100%;
  height: 100%;
}
.board-item {
  width: 300px;
  height: 700px;
}
.title-block {
  height: 32px;
}
.board-content {
  width: 275px;
}
.illustration-practice {
  width: 256px;
  height: 340px;
  border-radius: 10px;
  background-color: white;
}
.illustration-img {
  width: 232px;
  height: 232px;
}
.yellow-text {
  width: 50px;
  height: 18px;
  background-color: #ffca19;
  line-height: 18px;
  border-radius: 5px;
}
</style>
