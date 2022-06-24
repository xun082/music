import { gotoPhoneLogin } from "@/services/login";
import { getUserDetailInfo, getUserRecordInfo } from "@/services/user";
import * as actionTypes from "./actionTypes";
import { loginInfo } from "@/config/token";
import { getLoginInfo, setLoginInfo } from "@/utils/secret-key";
import md5 from "js-md5";
import { message } from "antd";
// 更改登录框显示
export const changeIsVisible = (visibleState) => ({
  type: actionTypes.CHANGE_IS_VISIBLE_STATE,
  isVisible: visibleState,
});

// 更改登录用户信息
export const changeUserProfile = (profileInfo) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile: profileInfo,
});

// 更改登录状态
export const changeUserLoginState = (loginState) => ({
  type: actionTypes.CHANGE_USER_LOGIN_STATE,
  isLogin: loginState,
});

// 更改登录状态(token)
export const changeUserLoginToken = (token) => ({
  type: actionTypes.CHANGE_PROFILE_TOKEN,
  token,
});

// 更改登录状态(cookie)
export const changeUserLoginCookie = (cookie) => ({
  type: actionTypes.CHANGE_PROFILE_COOKIE,
  cookie,
});

// 获取用户详情信息(uid)
const changeUserDetailInfo = (uid) => ({
  type: actionTypes.CHANGE_USER_DETAIL_INFO,
  uid,
});

// 获取用户播放记录(uid)
const changeUserPlayRecord = (uid) => ({
  type: actionTypes.CHANGE_USER_PLAY_RECORD,
  uid,
});

// -------------获取登录信息-------------
export const getLoginProfileInfo = (username, password, tip) => {
  return (dispatch) => {
    gotoPhoneLogin(username, undefined, md5(password)).then((res) => {
      // console.log(res)
      if (res.code !== 200) {
        message.error("账号或密码错误");
      } else {
        tip && message.success("登录成功");
        // console.log(res)
        // 登录成功
        document.cookie = res.cookie;
        // 保存登录信息
        dispatch(changeUserProfile(res && res.profile));
        // 更改登录状态
        dispatch(changeUserLoginState(true));
        dispatch(changeUserLoginToken(res.token));
        dispatch(changeUserLoginCookie(res.cookie));
        // 更改登录状态
        loginInfo.username = username;
        loginInfo.password = password;
        loginInfo.state = true;
        const loginInfoObject = {};
        let newLoginInfo = Object.assign(loginInfoObject, loginInfo);
        setLoginInfo("loginInfo", newLoginInfo);
        getLoginInfo("loginInfo");
        // 关闭模态框
        dispatch(changeIsVisible(false));
      }
    });
  };
};

// 获取登录详情信息
export const getUserDetailInfoAction = (id) => {
  return (dispatch) => {
    getUserDetailInfo(id).then((res) => {
      dispatch(changeUserDetailInfo(res));
    });
  };
};

// 获取播放记录
export const getUserPlayRecordAction = (type = 0, uid) => {
  return (dispatch) => {
    getUserRecordInfo(type, uid).then((res) => {
      dispatch(changeUserPlayRecord(res.weekData));
    });
  };
};
