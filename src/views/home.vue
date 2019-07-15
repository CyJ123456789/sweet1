<template>
  <div>
    <Nav/>
    <Bottom style="padding-bottom:8.8vh"/>
    <router-view></router-view>
    <Tabbar/>
  </div>
</template>
<script>
import Nav from "./home/nav";
import Bottom from "./home/bottom";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    Nav,
    Bottom
  }
};
</script>
