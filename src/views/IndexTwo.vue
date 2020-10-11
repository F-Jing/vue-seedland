<template>
  <div class="index-wisdom">
    <h2 class="index-wisdom-title">
      匠心筑就智慧人居精品
      <i>CRAFTSMANSHIP CREATES QUALITY LIFE PRODUCTS</i>
    </h2>
    <div class="index-wisdom-content">
      <p class="index-wisdom-info">
        实地地产集团有限公司，2006年从广州出发，始于地产而不止于地产。14年来，实地一直致力于将人类科技的一切探索创新以人居业态为依托运用于生活中的方方面面，将科技与人文连接，重新构建人类对于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期智慧人居解决方案的综合性企业。
      </p>
      <p class="index-wisdom-info">
        实地集团现已覆盖全国六大最具成长力城市群，在33城全面绽放。每落子一地，均从区域先天资源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生活解决方案，为每座城市打造专属的人居经典。
      </p>
      <p class="index-wisdom-info">
        实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建智慧人居生态系统，为用户打造美好生活体验的同时，引领行业发展方向，提升城市整体的人居品质。
      </p>
    </div>
    <bigButton @click.native="toAbout" class="big-button"></bigButton>
  </div>
</template>
<script>
import bigButton from "@/components/button.vue";
export default {
  methods: {
    toAbout() {
      this.$router.push({ name: "aboutSeedLand" });
    }
  },
  components: {
    bigButton
  }
};
</script>
<style lang="less" scoped>
.index-wisdom {
  height: 100vh;
  min-height: 740px;
  padding: 0 13%;
  min-width: 860px;
  background-color: rgba(0, 0, 0, 0.5);
  .index-wisdom-title {
    padding-top: 12%;
    font-size: 38px;
    line-height: 58px;
    letter-spacing: 2px;
    color: #fff;
    display: block;
    i {
      font-size: 30px;
      display: block;
    }
  }
  .index-wisdom-content {
    margin-top: 50px;
    .index-wisdom-info {
      text-align: justify;
      letter-spacing: 0.8px;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 28px;
      color: #fff;
    }
  }
}
</style>
