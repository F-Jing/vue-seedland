<template>
  <div class="wrapper">
    <div class="header">
      <img class="logo" src="./../../images/logo.png" />
      <span class="blank"></span>
      <el-menu
        :default-active="path"
        :router="true"
        class="el-menu-demo el-menu-demo-disappear"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
      >
        <template v-for="(item, index) in allRoutes">
          <el-submenu :index="item.path" :key="index" v-if="hasChild(item)">
            <template slot="title">{{ item.meta.nav.title }}</template>
            <el-menu-item
              v-for="itemChild in item.children"
              :index="itemChild.path"
              :key="itemChild.name"
              :id="itemChild.name"
            >
              <span v-if="itemChild.meta">{{itemChild.meta.nav.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
      <div class="lang-section">
        <span class="lang-en">EN</span>
        &nbsp;/&nbsp;
        <span class="lang-cn">CN</span>
      </div>
    </div>
    <div class="landing-content">
      <p class="landing-title">THE&nbsp;&nbsp;FUTURE</p>
      <p class="landing-title">IS&nbsp;&nbsp;HERE</p>
      <p class="landing-subtitle">未来•就在眼前</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: this.$route.path,
      allRoutes: []
    };
  },
  methods: {
    hasChild(route) {
      const CHILD = route.children || [];
      return CHILD.some(data => data.meta && data.meta.nav);
    },
    navigator() {
      this.$store.commit("navigator");
      this.allRoutes = this.$store.state.allRoutes;
      return this.allRoutes
    }
  },
  created() {
    // window.onresize = () => {
    //   console.log(window.innerHeight);
    // };
    if(!this.allRoutes.length){
      console.log(this.allRoutes.length)
      this.navigator();
    }
  },
  watch: {
    $route(to) {
      this.path = to.path;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 108px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
}
.logo {
  width: 14.5%;
  min-width: 175px;
  margin: 0 0 0 4%;
}
.blank {
  flex: 1;
}
@media screen and (max-width: 1070px) {
  .el-menu-demo-disappear {
    display: none;
  }
  .lang-section {
    flex: 1;
    text-align: right;
  }
}
.lang-section {
  margin: 0 4% 0 10px;
  padding-right: 50px;
  color: #66a8b4;
  font-size: 18px;
}
/deep/.el-menu-demo {
  border-bottom: none !important;
  .is-opened,
  .el-submenu {
    background-color: transparent !important;
    .el-submenu__title {
      clear: both;
      background-color: transparent !important;
      font-size: 18px !important;
      .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
}
/deep/.el-menu-demo {
  border-bottom: none !important;
  .is-opened,
  .el-submenu {
    background-color: transparent !important;
    .el-submenu__title {
      clear: both;
      background-color: transparent !important;
      font-size: 18px !important;
      .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
}
.landing-content {
  width: 50%;
  min-width: 415px;
  padding-top: 120px;
  float: right;
  -webkit-font-smonthing: antialiased;
  .landing-title,
  .landing-subtitle {
    color: #fff;
    font-size: 51px;
    font-weight: normal;
    letter-spacing: 8px;
  }
  .landing-subtitle {
    font-size: 35px;
    margin-top: 21px;
  }
}
</style>
<style lang="less">
.el-menu--horizontal {
  .el-menu,
  .el-menu--popup {
    transform: translateX(calc((672px / 6 - 100%) / 2));
    color: #fff;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5) !important;
    min-width: 0;
    text-align: center;
    .el-menu-item {
      font-size: 16px;
      padding: 5px 20px;
      height: auto !important;
      &:hover {
        background: hsla(0, 0%, 100%, 0.3) !important;
      }
    }
  }
}
</style>
