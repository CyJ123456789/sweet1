<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="面包甜点" v-model="value1" :options="option1"/>
      <van-dropdown-item title="智能排序" v-model="value2" :options="option2"/>
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="只看免预约"/>
        <van-switch-cell v-model="switch2" title="节假日可用"/>
        <van-switch-cell v-model="switch3" title="只看新店"/>
        <div class="screen">
          <span
            v-for="(i,index) in screen"
            :key="i.name"
            @click="screenFlag(index)"
            :class="['tag',i.flag?'click':'']"
          >{{i.name}}</span>
        </div>
        <van-button block type="info">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="content" v-for="i in shopList" :key="i.id" @click="jumpRouter(i.id)">
      <p class="left">
        <img :src="i.imgSrc">
      </p>
      <ul class="right">
        <li>
          <span>{{i.shopName}}</span>
          <span>{{"("+i.address+")"}}</span>
        </li>
        <li>
          <span>{{i.qu+"&nbsp;&nbsp;|&nbsp;&nbsp;"+i.Varieties}}</span>
          <span>{{i.distance}}km</span>
        </li>
        <li>
          <span v-for="j in i.des" :key="j[i.id]+ i.id">{{j}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopList: [
        {
          id: "1",
          imgSrc: require("../../assets/homImg/img24971683ad9f870.png"),
          shopName: "甜甜圈",
          address: "高新文体店",
          qu: "虎丘区",
          Varieties: "甜点",
          distance: "2.9",
          des: [
            "周末超值甜点，下午茶的必备，立享特色双人套餐",
            "14元双份草莓奶油甜甜圈"
          ]
        },
        {
          id: "2",
          imgSrc: require("../../assets/homImg/img28431683b57d718.jpg"),
          shopName: "杨枝甘露",
          address: "科技城店",
          qu: "高新文体中心",
          Varieties: "广式糖水",
          distance: "2.6",
          des: [
            "周末超值甜点，下午茶的必备，立享特色双人套餐",
            "14元双份草莓奶油甜甜圈"
          ]
        },
        {
          id: "3",
          imgSrc: require("../../assets/homImg/img28491683b5e62e0.jpg"),
          shopName: "芒果班戟",
          address: "高新文体店",
          qu: "虎丘区",
          Varieties: "甜点",
          distance: "3.0",
          des: [
            "18元超值甜点，买单立享满40减5",
            "16代18元，40代50元",
            "团购优享更多"
          ]
        }
      ],
      switch1: false,
      switch2: false,
      switch3: false,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "中式糕点", value: 1 },
        { text: "西式甜品", value: 2 },
        { text: "广式糖水", value: 3 },
        { text: "咖啡", value: 4 },
        { text: "其他美食", value: 5 }
      ],
      option2: [
        { text: "离我最近", value: "a" },
        { text: "好评优先", value: "b" },
        { text: "人气最高", value: "c" }
      ],
      screen: [
        {
          name: "单人餐",
          flag: true
        },
        {
          name: "双人餐",
          flag: false
        },
        {
          name: "3~4人餐",
          flag: false
        },
        {
          name: "5~10人餐",
          flag: false
        },
        {
          name: "10人以上",
          flag: false
        }
      ]
    };
  },
  methods: {
    jumpRouter(id) {
      this.$router.push("/home/store");
    },
    screenFlag(i) {
      this.screen[i].flag = !this.screen[i].flag;
    }
  }
};
</script>
<style lang="less" scoped>
.screen {
  margin-bottom: 2vh;
  padding: 0 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .tag {
    display: inline-block;
    height: 3.5vh;
    font-size: 3vw;
    line-height: 3.5vh;
    margin-top: 2vh;
    margin-right: 5vw;
    padding: 0 2vw;
    border: 1px solid #a6a6a6;
    border-radius: 5vw;
  }
  .click {
    background-color: #ff8d1a;
    color: #fff;
    border: 1px solid transparent;
  }
}
.content {
  height: 18vh;
  width: 100%;
  border-top: 1px solid #f3f3f3;
  padding: 0 2vw;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  p,
  ul {
    display: inline-block;
    height: 100%;
    padding-right: 3vw;
    padding-top: 1vw;
    li {
      margin-bottom: 0.7vh;
    }
    li:nth-of-type(1) {
      font-weight: 600;
      font-size: 4vw;
    }
    li:nth-of-type(2) {
      font-size: 3vw;
      color: #a6a6a6;
      display: flex;
      justify-content: space-between;
      padding-left: 2vw;
      margin-bottom: 1vh;
    }
    li:nth-of-type(3) > span {
      display: block;
      font-size: 3vw;
      color: #a6a6a6;
      width: 55vw;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-left: 2vw;
    }
  }
  .left {
    width: 26vw;
    img {
      float: right;
      object-fit: cover;
      width: 15vw;
      height: 15vw;
    }
  }
  .right {
    width: 70vw;
  }
}
</style>
