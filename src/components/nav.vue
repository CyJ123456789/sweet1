<template>
  <div>
    <ul class="nav">
      <!-- 返回上一页 -->
      <li class="left">
        <span class="iconfont icon-zuo" @click="returnPage"></span>
      </li>
      <!-- 分享、收藏、菜单 -->
      <li class="right">
        <span class="iconfont icon-fenxiang"></span>
        <span class="iconfont icon-shoucang1"></span>
        <span class="iconfont icon-caidan"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    returnPage() {
      window.history.back();
    }
  }
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 7.78vh;
  line-height: 7.78vh;
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  li {
    display: inline-block;
  }
  .right > span {
    margin-left: 5vw;
  }
}
</style>
