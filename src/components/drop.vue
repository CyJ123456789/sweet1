<template>
  <div class="drop" ref="dropLi">
    <ul>
      <li v-for="i in list" :key="i.m" @click="getVal(i.m,i.src?i.src:'')">
        <span>{{i.m}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    },
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    getVal(m, n) {
      this.$emit("getVal", m, n);
    }
  },
  watch: {
    flag: function(newV, oldV) {
      if (newV) {
        this.$refs.dropLi.style.visibility = "visible";
      } else {
        this.$refs.dropLi.style.visibility = "hidden";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.drop {
  width: 18.335vw;
  background-color: #fff;
  position: absolute;
  top: 6vh;
  z-index: 1;
  border-radius: 1vw;
  padding: 0.75vh 0;
  box-shadow: 0px 0px 10px #cfcfcf;
  visibility: hidden;
  transition: all 0.2s;
  li {
    width: 100%;
    height: 5.188vh;
    text-align: center;
    line-height: 5.188vh;
    color: rgba(0, 0, 0, 0.65);
    font-size: 3.9vw;
  }
}
</style>
