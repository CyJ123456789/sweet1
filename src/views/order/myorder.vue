<template>
  <div>
    <!-- 返回上一页 -->
    <p class="return" @click="returnPage">
      <span class="iconfont icon-zuo"></span>
      我的订单
    </p>
    <!-- 标签 -->
    <van-tabs v-model="active" :border="false">
      <van-tab title="全部">
        <All></All>
      </van-tab>
      <van-tab title="待付款">
        <WaitPay></WaitPay>
      </van-tab>
      <van-tab title="待使用">
        <WaitUse></WaitUse>
      </van-tab>
      <van-tab title="待评价">
        <WaitRate></WaitRate>
      </van-tab>
      <van-tab title="退款/售后">
        <Refund></Refund>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import All from "./all";
import WaitPay from "./waitPay";
import WaitUse from "./waitUse";
import WaitRate from "./waitRate";
import Refund from "./refund";

export default {
  data() {
    return {
      active: ""
    };
  },
  created() {
    this.activeVal();
  },
  methods: {
    //   获得用户进入是点击的标签索引
    activeVal() {
      this.active = parseInt(localStorage.getItem("index")) + 1;
      if (this.active == 5) {
        this.active = 0;
      }
    },
    // 返回上一页
    returnPage() {
      this.$router.push("/order");
    }
  },
  components: {
    All,
    WaitPay,
    WaitUse,
    WaitRate,
    Refund
  }
};
</script>
<style lang="less" scoped>
// 返回上一页
.return {
  height: 6vh;
  padding-left: 3vw;
  font-size: 3.5vw;
  line-height: 6vh;
  font-weight: 600;
  .iconfont {
    font-size: 3.5vw;
  }
}
</style>
