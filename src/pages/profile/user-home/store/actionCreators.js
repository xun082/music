import * as actionTypes from "./constants";

import {
  getOtherUserInfo,
  getUserEvent,
  getUserFollow,
  getUserFans,
} from "@/services/user";

// 获取其他用户信息
const changeOtherUserInfo = (res) => ({
  type: actionTypes.CHANGE_OTHER_USER_INFO,
  userInfo: res,
});

// 获取用户动态
const changeUserEvent = (res) => ({
  type: actionTypes.CHANGE_USER_EVENT,
  userEvent: res,
});

// 获取用户关注
const changeUserFollows = (res) => ({
  type: actionTypes.CHANGE_USER_FOLLOWS,
  userFollows: res,
});

// 用户关注分页
const changeUserFollowCurrentPage = (res) => ({
  type: actionTypes.CHANGE_OTHER_USER_PAGE,
  currentPage: res,
});

// 获取登录用户关注
const changeLogonUserFollows = (res) => ({
  type: actionTypes.CHANGE_LOGIN_USER_FOLLOW,
  loginUserFollow: res,
});

// 获取用户粉丝
const changeUserFans = (res) => ({
  type: actionTypes.CHANGE_USER_FANS,
  userFans: res,
});

// 用户粉丝分页
const changeUserFansCurrentPage = (res) => ({
  type: actionTypes.CHANGE_USER_FANS_PAGE,
  fansCurrentPage: res,
});

// 更改发送信息框显示
export const changeLatterIsVisible = (res) => ({
  type: actionTypes.CHANGE_VISIBLE_STATE,
  isVisible: res,
});

// 获取其他用户信息
export const getOtherUser = (uid, cookie) => {
  return (dispatch) => {
    getOtherUserInfo(uid, cookie).then((res) => {
      const { profile, level } = res;
      const result = {
        profile,
        level,
      };
      dispatch(changeOtherUserInfo(result));
    });
  };
};

// 获取用户动态
export const getUserEventList = (uid, limit) => {
  return (dispatch) => {
    getUserEvent(uid, limit).then((res) => {
      dispatch(changeUserEvent(res));
    });
  };
};

// 获取用户关注
export const getUserFollowsList = (uid, limit, offset, cookie) => {
  return (dispatch) => {
    getUserFollow(uid, limit, offset, cookie).then((res) => {
      const result = res?.follow;
      dispatch(changeUserFollows(result));
    });
  };
};

// 获取用户关注分页
export const getUserFollowPageAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeUserFollowCurrentPage(currentPage));
  };
};

// 获取用户粉丝
export const getUserFansList = (uid, limit, offset, cookie) => {
  return (dispatch) => {
    getUserFans(uid, limit, offset, cookie).then((res) => {
      const result = res?.followeds;
      dispatch(changeUserFans(result));
    });
  };
};

// 获取用户粉丝分页
export const getUserFansPageAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeUserFansCurrentPage(currentPage));
  };
};

// 获取登录用户关注
export const getLoginUserFollows = (uid, limit, offset, cookie) => {
  return (dispatch) => {
    getUserFollow(uid, limit, offset, cookie).then((res) => {
      const result = res?.follow;
      dispatch(changeLogonUserFollows(result));
    });
  };
};
