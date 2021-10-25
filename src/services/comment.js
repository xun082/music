import request from "./request";

// 评论歌单
export function sendComment(type, id, content, cookie) {
  return request({
    url: "/comment",
    method: "get",
    params: {
      t: 1, // 发送
      type, // 歌曲类型
      id,
      content,
      cookie,
      timestamp: new Date().getTime(),
    },
  });
}
