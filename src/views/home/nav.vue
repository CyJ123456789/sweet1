<template>
  <div class="homNav" @click="flag1=false,flag2=false">
    <!-- 搜索栏 -->
    <div class="search">
      <div class="tlmiddle">
        <!-- 头像 -->
        <p class="headPor">
          <img :src="headPor" alt="头像">
          <span class="member">v</span>
        </p>
        <!-- 输入框 -->
        <div class="input">
          <span class="location" @click.stop="tiggerIn" @click="flag2=false">
            {{location}}
            <span class="iconfont icon-xia"></span>
            <span class="divsion">|</span>
            <Drop :list="localList" style="left:0;" @getVal="getVal" :flag="flag1"></Drop>
          </span>
          <input type="text" placeholder="巧克力慕斯" @focus="showPop">
          <!-- 弹出层 -->
          <van-popup v-model="show" position="right" class="popup" :overlay="false">
            <Popup
              :hotList="hotList"
              :hisList="hisList"
              :placeholder="placeholder"
              @close="closePop"
              @getVal="getPopVal"
            ></Popup>
          </van-popup>
        </div>

        <!-- 下拉菜单 -->
        <div class="dropMenu" @click.stop="tiggerMen" @click="flag1=false">
          <span class="iconfont icon-xia"></span>
          <Drop :list="menuList" style="right:0" @Pop="getVal" :flag="flag2"></Drop>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="wheel">
      <mt-swipe :auto="4000" :showIndicators="true">
        <mt-swipe-item v-for="i in lunList" :key="i.src">
          <img :src="i.src" style="width:100%">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
import Drop from "../../components/drop";
import Popup from "../../components/search";

export default {
  data() {
    return {
      placeholder: "巧克力",
      // 是否展示搜索栏弹出层
      show: false,
      // 是否展示下拉菜单
      flag1: false,
      flag2: false,
      // 下拉菜单数据
      location: "定位",
      localList: [{ m: "高新区" }, { m: "双流区" }, { m: "温江区" }],
      menuList: [
        { m: "扫一扫", src: "123" },
        { m: "付款码", src: "456" },
        { m: "开发票", src: "789" },
        { m: "加好友", src: "147" }
      ],
      hotList: [
        { m: "马卡龙" },
        { m: "巧克力慕斯" },
        { m: "抹茶口味提拉米苏" },
        { m: "蜜三刀" },
        { m: "芸豆卷" },
        { m: "蔓德蕾妮贝壳蛋糕" }
      ],
      hisList: [
        { m: "马卡龙" },
        { m: "巧克力慕斯" },
        { m: "抹茶口味提拉米苏" },
        { m: "蜜三刀" },
        { m: "芸豆卷" },
        { m: "蔓德蕾妮贝壳蛋糕" }
      ],
      // 头像图片地址
      headPor: require("../../assets/homImg/img306164da746310.jpg"),
      // 轮播图数据
      lunList: [
        {
          src: require("../../assets/homImg/img24951683ad9ae38.png")
        },
        {
          src: require("../../assets/homImg/img24961683ad9c5a8.png")
        },
        {
          src: require("../../assets/homImg/img52501685a4945d0.jpg")
        },
        {
          src: require("../../assets/homImg/img490316859cb24c0.jpg")
        },
        {
          src: require("../../assets/homImg/img1956168546dfd68.jpg")
        },
        {
          src: require("../../assets/homImg/img1962168546ead30.png")
        }
      ]
    };
  },
  components: {
    Drop,
    Popup
  },
  methods: {
    // 打开搜索栏弹出层
    showPop() {
      this.show = true;
    },
    // 关闭搜索栏弹出层
    closePop() {
      this.show = false;
    },
    // 切换定位下拉菜单
    tiggerIn() {
      this.flag1 = !this.flag1;
    },
    // 切换右侧下拉菜单
    tiggerMen() {
      this.flag2 = !this.flag2;
    },
    // 获得下拉菜单的内容
    getVal(val, n) {
      console.log(val, n);
    },
    getPopVal(val) {
      console.log(val);
      this.closePop();
    }
  }
};
</script>
<style lang="less" scoped>
.homNav {
  height: 34vh;
  .search {
    height: 8.5vh;
    position: relative;
    .tlmiddle {
      height: 5.2vh;
      width: 91.8vw;
      margin-top: -2.7vh;
      margin-left: -45.9vw;
      // 头像
      .headPor {
        display: inline-block;
        height: 4vh;
        width: 4vh;
        position: absolute;
        top: 50%;
        margin-top: -2vh;
        .member {
          display: inline-block;
          font-size: 1vh;
          color: #fff;
          width: 1.2vh;
          height: 1.2vh;
          border-radius: 50%;
          line-height: 1.2vh;
          text-align: center;
          background-color: #999;
          position: absolute;
          bottom: 0.2vw;
          right: 0.2vw;
          z-index: 1;
        }
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      // 输入框
      .input {
        display: inline-block;
        width: 70.8vw;
        height: 5.2vh;
        border: 1px solid #ddd;
        position: absolute;
        margin-left: 13vw;
        border-radius: 2.5vw;
        color: rgba(166, 166, 166, 1);
        padding-left: 3vw;
        .location,
        span.iconfont {
          font-size: 2vh;
          .divsion {
            font-size: 3vh;
            margin-left: 2vw;
          }
        }
        input {
          height: 100%;
          width: 50vw;
          float: right;
          outline: none;
          border: none;
          border-radius: 3vw;
          padding-left: 2vw;
        }
        input::placeholder {
          font-size: 2vh;
          color: rgba(166, 166, 166, 1);
        }
        // 弹出层搜索栏
        .popup {
          width: 100%;
          height: 100%;
        }
      }
      // 下拉菜单
      .dropMenu {
        display: inline-block;
        width: 4vw;
        height: 4vw;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -2vw;
        text-align: center;
        line-height: 4vw;
        .iconfont {
          font-size: 4vw;
        }
      }
    }
  }
  .wheel {
    height: 25.5vh;
    /deep/.mint-swipe-indicators {
      .mint-swipe-indicator {
        background: #fff;
        opacity: 1;
      }
      .is-active {
        background: rgba(255, 141, 26, 1);
      }
    }
  }
}
</style>
