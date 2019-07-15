<template>
  <div class="subOrder">
    <p class="retu">
      <span @click="retu" class="iconfont icon-zuo"></span>
    </p>
    <div class="bottom">
      <p class="info">
        <span>
          <img :src="list.img">
        </span>
        <span>
          <p>{{list.name}}</p>
          <br>
          <p style="color:#a3a3a3">{{list.time}}</p>
          <p style="color:#a3a3a3">
            <span>{{list.rule[0]}}&nbsp;|&nbsp;</span>
            <span>{{list.rule[1]}}&nbsp;|&nbsp;</span>
            <span>{{list.rule[2]}}</span>
          </p>
        </span>
        <span>￥{{list.price}}</span>
      </p>
      <p class="retu">
        <span>数量</span>
        <van-stepper v-model="value"/>
      </p>
      <p class="retu">
        <span>小计</span>
        <span>￥{{}}</span>
      </p>
    </div>
    <div class="bottom">
      <p class="retu">
        <span>抵用券</span>
        <span class="iconfont icon-you"></span>
      </p>
      <p class="retu">
        <span>实付金额</span>
        <span>￥{{}}</span>
      </p>
    </div>
    <p class="retu">
      <span>手机号</span>
      <span>166****6666</span>
    </p>
    <p class="sub">￥{{}}&nbsp;&nbsp;&nbsp;提交订单</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      list: {
        name: "1人独享套餐",
        img: require("../../../../assets/homImg/img490316859cb24c0.jpg"),
        time: "周一至周日",
        rule: ["免预约", "随时退", "过期自动退"],
        price: "25"
      }
    };
  },
  methods: {
    retu() {
      window.history.back();
    }
  }
};
</script>
<style lang="less" scoped>
.bottom {
  margin-bottom: 2vh;
  .info {
    display: flex;
    justify-content: space-between;
    padding: 3vw;
    background-color: #ffffff;
    border-bottom: 1px solid #f0f0f0;
    img {
      width: 17vw;
      height: 17vw;
      object-fit: cover;
    }
  }
}
.subOrder {
  height: 100vh;
  background-color: #f3f3f3;
}

.retu {
  background-color: #fff;
  height: 8vh;
  border-bottom: 1px solid #f0f0f0;
  line-height: 8vh;
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;
}
.sub {
  height: 8vh;
  width: 100%;
  background-color: #ff8d1a;
  position: fixed;
  bottom: 0;
  line-height: 8vh;
  text-align: center;
  color: #fff;
}
</style>
