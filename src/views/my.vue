<template>
  <div class="my">
    <div class="nav">
      <!-- 顶部设置字体图标 -->
      <div class="icon">
        <span slot="icon" class="iconfont icon-shezhi"></span>
        <span slot="icon" class="iconfont icon-bell"></span>
        <span slot="icon" class="iconfont icon-erji1"></span>
      </div>
      <!-- 头像底部轮播图 -->
      <mt-swipe :auto="4000" :showIndicators="false">
        <mt-swipe-item v-for="i in imgList" :key="i.src">
          <img :src="i.src" style="width:100%">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 头像部分，用户名 -->
      <div class="headP">
        <p class="img">
          <img :src="imgSrc">
        </p>
        <p class="user">{{user}}</p>
        <ul>
          <li v-for="i in funcList" :key="i.name">
            <span :class="['iconfont',i.icon]"></span>
            <br>
            <span>{{i.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <Tabbar/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          src: require("../assets/images/img19071685461cc50.png")
        },
        {
          src: require("../assets/images/img19221685465f6b8.png")
        },
        {
          src: require("../assets/images/img193116854678528.png")
        }
      ],
      user: "清风",
      imgSrc: require("../assets/images/img10159694579f0.jpeg"),
      funcList: [
        {
          name: "收藏",
          icon: "icon-shoucang1"
        },
        {
          name: "评价",
          icon: "icon-pingjia"
        },
        {
          name: "浏览",
          icon: "icon-shizhong"
        },
        {
          name: "钱包",
          icon: "icon-qianbao"
        },
        {
          name: "红包/卡卷",
          icon: "icon-qiajuan"
        },
        {
          name: "余额",
          icon: "icon-meiyuan"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.nav {
  height: 14vh;
  // 顶部字体图标CSS
  .icon {
    position: absolute;
    width: 100%;
    top: 1vh;
    z-index: 1;
    padding-left: 1vh;
    padding-right: 1vh;
    box-sizing: border-box;
    .iconfont {
      cursor: pointer;
    }
    .icon-bell {
      float: right;
    }
    .icon-erji1 {
      float: right;
      margin-right: 1.5rem;
    }
  }
  // 头像用户名
  .headP {
    height: 40vh;
    width: 100%;
    position: relative;
    top: -5vh;
    .img {
      width: 10vh;
      height: 10vh;
      border-radius: 50%;
      margin: 0 auto;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .user {
      text-align: center;
      margin-top: 1vh;
      font-weight: 600;
    }
    // 功能栏
    ul {
      width: 100%;
      min-height: 20vh;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      text-align: center;
      padding-top: 5vh;
      li {
        min-width: 30vw;
        box-sizing: border-box;
        height: 10vh;
        .iconfont {
          font-size: 6vw;
          color: rgba(255, 141, 26, 1);
        }
        span:last-child {
          font-size: 4vw;
          color: rgba(56, 56, 56, 1);
        }
      }
    }
  }
}
</style>
