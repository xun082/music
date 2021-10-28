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
