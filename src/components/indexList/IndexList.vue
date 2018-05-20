<template>
  <div id="list">
    <ul>
      <li v-for="(item,index) in nowPlaying" :key="index">
        <div class="mv-img">
          <img :src="item.cover.origin" alt="">
        </div>
        <div class="mv-info">
          <div class="left">
            <p class="mv-name">{{item.name}}</p>
            <div class="mv-other">
              <span class="dyy-count">{{item.cinemaCount}}家电影院上映</span>
              <span class="gp-count">{{item.watchCount}}人购票</span>
            </div>
          </div>
          <span class="grade">{{item.grade}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    nowPlaying: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
#list {
  width: 100%;
  font-size: 26rpx;
  background: #f4f4f4;
  padding-top: 34rpx;
  li {
    padding: 34rpx;
    padding-top: 0;
    .mv-img {
      background: #fff;
      img {
        width: 100%;
        height: 400rpx;
      }
    }
    .mv-info {
      box-sizing: border-box;
      width: 100%;
      height: 100rpx;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 24rpx;
      align-items: center;
      .grade {
        font-size: 36rpx;
        color: red;
      }
    }
  }
}
</style>
