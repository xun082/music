import request from "./request";
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(offset, limit, area, type, year, month) {
  return request({
    url: "/top/album",
    params: {
      offset,
      limit,
      area,
      type,
      year,
      month,
    },
  });
}

export function getTopLists(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

// 入驻歌手
export function getSettleSinger(limit) {
  return request({
    url: "/artist/list",
    params: {
      limit,
    },
  });
}

// 热门主播
export function getHotAnchor(limit) {
  return request({
    url: "/dj/toplist",
    params: {
      limit,
    },
  });
}

// 每日推荐
export function getDayRecommend(cookie) {
  return request({
    url: "/recommend/songs",
    params: {
      cookie,
    },
  });
}

// 个性化推荐
export function getPersonRecommend(cookie) {
  return request({
    url: "/recommend/resource",
    method: "get",
    params: {
      cookie: cookie,
    },
  });
}
