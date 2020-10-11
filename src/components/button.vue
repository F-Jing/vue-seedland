<template>
  <button class="index-wisdom-btn">
    <slot>
      <div class="index-wisdom-btn-left">
        <p class="index-wisdom-btn-en">EXPLORE MORE</p>
        <p class="index-wisdom-btn-cn">了解更多</p>
      </div>
      <div class="index-wisdom-btn-right">
        <div class="right-arrow"></div>
        <div class="right-arrow-up"></div>
        <div class="right-arrow-down"></div>
      </div>
    </slot>
    <span class="index-wisdom-btn-plus one">+</span>
    <span class="index-wisdom-btn-plus two">+</span>
    <span class="index-wisdom-btn-plus three">+</span>
    <span class="index-wisdom-btn-plus four">+</span>
  </button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toHouse() {
      this.$emit("toHouse");
    }
  }
};
</script>
<style lang="less" scoped>
.index-wisdom-btn {
  outline: none;
  position: absolute;
  background-color: transparent;
  border: 1px solid #fafafa;
  padding: 8px 25px;
  width: 252px;
  height: 63px;
  color: #fff;
  left: 50%;
  bottom: 12%;
  transform: translateX(-50%);
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 100%, 0.4);
    transition: all 0.6s;
  }
  .index-wisdom-btn-left {
    font-size: 16px;
    float: left;
    vertical-align: top;
    text-align: left;
    .index-wisdom-btn-en {
      letter-spacing: 3px;
      padding-bottom: 5px;
      font-size: 14px;
    }
  }
  .index-wisdom-btn-right {
    .right-arrow {
      border-bottom: 2px solid #fafafa;
      margin-top: 29px;
      position: absolute;
      width: 52px;
      right: 20px;
      top: 0;
    }
    .right-arrow-up {
      border-bottom: 2px solid #fafafa;
      width: 12px;
      position: absolute;
      transform: rotate(32deg);
      right: 20px;
      top: 26px;
    }
  }
  .index-wisdom-btn-plus {
    position: absolute;
    font-size: 18px;
    &.one {
      top: -10.8px;
      left: -6.5px;
    }
    &.two {
      top: -10.8px;
      right: -6.5px;
    }
    &.three {
      bottom: -10.8px;
      left: -6.5px;
    }
    &.four {
      bottom: -10.8px;
      right: -6.5px;
    }
  }
}
</style>
