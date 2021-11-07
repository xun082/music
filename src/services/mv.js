import request from "./request";

// mv详情
export function getMvDetail(mvid) {
  return request({
    url: "/mv/detail",
    params: {
      mvid,
    },
  });
}

export function getMvLink(id) {
  return request({
    url: "/mv/url",
    params: {
      id,
    },
  });
}

export function getMvComment(id, limit, offset) {
  return request({
    url: "/comment/mv",
    params: {
      id,
      limit,
      offset,
    },
  });
}

export function getSimilarMv(id) {
  return request({
    url: "/related/allvideo",
    params: {
      id,
    },
  });
}
