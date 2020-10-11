<template>
  <div class="honor-section">
    <el-row :gutter="18">
      <el-col :span="18">
        <div class="grid-content main-img"></div>
      </el-col>
      <el-col :span="6">
        <div @click="toPath('2020-09-04')" class="grid-content img-info">
          <p class="honor-time">2020-09-04</p>
          <p class="honor-info">
            获绽放杯广东赛区一等奖 实地集团打造5G智慧社区标杆
          </p>
          <smallBtn class="small-btn">
            <p class="explore">EXPLORE</p>
          </smallBtn>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="18">
      <el-col
        class="grid-list"
        v-for="item in honorItems"
        :key="item.timeItem"
        :span="6"
      >
        <div @click="toPath(item.timeItem)" class="grid-content bg-purple">
          <p class="honor-time-item">{{ item.timeItem }}</p>
          <p class="honor-info-item">{{ item.infoItem }}</p>
          <smallBtn class="small-btn">
            <p class="explore">EXPLORE</p>
          </smallBtn>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import smallBtn from "@/components/button.vue";
export default {
  data() {
    return {
      honorItems: [
        {
          timeItem: "2020-08-28",
          infoItem: "深耕强区积极拿地 实地集团荣获“2020年中国最具潜力价值房企”"
        },
        {
          timeItem: "2020-08-14",
          infoItem: "实地智慧社区全面标配智能门 一体化打造安防建设新范例"
        },
        {
          timeItem: "2020-08-13",
          infoItem: "实地集团荣获中国地产金砖奖和中国地产风尚大奖"
        },
        {
          timeItem: "2020-07-15",
          infoItem: "实地集团打通四大“孤井”打造真正以人为中心的智慧社区"
        }
      ]
    };
  },
  methods: {
    toPath(time) {
      this.$router.push(`/new1/${time}`);
    }
  },
  components: {
    smallBtn
  }
};
</script>
<style lang="less" scoped>
.small-btn {
  height: 28px;
  width: 110px;
  position: relative;
  left: 0;
  transform: none;
  padding: 0;
  letter-spacing: 2px;
}
.honor-section {
  margin: 0 13%;
  @media screen and (max-width: 1368px) {
    padding-top: 3%;
  }
  @media screen and (min-width: 1368px) and (max-width: 1680px) {
    padding-top: 9%;
  }
  @media screen and (min-width: 1680px) {
    padding-top: 12%;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .grid-list {
    &:nth-of-type(1) {
      .bg-purple {
        border-left: 0;
      }
    }
  }
  .el-col {
    .bg-purple {
      height: 240px;
      margin-top: 3.5%;
      cursor: pointer;
      box-sizing: border-box;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0 !important;
      padding-left: 10%;
      color: #fff;
      .honor-time-item {
        font-size: 16px;
      }
      .honor-info-item {
        font-size: 18px;
        max-width: 90%;
        line-height: 28px;
        margin-top: 10px;
        margin-bottom: 15px;
        overflow: hidden;
        height: 116px;
      }
    }
    .main-img {
      height: 350px;
      border-radius: 80px 0 0 0 !important;
      background: url("./../../images/robot.jpg") no-repeat scroll center/cover;
    }
    .img-info {
      box-sizing: border-box;
      color: #fff;
      padding: 40px 15% 40px 15%;
      border: 1px solid #fff;
      height: 350px;
      border-radius: 0 0 80px 0 !important;
      cursor: pointer;
      .honor-time {
        font-size: 16px;
      }
      .honor-info {
        font-size: 19px;
        margin: 10% 0;
        line-height: 28px;
      }
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      &:hover .small-btn {
        background: hsla(0, 0%, 100%, 0.4);
        transition: all 0.6s;
      }
    }
  }
}
</style>
