<template>
  <div>
    <ul v-for="i in comment" :key="i.img">
      <li>
        <!-- 用户头像 -->
        <p>
          <img :src="i.img" alt>
        </p>
        <p>
          <!-- 用户名 -->
          <span class="name">
            <span>{{i.name}}</span>
            <span>{{i.time}}</span>
          </span>
          <!-- 用户评分 -->
          <van-rate v-model="i.sco" readonly size="3.3vw"/>
          <!-- 用户评论 -->
          <span>{{i.com}}</span>
        </p>
      </li>
      <!-- 用户评论的图片 -->
      <li :class="[i.imgS.length?'show':'hidd']">
        <img v-for="(j,index) in i.imgS" :key="j[index]" :src="j">
      </li>
    </ul>
    <!-- 查看更多评论 -->
    <p class="more">
      查看{{commentMount}}条评论
      <span class="iconfont icon-you" style="float:right"></span>
    </p>
    <p class="more pro">
      有什么问题，问问去过的人吧
      <span class="iconfont icon-you" style="float:right"></span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: [
        {
          img: require("../../../../assets/homImg/img24951683ad9ae38.png"),
          name: "萝卜吃兔子",
          com: "最爱铜锣烧，超甜，酥脆，口味很棒",
          time: "2019-1-13",
          sco: 4,
          imgS: []
        },
        {
          img: require("../../../../assets/homImg/img132216836f626c0.jpg"),
          name: "萝卜吃兔子",
          com:
            "三分之一的醇香黑巧克力和三分之二的奶油配成，加入少量蜂蜜，干性特佳、风味独特。",
          time: "2019-1-13",
          sco: 3,
          imgS: [
            require("../../../../assets/homImg/img132216836f626c0.jpg"),
            require("../../../../assets/homImg/img24971683ad9f870.png"),
            require("../../../../assets/homImg/img28431683b57d718.jpg")
          ]
        }
      ],
      commentMount: 999
    };
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 14vw;
  height: 14vw;
  object-fit: cover;
}
ul {
  width: 100%;
  // 评论信息
  li:nth-of-type(1) {
    width: 100%;
    height: 14.7vh;
    border-bottom: 1px solid #f3f3f3;
    padding: 2vw;
    display: flex;
    justify-content: space-between;
    p {
      height: 100%;
      display: inline-block;
    }
    // 用户头像
    p:nth-of-type(1) {
      width: 20vw;
      img {
        float: right;
        .img;
      }
    }
    p:nth-of-type(2) {
      width: 74vw;
      // 用户名
      .name {
        display: flex;
        justify-content: space-between;
        font-size: 4vw;
        span:nth-of-type(2) {
          font-size: 3vw;
          color: #a6a6a6;
        }
      }
    }
  }
  // 如果有评论图片自动展示
  .hidd {
    height: 0;
  }
  .show {
    height: 14.7vh;
    padding: 2vw 2vw 2vw 23vw;
    border-bottom: 1px solid #f3f3f3;

    img {
      margin-right: 3vw;
      .img;
    }
  }
}
.more {
  text-align: center;
  padding: 1vh;
  height: 8vh;
  line-height: 6vh;
  border-bottom: 1px solid #f3f3f3;
  font-size: 3.5vw;
  color: #a6a6a6;
}
.pro {
  text-align: left;
  color: #383838;
  border-bottom: none;
}
</style>
