<template>
  <div class="detail">
    <ul class="top">
      <li class="img">
        <img :src="storeData.img">
      </li>
      <li class="data">
        <!-- 店名行 -->
        <p>
          <span>
            <span>{{storeData.brand}}</span>
            <span>{{storeData.name}}</span>
          </span>
          <span>
            <span v-for="i in storeData.pro" :key="i[0]">{{i}}</span>
          </span>
        </p>
        <!-- 评分 -->
        <p>
          <van-rate v-model="value" size="4vw" gutter="0" style="display:inline-block"/>
          <span style="margin: 0 2vw;">{{storeData.score}}</span>
          <span>月销{{storeData.sale}}单</span>
          <van-tag class="plain" plain round color="#ff8d1a">{{storeData.char[0]}}</van-tag>
          <van-tag round color="#ff8d1a">{{storeData.char[1]}}</van-tag>
        </p>
        <!-- 配送 -->
        <p>
          <span>￥{{storeData.condition[0]}}起送 | 配送费￥{{storeData.condition[1]}} | ￥{{storeData.condition[2]}}/人</span>
          <span>{{storeData.dis[0]}}m | {{storeData.dis[1]}}分钟</span>
        </p>
      </li>
    </ul>
    <!-- 活动，定位 -->
    <div class="bottom">
      <!-- 下拉列表活动栏 -->
      <van-collapse v-model="activeNames" style="font-size:2vw" :border="false">
        <van-collapse-item :value="storeData.act.length+'个活动'" :border="false">
          <div slot="title" class="title">
            <span class="iconfont icon-jian"></span>
            {{storeData.act[0]}}
          </div>
          <div slot="title" class="title">
            <span class="iconfont icon-zhe"></span>
            {{storeData.act[1]}}
          </div>
          <ul>
            <li v-for="i in storeData.act" :key="i">{{i}}</li>
          </ul>
        </van-collapse-item>
      </van-collapse>
      <!-- 定位 -->
      <div class="dingwei">
        <span class="iconfont icon-dingwei"></span>
        <span>{{storeData.din[0]}} | 距您{{storeData.din[1]}}km</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      value: 4,
      storeData: {
        img: require("../../../assets/homImg/img66101684afd8050.jpg"),
        name: "小鲍糕点站",
        brand: "品牌",
        pro: ["保", "票"],
        score: 1,
        sale: "1314",
        char: ["准时达", "蜂鸟专送"],
        condition: ["10", "5", "40"],
        dis: ["233", "13"],
        act: [
          "满40减6(不与美食活动同享)",
          "特惠5折抢",
          "满10减10",
          "周六免配送费"
        ],
        din: [
          "苏州市虎丘区太湖大道555555555号文体中心影视中心南业街55555号",
          "5555"
        ]
      }
    };
  },
  created() {
    this.value = this.storeData.score;
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: 32.6vh;
  width: 100%;
  //   商家信息
  .top {
    height: 15vh;
    padding: 2vw;
    position: relative;
    li {
      display: inline-block;
    }
    // 商家头像
    li:nth-of-type(1) {
      width: 17vw;
      height: 100%;
      img {
        width: 14vw;
        float: right;
        object-fit: cover;
      }
    }
    // 商家详情
    li:nth-of-type(2) {
      width: 79vw;
      position: absolute;
      top: 20;
      padding-left: 2vw;
      //   品牌行
      p:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1) {
          font-size: 3.8vw;
          span:nth-of-type(1) {
            background-color: rgba(255, 141, 26, 1);
            font-size: 3.8vw;
            color: #fff;
            border-radius: 3vw;
            padding: 0.4vw 1vw;
            margin-right: 2vw;
          }
        }
        // 保、票
        span:nth-of-type(2) {
          span {
            border: 1px solid rgba(255, 141, 26, 1);
            padding: 0 0.6vw;
            border-radius: 50%;
            color: rgba(255, 141, 26, 1);
            font-size: 3vw;
            margin-left: 2vw;
          }
        }
      }
      p:nth-of-type(2) {
        color: #666;
        font-size: 3vw;
        margin: 0.5vh 0;
        .plain {
          margin: 0 2.5vw;
        }
        .van-tag {
          font-size: 3vw;
        }
      }
      p:nth-of-type(3) {
        color: #666;
        font-size: 3vw;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  // 活动，定位
  .bottom {
    height: 20vh;
    z-index: 99;
    overflow: scroll;
    /deep/.van-cell__value {
      font-size: 3vw;
    }
    /deep/.van-icon {
      font-size: 3vw;
    }
    /deep/.van-collapse-item__content {
      padding: 0 5vw;
      font-size: 3vw;
    }
    .title {
      font-size: 3vw;
      color: #666;
      height: 3vh;
      line-height: 3vh;
      .iconfont {
        font-size: 3vw;
        color: #ff8d1a;
      }
    }
    // 定位
    .dingwei {
      padding: 0 3.5vw;
      font-size: 3.2vw;
      .iconfont {
        font-size: 4vw;
        color: #ff8d1a;
      }
    }
  }
}
</style>
