<template>
  <div class="index-house">
    <!-- <div>{{a}}</div> -->
    <el-row>
      <el-col v-for="(item, index) in houseUrl" :key="index" :span="6">
        <!-- <div class="grid-content bg-purple" :style="{backgroundImage: `url(${item})`}"> -->
        <div class="grid-content bg-purple">
          <div class="index-house-content">
            <h2>{{ item[1] }}</h2>
            <h3>{{ item[2] }}</h3>
            <p>{{ item[3] }}</p>
          </div>
          <img
            :width="screenPercent >= imgPercent ? '100%' : 'auto'"
            :height="screenPercent > imgPercent ? 'auto' : '100%'"
            :class="item[0]"
            class="house"
            :src="item[0]"
          />
        </div>
      </el-col>
    </el-row>
    <bigButton @click.native="toHouses" />
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import houseOne from "./../../images/house-one.jpg";
import houseTwo from "./../../images/house-two.jpg";
import houseThree from "./../../images/house-three.jpg";
import houseFour from "./../../images/house-four.jpg";
import bigButton from "@/components/button.vue";
export default {
  data() {
    return {
      houseUrl: [
        [houseOne, "— 01", "紫薇公馆·广州"],
        [houseTwo, "— 02", "紫薇公馆·安阳"],
        [houseThree, "— 03", "蔷薇公馆·重庆", "ROSE INTERNATIONAL"],
        [houseFour, "— 04", "常春藤·广州", "BOSTON LVY"]
      ],
      screenPercent:
        document.documentElement.clientWidth /
        4 /
        document.documentElement.clientHeight,
      imgPercent: 480 / 980,
      timer: true
    };
  },
  components: {
    bigButton
  },
  mounted() {
    // window.addEventListener('resize',this.screenPercent);
    window.onresize = () => {
      return (() => {
        this.screenPercent =
          document.documentElement.clientWidth /
          4 /
          document.documentElement.clientHeight;
      })();
    };
  },
  watch: {
    screenPercent(val) {
      if (!this.timer) {
        this.screenPercent = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  beforeCreated: function() {
    this.$nextTick(function() {
      this.createDocument = this.getPercent;
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.reload);
  },
  methods: {
    toHouses() {
      this.$router.push({ name: "houses" });
    },
    reload() {
      this.screenPercent =
        document.documentElement.clientWidth /
        4 /
        document.documentElement.clientHeight;
      this.$nextTick(() => {
        this.render =
          document.documentElement.clientWidth /
          4 /
          document.documentElement.clientHeight;
      });
    },
    getPercent() {
      this.screenPercent =
        document.documentElement.clientWidth /
        4 /
        document.documentElement.clientHeight;
    }
  },
  computed: {
    a() {
      return (
        this.screenPercent,
        111,
        this.imgPercent,
        this.screenPercent > this.imgPercent
      );
    }
  }
};
</script>
<style lang="less" scoped>
.index-house {
  min-height: 740px;
  height: 100vh;
  .grid-content {
    position: relative;
    overflow: hidden;
    min-height: 740px;
    height: 100vh !important;
    .house {
      min-height: 740px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        transform: scale(1.2);
      }
    }
    .index-house-content {
      font-size: 18px;
      z-index: 10;
      color: #fff;
      position: absolute;
      top: 15%;
      letter-spacing: 1px;
      text-align: left;
      overflow: hidden;
      min-width: 205px;
      cursor: pointer;
      h2 {
        margin-bottom: 30px;
        color: rgba(255, 255, 255, 0.5);
      }
      h3 {
        // font-size: 30px;
        overflow: hidden;

        letter-spacing: 2px;
        line-height: 58px;
      }
      p {
        font-size: 20px;
        overflow: hidden;
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .index-house-content {
    left: 5%;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
}
@media screen and (max-width: 1289px) and (min-width: 1024px) {
  .index-house-content {
    left: 8%;
  }
  h3 {
    font-size: 34px;
  }
  p {
    font-size: 22px;
  }
}
@media screen and (min-width: 1289px) {
  .index-house-content {
    left: 15%;
  }
  h3 {
    font-size: 40px;
  }
  p {
    font-size: 26px;
  }
}
</style>
