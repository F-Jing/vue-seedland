<template>
  <div class="index-footer">
    <el-row>
      <el-col
        class="nav-section"
        v-for="(item, index) in allRoute"
        :key="index"
        :span="4"
      >
        <div class="grid-content nav bg-purple">{{ item.meta.nav.title }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        class="subnav-section"
        v-for="items in allRoutes"
        :key="items.path"
        :span="4"
      >
        <div
          v-for="child in items.children"
          :key="child.name"
          class="grid-content subnav bg-purple"
        >
          <span
            @click="toPath(child.path)"
            class="child-meta"
            v-if="child.meta"
            >{{ child.meta.nav.title }}</span
          >
        </div>
      </el-col>
    </el-row>
    <el-row class="other">
      <el-col class="copyright-section" :span="19">
        <p class="grid-content copyright bg-purple">
          ©2020版权所有：实地地产集团有限公司
        </p>
        <p class="copyright">
          ALL RIGHTS RESERVED: GUANGZHOU SEEDLAND REAL ESTATE DEVELOPMENT CO.,
          LTD
        </p>
        <p class="copyright">粤ICP备13058296号-1</p>
      </el-col>
      <el-col class="friend-section" :span="5">
        <el-select
          style="width:100%"
          v-model="value"
          :placeholder="options[0].label"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "友情链接"
        },
        {
          value: "选项2",
          label: "哈奇智能"
        },
        {
          value: "选项3",
          label: "37度智能家居"
        },
        {
          value: "选项4",
          label: "全球智慧生活创想者大奖"
        }
      ],
      value: "",
      allRoutes: []
    };
  },
  created() {
    this.navigator();
  },
  methods: {
    navigator() {
      this.allRoute = this.$store.state.allRoutes;
    },
    toPath(n) {
      this.$router.push(n);
    }
  }
};
</script>
<style lang="less" scoped>
.index-footer {
  width: 100%;
  height: 600px;
  background-color: #1c495b;
  .el-row {
    padding: 4% 13% 0;
    .nav-section {
      box-sizing: border-box !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 30px;
      height: 55px;
      .nav {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 20px;
        color: #fff;
        letter-spacing: 1px;
      }
    }
    .subnav-section {
      .subnav {
        color: #fff;
        font-size: 14px;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease-out;
        white-space: nowrap;
        &:hover {
          color: rgb(1, 89, 167);
        }
      }
    }
  }
  .other {
    padding: 24px 13% !important;
    margin-top: 7% !important ;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
    .copyright-section {
      font-size: 14px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.5);
    }
    .friend-section {
      /deep/.el-select {
        max-width: 500px !important;
        /deep/.el-input__inner {
          color: rgba(255, 255, 255, 0.5);
          border: solid 1px rgba(242, 242, 242, 0.3) !important;
          border-radius: 0 !important;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-popper {
  width: calc(15.4%) !important;
  min-width: 0 !important;
  background-color: transparent;
  border: solid 1px rgba(242, 242, 242, 0.3);
  border-radius: 0;
  border-top: 0;
  margin-top: 0 !important;
  .popper__arrow {
    display: none;
  }
  .el-select-dropdown__list {
    padding: 0;
    .el-select-dropdown__item {
      height: auto !important;
      line-height: 18px !important;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      background-color: transparent;
      &:hover {
        background-color: blue;
        color: #fff;
      }
    }
  }
}
</style>
