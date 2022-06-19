import request from "./request";
// 获取用户歌单
export const getUserSongList = (userId) => {
  return request({
    url: "/user/playlist",
    params: {
      uid: userId,
      timestamp: new Date().getTime(),
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
export const getOtherUserInfo = (uid) => {
  return request({
    url: "/user/detail",
    params: {
      uid,
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
