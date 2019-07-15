<template>
  <div class="meal">
    <ul>
      <li v-for="i in list" :key="i.name" @click="jumpRouter">
        <!-- 套餐图片 -->
        <div>
          <img :src="i.img">
        </div>
        <div>
          <!-- 套餐信息 -->
          <p>
            <span>{{i.name}}</span>
            <br>
            <span>{{i.des}}</span>
          </p>
          <!-- 抢购 -->
          <p>
            <span>抢购</span>
            <br>
            <br>

            <span>半年销量{{i.mount}}</span>
          </p>
        </div>
      </li>
      <p @click="moreMeal">更多优惠套餐</p>
    </ul>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [
        {
          img: require("../../../../assets/homImg/img52501685a4945d0.jpg"),
          name: "2人招牌套餐",
          des: "周末超值冰淇淋，爽口美食的必备，立享特色双人套餐",
          mount: "3566"
        },
        {
          img: require("../../../../assets/homImg/img490316859cb24c0.jpg"),
          name: "4人特惠套餐",
          des: "周末超值马卡龙，下午茶的必备，立享特惠4人套餐",
          mount: "566"
        }
      ],
      tao: {
        img: require("../../../../assets/homImg/img28491683b5e62e0.jpg"),
        name: "3人招牌套餐",
        des: "好吃到爆炸",
        mount: "999"
      }
    };
  },
  methods: {
    //   更多套餐
    moreMeal() {
      if (this.tao) {
        this.list.push(this.tao);
        delete this.tao;
      } else {
        Toast("没有更多了");
      }
    },
    jumpRouter() {
      
      this.$router.push("/home/setMeal");
    }
  }
};
</script>
<style lang="less" scoped>
.meal {
  ul {
    li {
      width: 100%;
      height: 14.6vh;
      border-bottom: 1px solid #e9e9e9;
      padding: 3vw;
      display: flex;
      justify-content: space-between;
      div {
        display: inline-block;
      }
      //   套餐图片
      div:nth-of-type(1) {
        width: 20vw;
        img {
          width: 14vw;
          height: 14vw;
          object-fit: cover;
        }
      }
      div:nth-of-type(2) {
        width: 76vw;
        display: flex;
        justify-content: space-between;
        //   套餐信息

        p:nth-of-type(1) {
          width: 50vw;
          span:nth-of-type(1) {
            font-size: 4vw;
            font-weight: 600;
          }
          span:nth-of-type(2) {
            font-size: 3vw;
            color: #a6a6a6;
          }
        }
        //   抢购
        p:nth-of-type(2) {
          width: 26vw;
          padding-top: 2vh;
          span:nth-of-type(1) {
            padding: 0.5vw 1.5vw;
            background-color: #ff8d1a;
            border-radius: 2vw;
            color: #fff;
            margin-left: 8.8vw;
            font-size: 4vw;
          }
          span:nth-of-type(2) {
            font-size: 3vw;
            color: #a6a6a6;
          }
        }
      }
    }
  }
  ul > p {
    margin: 2vh 0;
    color: #ff8d1a;
    text-align: center;
  }
}
</style>
