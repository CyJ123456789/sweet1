<template>
  <div>
    <div class="time">
      <p>营业时间</p>
      <p>{{time[0]+' '+time[1]}}</p>
    </div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item :title="'共'+time[2]+'家分店'" name="1">内容</van-collapse-item>
      <van-collapse-item title="营业许资质" name="2">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      time: ["周一至周日", "09:00-22:00", "3"]
    };
  }
};
</script>
<style lang="less" scoped>
.time {
  height: 11vh;
  padding: 3vw;
  p:nth-of-type(1) {
    font-size: 3vw;
    font-weight: 600;
  }
}
</style>
