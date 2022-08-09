import request from "./request";

export function getMessageNotify(limit, lasttime, cookie) {
  return request({
    url: "/msg/notices",
    params: { limit, lasttime, cookie },
  });
}

export function getMessageAt(limit, offset, cookie) {
  return request({
    url: "/msg/forwards",
    params: { limit, offset, cookie },
  });
}

export function getMessageComment(uid, limit, cookie) {
  return request({
    url: "/msg/comments",
    params: { uid, limit, cookie },
  });
}

export function getMessagePrivate(limit, offset, cookie) {
  return request({
    url: "/msg/private",
    params: { limit, offset, cookie },
  });
}

// 获取私信内容
export function getPrivateHistory(uid, limit, cookie) {
  return request({
    url: "/msg/private/history",
    params: { uid, limit, cookie },
  });
}
