<template>
  <div class="content">
    <van-tabs :border="false">
      <van-tab title="优惠信息">
        <p class="title">套餐专享</p>
        <!-- 套餐组件 -->
        <Discount></Discount>
      </van-tab>
      <van-tab title="用户评论">
        <p class="title">用户评论</p>
        <!-- 评论组件 -->
        <Comment></Comment>
      </van-tab>
      <van-tab title="商家信息">
        <p class="title">商家信息</p>
        <!-- 店铺信息组件 -->
        <Info></Info>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Discount from "./content/discount";
import Comment from "./content/comment";
import Info from "./content/info";
export default {
  data() {
    return {};
  },
  components: {
    Discount,
    Comment,
    Info
  }
};
</script>
<style lang="less" scoped>
/deep/.van-tab {
  font-size: 3.6vw;
}
.title {
  font-size: 3.5vw;
  font-weight: 600;
  padding-left: 5vw;
  margin-top: 3vh;
  border-bottom: 1px solid #e9e9e9;
}
</style>
