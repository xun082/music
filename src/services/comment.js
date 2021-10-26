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

// 点赞
/* cid : 评论 id
t : 是否点赞 ,1 为点赞 ,0 为取消点赞 */
export function sendLikeComment(id, cid, t, type, cookie) {
  return request({
    url: "/comment/like",
    params: {
      id,
      cid,
      t,
      type,
      cookie,
    },
  });
}
