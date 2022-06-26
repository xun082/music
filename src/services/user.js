import request from "./request";

// 获取用户歌单
export const getUserSongList = (uid, limit, cookie) => {
  return request({
    url: "/user/playlist",
    params: {
      uid,
      limit,
      cookie,
    },
  });
};

// 创建歌单
export const setCreateUserSongList = (name, cookie) => {
  return request({
    url: "/playlist/create",
    params: {
      name,
      cookie,
    },
  });
};

// 获取用户信息
export const getUserInfo = (cookie) => {
  return request({
    url: "/user/subcount",
    params: {
      cookie,
    },
  });
};

// 获取用户详情
export const getUserDetailInfo = (uid) => {
  return request({
    url: "/user/detail",
    params: {
      uid,
    },
  });
};

// 获取用户播放记录
export const getUserRecordInfo = (type, uid) => {
  return request({
    url: "/user/record",
    params: {
      type,
      uid,
    },
  });
};

// 获取用户歌单详情 (接口问题，待解决)
export const getUserPlayListInfo = (id) => {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
};

// 获取其他用户信息
export const getOtherUserInfo = (uid, cookie) => {
  return request({
    url: "/user/detail",
    params: {
      uid,
      cookie,
    },
  });
};

// 获取用户动态
export const getUserEvent = (uid, limit) => {
  return request({
    url: "/user/event",
    params: {
      uid,
      limit,
    },
  });
};

// 获取用户关注
export const getUserFollow = (uid, limit, offset, cookie) => {
  return request({
    url: "/user/follows",
    params: {
      uid,
      limit,
      offset,
      cookie,
    },
  });
};

// 获取用户粉丝
export const getUserFans = (uid, limit, offset, cookie) => {
  return request({
    url: "/user/followeds",
    params: {
      uid,
      limit,
      offset,
      cookie,
    },
  });
};

// 关注用户
export function SendFollowUser(id, t, cookie) {
  return request({
    url: "/follow",
    params: {
      id,
      t,
      cookie,
    },
  });
}

// 发送私信
export function getSendLatter(user_ids, msg, cookie) {
  return request({
    url: "/send/text",
    params: {
      user_ids,
      msg,
      cookie,
    },
  });
}

// 发送私信
export function SendSignIn(type, cookie) {
  return request({
    url: "/daily_signin",
    params: {
      type,
      cookie,
    },
  });
}
