<template>
  <div>
    <div v-show="sidebarToggle" @click="sidebarToggle=!sidebarToggle" class="shade"></div>
    <video
      autoplay="autoplay"
      width="100%"
      height="100%"
      muted="muted"
      loop="loop"
      poster="./../../images/video.jpg"
      class="videobg"
    >
      <source src="./../../videos/video.mp4" type="video/mp4" />
    </video>
    <img
      v-show="top"
      @click="backTop"
      class="back-top"
      src="./../../images/backtop.png"
    />
    <img
      @click="[(sidebarToggle = !sidebarToggle), getNav()]"
      class="menu-icon menu-unfold"
      src="./../../images/menu.png"
    />
    <div class="sidebar" v-show="sidebarToggle">
      <el-menu
        :default-active="path"
        :router="true"
        class="el-menu-demo side-menu"
        mode="vertical"
        background-color="rgba(0,0,0,.85)"
        text-color="#fff"
      >
        <i
          @click="sidebarToggle = !sidebarToggle"
          class="el-icon-my-statistic"
          style="color:#fff"
        ></i>
        <template v-for="item in allRoutes">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">{{ item.meta.nav.title }}</template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in carouselArr"
        :key="index"
        topToggle="1"
      >
        <img
          :class="[
            item === imgLine ? 'line' : '',
            !item.url ? 'url-null' : '',
            'swiper-bg'
          ]"
          :src="item.url"
        />
        <component :is="page[index]" ref="headerNav"></component>
        <!-- <template v-if="index == 0">
          <IndexOne ref="headerNav" class="index-one" />
        </template>
        <template v-if="index === 1">
          <IndexTwo class="index-two"></IndexTwo>
        </template>-->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import IndexOne from "./IndexOne.vue";
import IndexTwo from "./IndexTwo.vue";
import IndexThree from "./IndexThree.vue";
import IndexFour from "./IndexFour.vue";
import IndexFive from "./IndexFive.vue";
import IndexSix from "./IndexSix.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      path: "",
      topToggle: [],
      page: [IndexOne, IndexTwo, IndexThree, IndexFour, IndexFive, IndexSix],
      allRoutes: [],
      sidebarToggle: false,
      top: 0,
      swiperOption: {
        direction: "vertical",
        mousewheel: true,
        speed: 1000,
        spaceBetween: -1,
        slidesPerView: "auto",
        on: {
          slideChange: () => {
            return (this.top = 1);
          },
          reachBeginning: () => {
            return (this.top = 0);
          }
        }
      },
      carouselArr: [
        { url: require("./../../images/line.png") },
        {},
        {},
        { url: require("./../../images/bk.jpg") },
        { url: require("./../../images/bk1.jpg") },
        {}
      ]
    };
  },
  methods: {
    backTop() {
      this.$refs.mySwiper.$swiper.slideTo(0, 1000, false);
    },
    getNav() {
      this.path = this.$refs.headerNav[0].path;
      this.allRoutes = this.$refs.headerNav[0].allRoutes;
    }
  },
  components: {
    // SwiperSlide,
    // Swiper,
    IndexOne,
    IndexTwo,
    IndexThree,
    IndexFour,
    IndexFive,
    IndexSix
  },
  watch: {
    activeIndex() {
      return (this.top = 1);
    }
  },
  updated() {
    this.top = this.$refs.mySwiper.$swiper.activeIndex;
  },
  computed: {
    imgLine: function() {
      return this.carouselArr[0];
    }
  }
};
</script>

<style lang="less" scoped>
.shade{
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
}
/deep/.side-menu {
  height: 100vh;
  overflow: hidden;
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
.sidebar {
  position: absolute;
  margin: auto;
  right: 0;
  width: 22%;
  min-width: 270px;
  z-index: 9999;
  .el-icon-my-statistic {
    display: block;
    width: 34px;
    height: 34px;
    float: right;
    margin: 40px 48px 0 0;
    background: url("./../../images/close.png") no-repeat scroll;
    background-size: 34px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: rotate(90deg);
    }
    &::before {
      content: "\66ff";
      font-size: 30px;
      visibility: hidden;
    }
  }
}
.menu-icon,
.back-top {
  width: 32px;
  margin-right: 4%;
  cursor: pointer;
  position: fixed;
  right: 0;
  margin-top: 54px;
  transform: translateY(-50%);
  z-index: 9999;
}
.back-top {
  bottom: 80px;
}
@media screen and (max-height: 500px) {
  .back-top {
    bottom: 0px;
  }
}
.videobg {
  position: absolute;
  z-index: -9999;
  object-fit: cover;
  min-height: 740px;
}
</style>
<style lang="less">
.swiper-container {
  width: 100%;
  height: 100vh;
  min-height: 740px;
  & .swiper-wrapper {
    .swiper-slide {
      .swiper-bg {
        &.url-null {
          opacity: 0;
        }
        position: absolute;
        height: 100vh;
        min-height: 740px;
        width: 100%;
        z-index: -9998;
      }
      .line {
        height: auto !important;
        top: 110px;
      }
      &:nth-last-child(1) {
        min-height: 600px !important;
        height: auto;
      }
    }
  }
}
</style>
