<template>
  <div class="store">
    <Nav></Nav>
    <Detail class="detail"></Detail>
    <Contnet class="content"></Contnet>
  </div>
</template>
<script>
import Detail from "./detail";
import Contnet from "./content";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Detail,
    Contnet
  }
};
</script>
<style lang="less" scoped>
.content {
  margin-top: 2vh;
}
</style>
