import * as actionTypes from "./constants";

import {
  getMessageNotify,
  getMessageAt,
  getMessageComment,
  getMessagePrivate,
} from "@/services/message";

const changeMessageNotifyAction = (res) => ({
  type: actionTypes.CHANGE_MESSAGE_NOTIFY,
  res,
});

const changeMessageAtAction = (res) => ({
  type: actionTypes.CHANGE_MESSAGE_AT,
  res,
});

const changeMessageCommentAction = (res) => ({
  type: actionTypes.CHANGE_MESSAGE_COMMENT,
  res,
});

const changeMessagePrivateAction = (res) => ({
  type: actionTypes.CHANGE_MESSAGE_PRIVATE,
  res,
});

// 获取通知信息
export const getMessageNotifyAction = (limit, lasttime, cookie) => {
  return (dispatch) => {
    getMessageNotify(limit, lasttime, cookie).then((res) => {
      dispatch(changeMessageNotifyAction(res?.notices));
    });
  };
};

// 获取@ 我的信息
export const getMessageAtAction = (limit, offset, cookie) => {
  return (dispatch) => {
    getMessageAt(limit, offset, cookie).then((res) => {
      dispatch(changeMessageAtAction(res?.forwards));
    });
  };
};

// 获取评论信息
export const getMessageCommentAction = (uid, limit, cookie) => {
  return (dispatch) => {
    getMessageComment(uid, limit, cookie).then((res) => {
      dispatch(changeMessageCommentAction(res?.comments));
    });
  };
};

// 获取私信信息
export const getMessagePrivateAction = (limit, offset, cookie) => {
  return (dispatch) => {
    getMessagePrivate(limit, offset, cookie).then((res) => {
      dispatch(changeMessagePrivateAction(res?.msgs));
    });
  };
};
