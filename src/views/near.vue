<template>
  <div>
    <div class="nav">
      <p>
        <span class="menu iconfont icon-ego-menu">定位</span>
      </p>
      <p>
        <input type="text" placeholder="科技梦之城" @focus="popup">
        <span class="iconfont icon-sousuo search"></span>
      </p>
    </div>
    <van-popup v-model="show" position="right" class="pop">
      <popup
        @getVal="getVal"
        @close="close"
        :hotList="hotList"
        :hisList="hisList"
        :placeholder="placeholder"
      ></popup>
    </van-popup>
    <!-- 地图 -->
    <div id="container"></div>
    <!-- 定位图标 -->
    <span class="dinwei iconfont icon-dingwei1" @click="dingwei"></span>
    <Tabbar/>
  </div>
</template>
<script>
import popup from "../components/search";
// 引入地图配置
import { TMap } from "../plugns/map";
export default {
  data() {
    return {
      placeholder: "科技梦之城",
      show: false,
      flag: false,
      locList: [{ m: "高新区" }, { m: "双流区" }, { m: "温江区" }],
      hotList: [{ m: "高新区" }, { m: "双流区" }, { m: "温江区" }],
      hisList: [{ m: "高新区" }, { m: "双流区" }, { m: "温江区" }]
    };
  },
  mounted() {
    // 调用地图
    TMap("RYGBZ-W6UCP-OD7DG-VY75N-MEAPT-QLFI5").then(qq => {
      this.map();
    });
  },
  methods: {
    // 点击定位图标获取当前位置
    dingwei() {
      console.log("4654");
    },
    // 定位
    map() {
      var map = new qq.maps.Map(document.getElementById("container"), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(30.67, 104.05),
        zoom: 16
      });
    },
    popup() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    getVal(val) {
      console.log(val);
      this.close();
    }
  },
  created() {},
  components: {
    popup
  }
};
</script>
<style lang="less" scoped>
.nav {
  height: 7vh;
  width: 100vw;
  background-color: #fff;
  padding: 0 5vw;
  position: relative;
  p:nth-of-type(1) {
    width: 20vw;
    line-height: 7vh;
    span.menu {
      font-size: 5vw;
      color: #505050;
    }
  }
  p:nth-of-type(2) {
    width: 60vw;
    position: absolute;
    top: 50%;
    right: 10vw;
    margin-top: -3vh;
    height: 6vh;
    border: 1px solid #ddd;
    border-radius: 3vw;
    input {
      width: 50vw;
      height: 5vh;
      border: none;
      position: absolute;
      top: 50%;
      margin-top: -2.5vh;
      border: transparent;
      border-radius: 3.5vw;
      font-size: 5vw;
      padding-left: 3vw;
    }
    input::placeholder {
      color: #e4e4e4;
    }
    .search {
      float: right;
      line-height: 6vh;
      margin-right: 3vw;
    }
  }
}
.pop {
  width: 100%;
  height: 100%;
}
// 地图显示样式设置
#container {
  width: 100vw;
  height: 84.2vh;
}
// 定位当前图标样式设置
.dinwei {
  background-color: #fff;
  border-radius: 50%;
  font-size: 12vw;
  color: #000;
  position: fixed;
  right: 4vw;
  bottom: 16vh;
}
</style>
