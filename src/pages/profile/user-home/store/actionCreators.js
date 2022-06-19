import * as actionTypes from "./constants";

import { getOtherUserInfo, getUserEvent } from "@/services/user";

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

// 获取其他用户信息
export const getOtherUser = (uid) => {
  return (dispatch) => {
    getOtherUserInfo(uid).then((res) => {
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
