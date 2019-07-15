<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item v-for="i in menuList" :key="i.id" :id="i.id" @click.native="routerJump(i.url)">
        <span slot="icon" :class="['iconfont',i.icon]"></span>
        <p style="padding-top:0.5vh;">{{i.id}}</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "首页",
      menuList: [
        {
          id: "首页",
          url: "home",
          icon: "icon-shouye",
          ref: "home"
        },
        {
          id: "附近",
          url: "nearby",
          icon: "icon-dingwei"
        },
        {
          id: "发现",
          url: "find",
          icon: "icon-icon_find"
        },
        {
          id: "订单",
          url: "order",
          icon: "icon-dingdanguanli"
        },
        {
          id: "我的",
          url: "my",
          icon: "icon-user"
        }
      ]
    };
  },
  created() {
    this.selecte();
  },
  mounted() {},
  methods: {
    routerJump(url) {
      this.$router.push("/" + url);
    },
    selecte() {
      let arr = String(window.location).split("/");
      let len = arr.length;
      let val = arr[len - 1];
      this.menuList.forEach(ele => {
        if (ele.url == val) {
          this.selected = ele.id;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.mint-tabbar {
  border-top: 1px solid rgba(243, 243, 243, 1);
  height: 8.8vh;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  .mint-tab-item-label {
    font-size: 2vh;
    color: rgba(56, 56, 56, 1);
  }
  .is-selected {
    background-color: transparent;
    .mint-tab-item-label,
    .iconfont {
      color: #ff8d1a;
    }
  }
}
</style>
