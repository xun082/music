import request from "./request";

export function getTopListInfo() {
  return request({
    url: "/toplist",
  });
}
export function getTopListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

// 歌单评论
export function getTopListComment(id, type) {
  return request({
    url: "/comment/new",
    params: {
      id,
      type,
    },
  });
}

// 歌单评论
export function getTopListNewComment(id, limit = 20, offset) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset,
    },
  });
}
