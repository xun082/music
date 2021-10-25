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

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
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
