<template>
  <div>
    <p class="title">我的订单</p>
    <van-tabbar :border="false" :fixed="false" inactive-color="#ff8d1a" active-color="#ff8d1a">
      <van-tabbar-item v-for="(i,index) in list" :key="i.id" @click="getName(index)">
        <van-tabbar-item :icon="i.icon">{{i.id}}</van-tabbar-item>
      </van-tabbar-item>
    </van-tabbar>
    <p class="title near">最近订单</p>
    <Tabbar/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: "待付款",
          url: "home",
          icon: "coupon-o",
          ref: "home"
        },
        {
          id: "待使用",
          url: "nearby",
          icon: "tosend"
        },
        {
          id: "待评价",
          url: "find",
          icon: "comment-o"
        },
        {
          id: "退款/售后",
          url: "order",
          icon: "balance-o"
        },
        {
          id: "全部",
          url: "my",
          icon: "apps-o"
        }
      ],
      name: ""
    };
  },
  methods: {
    getName(index) {
      localStorage.setItem("index", index);
      this.$router.push("/order/myorder");
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  height: 5vh;
  font-size: 4vw;
  text-align: center;
  line-height: 7vh;
  font-weight: 600;
}
.near {
  text-align: left;
  padding-left: 4.5vw;
}
/deep/.van-tabbar {
  height: 8.8vh;
  .van-tabbar-item {
    .van-tabbar-item__icon {
      font-size: 5vw;
    }
    font-size: 3.5vw;
  }
}
</style>
