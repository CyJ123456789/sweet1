<template>
  <div>
    <Nav></Nav>
    <van-tabs v-model="active" :border="false">
      <van-tab v-for="i in list" :key="i.name" :title="i.name">
        <div class="title">
          <p @click="routerStore">{{store}}></p>
          <p>{{i.name}}</p>
          <p>
            <span>
              <span>{{i.equtly[0]}}&nbsp;|&nbsp;</span>
              <span>{{i.equtly[1]}}&nbsp;|&nbsp;</span>
              <span>{{i.equtly[2]}}</span>
            </span>
            <span>半年销量{{i.equtly[3]}}</span>
          </p>
        </div>
        <div class="img">
          <div
            class="img-n"
            @touchstart="touchStart"
            @touchend="touchEnd"
            @touchmove="touchMove"
            ref="remove"
          >
            <p v-for="i in i.img" :key="i.id">
              <img :src="i.img">
              <br>
              <span style="display:inline-block;margin-bottom:1vh">{{i.name}}</span>
              <br>
              <span>￥{{i.price}}</span>
            </p>
          </div>
        </div>
        <div class="info">
          <dl>
            <dt>小吃</dt>
            <dd v-for="j in i.set" :key="j.name" class="snack">
              <span>·{{j.name}}</span>
              <span>￥{{j.pre}}</span>
            </dd>
          </dl>
          <dl>
            <dt>备注</dt>
            <dd>·{{i.beizhu}}</dd>
          </dl>
          <h2>温馨提示</h2>
          <dl>
            <dt>有效期</dt>
            <dd>·{{i.time}}</dd>
          </dl>
          <dl>
            <dt>使用时间</dt>
            <dd>·{{i.useTime}}</dd>
          </dl>
          <dl>
            <dt>使用规则</dt>
            <dd v-for="k in i.rule" :key="k[0]">·{{k}}</dd>
          </dl>
          <p>查看更多</p>
        </div>
        <div class="bottom">
          <p>
            <span>￥{{i.newPre}}</span>
            <span>最高门市价￥{{i.oldPre}}</span>
          </p>
          <p>
            <span @click="subOrder">立即抢购</span>
          </p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startX: 0,
      moveX: 0,
      dis: 0,
      active: "",
      store: "小鲍糕点站（高新文体店）",
      list: [
        {
          name: "1人专享套餐",
          id: 0,
          equtly: ["随时退", "免预约", "过期自动退", "5566"],
          img: [
            {
              id: 2,
              img: require("../../../../assets/homImg/img24951683ad9ae38.png"),
              price: 8,
              name: "草莓奶油甜甜圈"
            },
            {
              id: 3,
              img: require("../../../../assets/homImg/img28431683b57d718.jpg"),
              price: 15,
              name: "芒果班戟"
            },
            {
              id: 4,
              img: require("../../../../assets/homImg/img52501685a4945d0.jpg"),
              price: 20,
              name: "脏脏包"
            },
            {
              id: 5,
              img: require("../../../../assets/homImg/img24951683ad9ae38.png"),
              price: 30,
              name: "哈希"
            }
          ],
          set: [
            {
              name: "草莓奶油甜甜圈",
              pre: "8"
            },
            {
              name: "晴天芒果班戟",
              pre: "15"
            }
          ],
          beizhu: "免费提供纸巾",
          time: "2019.1.15-2.19.1.31(周末、法定节假日通用)",
          useTime: "10:30-21:30",
          rule: ["无需预约，消费高峰时刻可能需要排队", "每张劵建议多人使用"],
          newPre: 25,
          oldPre: 28
        },
        {
          name: "2人专享套餐",
          id: 1,
          equtly: ["随时退", "免预约", "过期自动退", "5566"],
          img: [
            {
              id: 2,
              img: require("../../../../assets/homImg/img24951683ad9ae38.png"),
              price: 8,
              name: "草莓奶油甜甜圈"
            },
            {
              id: 3,
              img: require("../../../../assets/homImg/img28431683b57d718.jpg"),
              price: 15,
              name: "芒果班戟"
            },
            {
              id: 4,
              img: require("../../../../assets/homImg/img52501685a4945d0.jpg"),
              price: 20,
              name: "脏脏包"
            },
            {
              id: 5,
              img: require("../../../../assets/homImg/img24951683ad9ae38.png"),
              price: 30,
              name: "哈希"
            }
          ],
          set: [
            {
              name: "巧克力奶油泡芙",
              pre: "15"
            },
            {
              name: "奥利奥车厘子冰激凌",
              pre: "12"
            },
            {
              name: "发丝巧克力奶油蛋糕",
              pre: "20"
            }
          ],
          beizhu: "免费提供纸巾",
          time: "2019.1.15-2.19.1.31(周末、法定节假日通用)",
          useTime: "10:30-21:30",
          rule: ["无需预约，消费高峰时刻可能需要排队", "每张劵建议多人使用"],
          newPre: 49,
          oldPre: 50
        },
        {
          name: "4人专享套餐",
          id: 2,
          equtly: ["随时退", "免预约", "过期自动退", "99"],
          img: [
            {
              id: 0,
              img: require("../../../../assets/homImg/img82811684f29b928.jpg"),
              price: 8,
              name: "草莓奶油甜甜圈"
            },
            {
              id: 1,
              img: require("../../../../assets/homImg/img82821684f29d098.jpg"),
              price: 15,
              name: "芒果班戟"
            },
            {
              id: 6,
              img: require("../../../../assets/homImg/img82811684f29b928.jpg"),
              price: 20,
              name: "脏脏包"
            },
            {
              id: 7,
              img: require("../../../../assets/homImg/img82821684f29d098.jpg"),
              price: 30,
              name: "哈希"
            }
          ],
          set: [
            {
              name: "芒果四件套",
              pre: "8"
            },
            {
              name: "梅花可可",
              pre: "15"
            },
            {
              name: "金三角酥脆",
              pre: "15"
            }
          ],
          beizhu: "免费提供纸巾",
          time: "2019.1.15-2.19.1.31(周末、法定节假日通用)",
          useTime: "10:30-21:30",
          rule: ["无需预约，消费高峰时刻可能需要排队", "每张劵建议多人使用"],
          newPre: 95,
          oldPre: 98
        }
      ]
    };
  },
  methods: {
    routerStore() {
      this.$router.push("/home/store");
    },
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        this.startX = ev.touches[0].clientX; // 记录开始位置
      }
    },
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        this.moveX = ev.touches[0].clientX;
        this.dis = this.moveX - this.startX;
        let domLeft = this.$refs.remove[0].style.left.split("px")[0];
        if (this.dis < -90) {
          this.$refs.remove[0].style.left = "-25vw";
        } else if (this.dis > 0) {
          this.$refs.remove[0].style.left = "0vw";
        } else {
          this.$refs.remove[0].style.left = this.dis + "vw";
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.dis = null;
    },
    subOrder() {
      this.$router.push("/home/subOrder");
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.van-ellipsis {
  font-size: 3.6vw;
}
// 店铺信息、套餐特权信息
.title {
  padding: 2vw;
  p:nth-of-type(1) {
    font-size: 3.5vw;
  }
  p:nth-of-type(2) {
    margin: 2vw 0;
    font-size: 5vw;
    font-weight: 600;
  }
  p:nth-of-type(3) {
    display: flex;
    justify-content: space-between;
    font-size: 3vw;
    color: #a6a6a6;
  }
}
// 图片
.img {
  margin: 2vw;
  white-space: nowrap;
  overflow: hidden;
  .img-n {
    position: relative; /*定位*/
    left: 0vw;
    transition: all 0.3s;
    p {
      display: inline-block;
      margin-right: 3vw;
      img {
        width: 28vw;
        height: 28vw;
        object-fit: cover;
      }
    }
  }
}
// 小吃备注提示
.info {
  padding: 3vw;
  margin-bottom: 8vh;
  .snack {
    display: flex;
    justify-content: space-between;
  }
  dt {
    font-size: 3.5vw;
    font-weight: 600;
  }
  dl,
  h2 {
    margin-bottom: 2vh;
  }
  p {
    color: #ff8d1a;
    text-align: center;
  }
}
// 立即抢购
.bottom {
  position: fixed;
  bottom: 0;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  line-height: 8vh;
  padding: 0 5vw;
  p:nth-of-type(1) {
    width: 40vw;
    line-height: 2vh;
    padding-top: 1.7vh;
    span {
      display: block;
      font-size: 4vw;
    }
    span:nth-of-type(1) {
      color: #ff8d1a;
      font-weight: 600;
      margin-bottom: 1vh;
    }
    span:nth-of-type(2) {
      color: #a6a6a6;
      font-size: 3vw;
    }
  }
  p:nth-of-type(2) {
    span {
      font-size: 4vw;
      background-color: #ff8d1a;
      padding: 0.5vh 2vw;
      border-radius: 3vw;
      color: #fff;
    }
  }
}
</style>
