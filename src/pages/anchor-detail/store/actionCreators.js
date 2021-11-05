import * as actionTypes from "./constants";

import {
  getAnchorDetail,
  getDjProgram,
  getProgramDetail,
  getProgramComment,
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

// 节目新评论
const changeProgramNewCommentAction = (res) => ({
  type: actionTypes.CHANGE_NEW_COMMENT,
  res,
});

// 节目热门评论;
const changeProgramHotComment = (res) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  res,
});

// 分页初始页
const changeProgramCurrentPage = (res) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  res,
});

// 评论total
const changeProgramTotal = (res) => ({
  type: actionTypes.CHANGE_PAGE_TOTAL,
  res,
});

// 获取电台信息
export const getProgramDetailAction = (id) => {
  return (dispatch) => {
    getProgramDetail(id).then((res) => {
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

// 获取节目评论
export const getProgramCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getProgramComment(id, limit, offset).then((res) => {
      const comments = res && res.comments;
      const total = res && res.total;
      const hotComments = res && res.hotComments;
      dispatch(changeProgramTotal(total));
      dispatch(changeProgramNewCommentAction(comments));
      dispatch(changeProgramHotComment(hotComments));
    });
  };
};

// 分页
export const getProgramCommentTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeProgramCurrentPage(currentPage));
  };
};
