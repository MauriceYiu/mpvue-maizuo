<template>
  <div id="movie">
    <div class="tab">
      <ul>
        <li :class="currentTab===0?'active':''" @click="changeTabByTabBar(0)" :key="0">
          <span>正在热映</span>
        </li>
        <li :class="currentTab===1?'active':''" @click="changeTabByTabBar(1)" :key="1">
          <span>即将上映</span>
        </li>
      </ul>
    </div>
    <swiper :autoplay="autoplay" :duration="duration" 
    :current="currentTab" @change="tabChange" class="movie-swip">
      <block>
        <swiper-item>
          这是1
        </swiper-item>
      </block>
      <block>
        <swiper-item>
          这是2
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>

export default {
  data() {
    return {
      autoplay: false,
      duration: 500,
      nowPlaying: [],
      currentTab:0
    };
  },
  mounted() {
    
  },
  methods: {
    tabChange(event){
      this.currentTab = event.target.current;
    },
    changeTabByTabBar(index){
      this.currentTab = index;
    }
  },
  components: {
  }
};
</script>

<style scoped lang='scss'>
#movie {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  font-size: 32rpx;
  .tab{
    border-bottom: 1rpx solid rgb(240, 131, 131);
    ul{
      width: 100%;
      display: flex;
      li{
        list-style: none;
        width: 50%;
        text-align: center;
        height: 100rpx;
        line-height: 100rpx;
        &.active{
          border-bottom: 4rpx solid rgb(240, 131, 131);
        }
      }
    }
  }
  .movie-swip{
    width: 100%;
  }
}
</style>
