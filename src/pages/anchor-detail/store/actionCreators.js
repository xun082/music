import * as actionTypes from "./constants";

import {
  getAnchorDetail,
  getDjProgram,
  getProgramDetail,
} from "@/services/anchor";

const changeAnchorInfoAction = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_DETAIL,
  res,
});

const changeAnchorProgramAction = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_PROGRAM,
  res,
});

// 节目详情
const changeProgramDetailAction = (res) => ({
  type: actionTypes.CHANGE_PROGRAM_DETAIL,
  res,
});

// 获取电台信息
export const getProgramDetailAction = (id) => {
  return (dispatch) => {
    getProgramDetail(id).then((res) => {
      console.log(res.program);
      const {
        categoryName,
        description,
        name,
        shareCount,
        createTime,
        likedCount,
        listenerCount,
        coverUrl,
        commentCount,
        duration,
        serialNum,
        radio,
      } = res.program;
      const item = {
        categoryName,
        description,
        name,
        shareCount,
        createTime,
        likedCount,
        listenerCount,
        coverUrl,
        commentCount,
        duration,
        serialNum,
        radio,
      };
      dispatch(changeProgramDetailAction(item));
    });
  };
};

// 获取节目详情
export const getAnchorDetailAction = (rid) => {
  return (dispatch) => {
    getAnchorDetail(rid).then((res) => {
      const { name, desc, picUrl, shareCount, subCount, category } =
        res && res.data;
      const { nickname, avatarUrl } = res && res.data && res.data.dj;
      const info = {
        name,
        desc,
        picUrl,
        shareCount,
        subCount,
        category,
        nickname,
        avatarUrl,
      };
      dispatch(changeAnchorInfoAction(info));
    });
  };
};

// 获取电台信息
export const getAnchorProgramAction = (rid) => {
  return (dispatch) => {
    getDjProgram(rid).then((res) => {
      dispatch(changeAnchorProgramAction(res));
    });
  };
};
