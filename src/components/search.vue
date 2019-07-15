<template>
  <div>
    <div class="PopSearch">
      <span class="iconfont icon-zuo" @click="close"></span>
      <van-search
        shape="round"
        :clearable="false"
        :placeholder="placeholder"
        style="display:inline-block;margin-left:5vw;"
        v-model="value"
      />
      <span @click="getVal(value)" style="font-size:3.8vw;">搜索</span>
    </div>
    <div class="hotSearch">
      <p>热门搜索</p>
      <div>
        <span @click="getVal(i.m)" v-for="i in hotList" :key="i.m">{{i.m}}</span>
      </div>
    </div>
    <div class="history hotSearch">
      <p>历史记录</p>
      <div>
        <span @click="getVal(i.m)" v-for="i in hisList" :key="i.m">{{i.m}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  props: {
    placeholder: {
      type: String
    },
    hotList: {
      type: Array
    },
    hisList: {
      type: Array
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    getVal(val) {
      if (val) {
        this.value = "";
        this.$emit("getVal", val);
      } else {
        Toast("输入不能为空");
      }
    }
  }
};
</script>
<style lang="less" scoped>
// 输入框部分
.PopSearch {
  padding: 0 0 0 8vw;
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  line-height: 8vh;
  .iconfont {
    font-size: 5vw;
  }
  /deep/.van-search {
    width: 65vw;
    line-height: 8vh;
    padding: 0;
    margin: 0;
    .van-search__content {
      display: inline-block;
      width: 100%;
    }
  }
}
// 热门搜索
.hotSearch {
  padding: 5vh 5vw 3vh 5vw;

  p {
    font-size: 3vw;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    span {
      margin: 0.8vh;
      height: 4vh;
      font-size: 4vw;
      line-height: 4vh;
      transform: none;
      border: 1px solid #999;
      border-radius: 5vw;
      padding: 0 2vw;
      color: #383838;
    }
  }
}
// 搜索历史
.history {
  margin-top: 7vh;
}
</style>
