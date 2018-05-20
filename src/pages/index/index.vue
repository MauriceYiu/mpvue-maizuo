<template>
  <div id="index">
    <swiper :autoplay="autoplay" :interval="interval" :duration="duration" class="billboard-swip">
      <block v-for="(item,index) in billboard" :key="index">
        <swiper-item>
          <image :src="item.imageUrl" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <IndexList :nowPlaying="nowPlaying"/>
  </div>
</template>

<script>
import { getBillboard, getNowPlaying } from "./../../api/home.js";
import IndexList from "./../../components/indexList/IndexList";

export default {
  data() {
    return {
      autoplay: true,
      interval: 3000,
      duration: 500,
      billboard: [],
      nowPlaying: []
    };
  },
  mounted() {
    const time = new Date();
    const timeStr = time.getTime();
    getBillboard(timeStr).then(res => {
      this.billboard = res.billboards;
    });
    getNowPlaying(timeStr).then(res => {
      this.nowPlaying = res.films;
    });
  },
  components: {
    IndexList
  }
};
</script>

<style scoped lang='scss'>
#index {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .billboard-swip {
    width: 100%;
    height: 420rpx;
    .slide-image {
      width: 100%;
      height: 420rpx;
    }
  }
}
</style>
