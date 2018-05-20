import fly from './index';

//直接调用request函数发起post请求
export const getBillboard = (time) => {
  return fly.request("/billboard/home", {
      __t: time
    }, {
      method: "GET",
    })
    .then(d => {
      if(d.status === 0){
        return Promise.resolve(d.data);
      }else{
        throw '接口错误';
      }
    })
    .catch((e) => console.log("error", e))
}

export const getNowPlaying = (time, page, count = 5) => {
    return fly.request("/film/now-playing", {
        __t: time,
        page,
        count
      }, {
        method: "GET",
      })
      .then(d => {
        if (d.status === 0) {
          return Promise.resolve(d.data);
        } else {
          throw '接口错误';
        }
      })
      .catch((e) => console.log("error", e))
  }