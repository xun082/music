import * as actionTypes from "./constants";

import {
  getMvDetail,
  getMvLink,
  getMvComment,
  getSimilarMv,
} from "@/services/mv";

const changeMvInfoAction = (res) => ({
  type: actionTypes.CHANGE_MV_INFO,
  res,
});

const changeMvLinkAction = (res) => ({
  type: actionTypes.CHANGE_MV_LINK,
  res,
});

// 热门评论
const changeMvHotCommentAction = (res) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  res,
});

// mv新评论
const changeMvNewCommentAction = (res) => ({
  type: actionTypes.CHANGE_NEW_COMMENT,
  res,
});

// 分页初始页
const changeMvCurrentPage = (res) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  res,
});

// 评论total
const changeMvTotal = (res) => ({
  type: actionTypes.CHANGE_PAGE_TOTAL,
  res,
});

//推荐视频
const changeSimilarMv = (res) => ({
  type: actionTypes.CHANGE_SIMILAR_MV,
  res,
});

// 获取mv信息
export const getMvInfoAction = (mvid) => {
  return (dispatch) => {
    getMvDetail(mvid).then((res) => {
      const {
        commentCount,
        name,
        artistName,
        artistId,
        cover,
        desc,
        playCount,
        publishTime,
        shareCount,
        subCount,
      } = res && res.data;
      const item = {
        name,
        commentCount,
        artistName,
        artistId,
        cover,
        desc,
        playCount,
        publishTime,
        shareCount,
        subCount,
      };
      dispatch(changeMvInfoAction(item));
    });
  };
};

// 获取mv link
export const getMvLinkAction = (id) => {
  return (dispatch) => {
    getMvLink(id).then((res) => {
      const item = res && res.data;
      dispatch(changeMvLinkAction(item));
    });
  };
};

// 获取mv评论
export const getCommentAction = (id, limit, offset) => {
  return (dispatch) => {
    getMvComment(id, limit, offset).then((res) => {
      const hotComments = res && res.hotComments;
      const comments = res && res.comments;
      const total = res && res.total;

      dispatch(changeMvHotCommentAction(hotComments));
      dispatch(changeMvNewCommentAction(comments));
      dispatch(changeMvTotal(total));
    });
  };
};

// 分页
export const getMvCommentTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeMvCurrentPage(currentPage));
  };
};

// 获取mv推荐
export const getSimilarMvAction = (id) => {
  return (dispatch) => {
    getSimilarMv(id).then((res) => {
      const item = res && res.data;
      dispatch(changeSimilarMv(item));
    });
  };
};
