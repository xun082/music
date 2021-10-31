import request from "./request";

// 电台推荐
export function getRecommendAnchor() {
  return request({
    url: "/program/recommend",
  });
}

// 节目排行榜
export function getRankingAnchor(limit, offset) {
  return request({
    url: "/dj/program/toplist",
    params: {
      limit,
      offset,
    },
  });
}

// 节目排行榜
export function getAnchorCategory(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type,
    },
  });
}

// 轮播图分类排行榜
export function getBannerCategory(limit, offset, cateId) {
  return request({
    url: "/dj/radio/hot",
    params: { limit, offset, cateId },
  });
}