import fly from './index';

export const getNowPlaying = (page, count = 7) => {
    return fly.request("/film/now-playing", {
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

export const getWillPlaying = (page, count = 7) => {
    return fly.request("/film/coming-soon", {
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