<template>
  <div class="smart-living">
    <div class="smart-living-title-content">
      <h2 class="smart-living-title">领&nbsp;·&nbsp;智慧人居</h2>
      <h3 class="smart-living-subtitle">SMART LIVING</h3>
    </div>
    <div class="smart-living-info">
      <p>以深邃洞察挺立时代潮头</p>
      <p>以登山越岭之势领人居新风潮</p>
    </div>
    <bigButton
      @click.native="tofilterRoute"
      ref="toWisdom"
      class="big-button"
    />
  </div>
</template>
<script>
import bigButton from "@/components/button.vue";
export default {
  data() {
    return {
      path: this.$route.path
      // filterRoutes:'',
    };
  },
  // watch:{
  //   $route(to){
  //     this.path=to.path
  //   }
  // },
  // beforeMount(){
  //   this.tofilterRoute();
  // },
  components: {
    bigButton
  },
  methods: {
    tofilterRoute() {
      this.$router.push({ name: "wisdomInfo" });
    }
  }
};
</script>
<style lang="less" scoped>
.smart-living {
  padding-top: 12%;
  margin: 0 14%;
  color: #fff;
  .smart-living-title-content {
    .smart-living-title {
      letter-spacing: 2px;
    }
    .smart-living-subtitle {
      line-height: 58px;
      font-size: 30px;
    }
  }
  .smart-living-info {
    padding-top: 3%;
    p {
      line-height: 28px;
      letter-spacing: 0.8px;
    }
  }
  .big-button {
    margin-top: 8%;
    position: relative;
    transform: initial;
    left: 0;
  }
}
@media screen and (max-width: 1290px) {
  h2 {
    font-size: 38px;
  }
}
@media screen and (max-width: 1368px) and (min-width: 1290px) {
  h2 {
    font-size: 40px;
  }
}
@media screen and (min-width: 1368px) {
  h2 {
    font-size: 46px;
  }
}
</style>
