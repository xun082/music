import * as actionTypes from "./constants";

import {
  getRecommendAnchor,
  getRankingAnchor,
  getAnchorCategory,
} from "@/services/anchor";

// 推荐电台
const changeRecommendAnchor = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_RECOMMEND,
  res,
});

// // 电台排行榜
const changeRankingAnchor = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_RANKING,
  res,
});

// // 电台分类
const changeAnchorMusic = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_MUSIC,
  res,
});
const changeAnchorLife = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_LIFE,
  res,
});
const changeAnchorEmotion = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_EMOTION,
  res,
});
const changeAnchorCreate = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_CREATE,
  res,
});
const changeAnchorKnowledge = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_KNOWLEDGE,
  res,
});

//获取推荐电台
export const getRecommendAnchorAction = () => {
  return (dispatch) => {
    getRecommendAnchor().then((res) => {
      const recommend = res && res.programs;
      dispatch(changeRecommendAnchor(recommend));
    });
  };
};

// 获取电台排行榜
export const getRankingAnchorAction = (limit) => {
  return (dispatch) => {
    getRankingAnchor(limit).then((res) => {
      const ranking = res && res.toplist;
      dispatch(changeRankingAnchor(ranking));
    });
  };
};

// 获取电台排行榜
export const getAnchorCategoryAction = (type) => {
  return (dispatch) => {
    getAnchorCategory(type).then((res) => {
      const item = res && res.djRadios;
      switch (type) {
        case 2:
          dispatch(changeAnchorMusic(item));
          break;
        case 3:
          dispatch(changeAnchorEmotion(item));
          break;
        case 2001:
          dispatch(changeAnchorCreate(item));
          break;
        case 11:
          dispatch(changeAnchorKnowledge(item));
          break;
        case 6:
          dispatch(changeAnchorLife(item));
          break;
        default:
      }
    });
  };
};
