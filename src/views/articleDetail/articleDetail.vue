<template>
  <div>
    <public-header></public-header>
    <div class="flex flex-wrap mx-8 justify-center">
      <div class="p-8 bg-white mx-8 flex-1 max-w-screen-md relative">
        <!-- 左侧图标列表 -->
        <div class="icon-list w-30 inline-block absolute top-20 -left-20">
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
          <div class="icon-item">
            <i class="el-icon-s-custom"></i>
          </div>
        </div>
        <div class="">
          <h1 class="text-4xl font-bold">{{ detail.title }}</h1>
          <div class="flex my-8 justify-between items-center">
            <div style="display: flex; align-items: center">
              <!-- 发布者头像 -->
              <img
                src="https://p3-passport.byteimg.com/img/user-avatar/5c043db2a8c72183bfd7eacd88bb4c53~100x100.awebp"
                class="userPortrait"
              />
              <div>
                <div style="display: flex; align-items: center">
                  <span style="font-size: 16px; color: #515767">{{
                    detail.author
                  }}</span>
                  <img
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                    style="width: 35px; height: 16px"
                  />

                  <img
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg"
                    style="width: 16px"
                  />
                </div>
                <div style="color: #8a919f; font-size: 14px; margin-top: 4px">
                  <time
                    data-v-46b316cc=""
                    datetime="2021-10-08T07:27:04.000Z"
                    title="Fri Oct 08 2021 15:27:04 GMT+0800 (中国标准时间)"
                    class="time"
                  >
                    {{ detail.createTime }}
                  </time>
                  <span> ·&nbsp;&nbsp;阅读 468077 </span>
                </div>
              </div>
            </div>
            <el-button type="primary" plain size="small">
              <i class="el-icon-plus"></i>
              <span>关注</span>
            </el-button>
          </div>
        </div>
        <hr />
        <div v-html="detail.content"></div>
      </div>

      <div class="">
        <!-- 右侧公共部分 -->
        <!-- 用户基本信息及文章被点赞和被评论数量 -->
        <div class="userArticleInfo bg-white">
          <div
            style="
              display: flex;
              align-items: center;
              border-bottom: 1px solid #e4e6eb;
              padding-bottom: 10px;
            "
          >
            <!-- 发布者头像 -->
            <img
              src="https://p3-passport.byteimg.com/img/user-avatar/5c043db2a8c72183bfd7eacd88bb4c53~100x100.awebp"
              class="userPortrait"
            />
            <div>
              <div style="display: flex; align-items: center">
                <span style="font-size: 16px; color: #515767">{{
                  detail.author
                }}</span>
                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                  style="width: 35px; height: 16px"
                />

                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ffdbad884aa0e7884cbcf924226df6ce.svg"
                  style="width: 16px"
                />
              </div>
              <div style="color: #8a919f; font-size: 14px; margin-top: 4px">
                搬砖
              </div>
            </div>
          </div>
          <div class="thumbsUp1">
            <i class="el-icon-view"></i>获得点赞
            <span>&nbsp;13,160</span>
          </div>
          <div class="thumbsUp2">
            <i class="el-icon-view"></i>文章被阅读
            <span>&nbsp;823,276</span>
          </div>
        </div>
        <!-- APP二维码 -->
        <div class="appQrCode bg-white">
          <img
            class="qrCode"
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"
          />
          <div>
            <div style="font-size: 16px; color: #252933; margin-bottom: 3px">
              下载稀土掘金APP
            </div>
            <div style="font-size: 14px; color: #8a919f">
              一个帮助开发者成长的社区
            </div>
          </div>
        </div>
        <!-- 加入掘金交流群扫码 -->
        <div class="enterGroup">
          <img
            style="width: 260px"
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from "@/api/article.js";
import publicHeader from "@/components/public-header.vue";
export default {
  components: { publicHeader },
  data() {
    return {
      id: "",
      detail: {},
    };
  },
  created() {
    this.id = this.$route.query.id;
    getArticleDetail(this.id).then((response) => {
      const { data } = response;
      if (data.data) {
        data.data.content = data.data.content.replace(/\\n/g, "<br>");
        this.detail = data.data;
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.icon-item {
  position: relative;
  margin-bottom: 16px;
  width: 48px;
  height: 48px;
  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
}

.icon-list {
  height: 428px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

hr {
  position: relative;
  width: 98%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-image: linear-gradient(
    90deg,
    #3da8f5,
    rgba(255, 0, 0, 0.3),
    hsla(0, 0%, 100%, 0.1),
    rgba(255, 0, 0, 0.3),
    #3da8f5
  );
  border-width: 0;
  overflow: visible;
}

hr:after {
  content: "";
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: inline-block;
  width: 60px;
  height: 20px;
  background-color: var(--cyanosis-bg-color);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAADoklEQVRYR82XTYgcRRTHf2933Q1RjAa9eFO8JHoJ8RQVBQ2iBwXBET0YEUTXNVmNQtTpmeqaWV0XNRq/o4KoECSCEPSg4CF+BYUkIIiCoCJCPIhC/Ihh2Z0nVV27VnZnenumW9i6ddV7//frV69fVQurfMgq56NawFTPAU6QyomqXrw6wIZeyhCPebA5buNR+akKyGoAjd6BshthnYdSjqNcRVuOlIUsD2j0SuA94IwuMHdh5ZUykOUBXfSGbmKI54EtAeYIHSZoy5dl4JxvNYBOKdW1KE8BQ8AkVk6WhasWsAiN0TX9gveXQaPP+Aytpc4u+bMI06JNohsYYYYOR2lJWtS3OKDRfcAtQfgDoI6Vo4UCGb0OmAEuDvZvYmVbEd/igC3dzDz7gQu8sPA9kJDK27mBmjqBeLjTg90PDFOjWawFFQd06kZHEfaj3LAIpTRpSXsZ5E06zEYP9sDimnAApYaV2SLZG/wjMeqAkijwW4xQJ5Gf/ZzRC8OW3hiBTGGlURRswW55Bh/Ssxljrwew8l1PQaM14GngvGDzBUKdDsMeTtgU5o8B92PFlUf3YXUrHa7Fys6lBqcCGnX15YQ2A18FyPd7Crd1A3M8C1wdbH4DD3hWeP6IEXbQkG97ajR1HPFnuPP5jFFq1OWX7hl8WM9l1AO648uNfwLk7tytMeogty+xeQ4rO3r6bdcx1nuwOGsHmaXGtPzae4uzGnLH1kQkvpdZGrHjssBZJrL+pqS05KWc8tgITAPXRzYvYOXe/C2OV43eDcRBDtIhoS2f9wzc0Cv8Wls+zoFzUC5zF0U241h5uZtPfptp6OUM8wbK+cH5GEpCS17P3fJei0Z3+npTxryJ8CPzbKMtn/ZyWbkPGl0PuFPkmkjkcb4h4R2ZLwRq1H0ALmvjkf2HwK1Y+T1PY2XABe/sHJ6MxN5lnoSpnC/UGbsTaI5phK2R7x6s3Ffk5YoDOrWm3onwJHBmEP86bPmBrsGaenNoIdnxCH+gPEhLXi0Cl1VBvyPVLSh7gEuC62yAfOIUqabWEaaiucMIk6RyqJ+Q/QM69V26jjW86Gvov/EaoyT8zRCn+Xq7PVrbx0nuYUaO9wM3WAbjCE1NEUw09Um4UV+2OKfYfu5/S19gsAzGKqm6LE5FrShbdS0ku465DjDwKA/oQht19ejqbaEVuRbiLhuHByYLjtUAZpDutzP7cYdHsPJXWbjyNVgFwQoa1WXwf4Jd9YD/Ap80+yE7+u9aAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position-x: center;
  transition: background-color 0.5s;
}

.userPortrait {
  width: 40px;
  height: 50px;
  margin: 0 6px;
}

.userArticleInfo {
  width: 260px;
  padding: 20px;
  margin-bottom: 20px;
}

.thumbsUp1,
.thumbsUp2 {
  font-size: 14px;
  color: #252933;
  display: flex;
  align-items: center;
  height: 26px;
}

.thumbsUp1 {
  margin-top: 16px;
  margin-bottom: 5px;
}

.thumbsUp1 i,
.thumbsUp2 i {
  margin-right: 12px;
}

.appQrCode {
  display: flex;
  width: 260px;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}

.qrCode {
  width: 50px;
  height: 50px;
}

.enterGroup {
}
</style>
