import request from "./request";

// 专辑详情
export function getAlbumDetail(id) {
  return request({
    url: "/album",
    params: {
      id,
    },
  });
}

// 专辑评论
export function getAlbumComment(id, limit, offset, before) {
  return request({
    url: "/comment/album",
    params: {
      id,
      limit,
      offset,
      before,
    },
  });
}
