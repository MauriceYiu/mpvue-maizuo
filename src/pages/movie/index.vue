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
    <swiper :autoplay="autoplay" :style="'height:'+(winHeight-50)+'px'" :duration="duration" :current="currentTab" @change="tabChange" class="movie-swip">
      <block>
        <swiper-item>
          <div class="movie-list">
            <scroll-view scroll-y style="height:100%;">
              <div class="list">
                <ul>
                  <li v-for="(item,index) in nowPlayingList" :key="index">
                    <div class="mv-img">
                      <img :src="item.poster.thumbnail" alt="">
                    </div>
                    <div class="mv-info">
                      <div class="mv-name-grade">
                        <span class="name">{{item.name}}</span>
                        <span class="grade">{{item.grade}}></span>
                      </div>
                      <div class="mv-desc">{{item.intro}}</div>
                      <div class="mv-other">
                        <span class="dyy-count">{{item.cinemaCount}}家影院上映</span>
                        <span class="ren-count">{{item.watchCount}}人购票</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </scroll-view>
          </div>
        </swiper-item>
      </block>
      <block>
        <swiper-item>
          <div class="movie-list">
            <scroll-view scroll-y style="height:100%;">
              <div class="list">
                <ul>
                  <li v-for="(item,index) in willPlayingList" :key="index">
                    <div class="mv-img">
                      <img :src="item.poster.thumbnail" alt="">
                    </div>
                    <div class="mv-info">
                      <div class="mv-name-grade">
                        <span class="name">{{item.name}}</span>
                        <span class="grade">{{item.grade}}></span>
                      </div>
                      <div class="mv-desc">{{item.intro}}</div>
                      <div class="mv-other">
                        <span class="dyy-count">{{item.cinemaCount}}家影院上映</span>
                        <span class="ren-count">{{item.watchCount}}人购票</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </scroll-view>
          </div>
        </swiper-item>
      </block>
    </swiper>

  </div>
</template>

<script>
import wxp from "minapp-api-promise";
import { getNowPlaying, getWillPlaying } from "./../../api/hot.js";

export default {
  data() {
    return {
      autoplay: false,
      duration: 500,
      nowPlaying: [],
      currentTab: 0,
      winWidth: 0,
      winHeight: 0,
      nowPlayingList: [],
      willPlayingList: [],
      doLoad: true
    };
  },
  mounted() {
    getNowPlaying().then(res => {
      this.nowPlayingList = res.films;
    });
  },
  methods: {
    tabChange(event) {
      this.currentTab = event.target.current;
      if (event.target.current === 1 && this.doLoad) {
        getWillPlaying().then(res => {
          this.willPlayingList = res.films;
          this.doLoad = false;
        });
      }
    },
    changeTabByTabBar(index) {
      this.currentTab = index;
    }
  },
  async onLoad() {
    // 获取系统消息
    let info = await wxp.getSystemInfo();
    this.winWidth = info.windowWidth;
    this.winHeight = info.windowHeight;
  }
};
</script>

<style scoped lang='scss'>
#movie {
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 32rpx;
  .tab {
    border-bottom: 1rpx solid rgb(240, 131, 131);
    ul {
      width: 100%;
      display: flex;
      li {
        list-style: none;
        width: 50%;
        text-align: center;
        height: 100rpx;
        line-height: 100rpx;
        &.active {
          border-bottom: 4rpx solid rgb(240, 131, 131);
        }
      }
    }
  }
  .movie-swip {
    width: 100%;
    .movie-list {
      height: 100%;
      ul {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 24rpx;
        box-sizing: border-box;
        li {
          list-style: none;
          box-sizing: border-box;
          border-bottom: 1px dashed #ddd;
          font-size: 28rpx;
          height: 250rpx;
          overflow: hidden;
          .mv-img {
            width: 120rpx;
            float: left;
            margin-top: 35rpx;
            img {
              width: 120rpx;
              height: 160rpx;
            }
          }
          .mv-info {
            margin-top: 35rpx;
            padding-left: 168rpx;
            .mv-name-grade {
              .grade {
                float: right;
                color: rgb(218, 74, 74);
              }
            }
            .mv-desc {
              padding: 26rpx 0;
            }
            .ren-count {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
