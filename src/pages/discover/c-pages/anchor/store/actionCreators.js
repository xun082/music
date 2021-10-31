import * as actionTypes from "./constants";

import {
  getRecommendAnchor,
  getRankingAnchor,
  getAnchorCategory,
  getBannerCategory,
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

// 获取优秀电台
const changeAnchorExcellent = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_EXCELLENT,
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

// 分页初始页
const changeAnchorCurrentPage = (list) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  list,
});

// 电台total
const changeAnchorTotal = (list) => ({
  type: actionTypes.CHANGE_PAGE_TOTAL,
  list,
});

// 电台分类列表
const changeAnchorCategoryRanking = (list) => ({
  type: actionTypes.CHANGE_CATEGORY_RANKING,
  list,
});

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

// 获取优秀电台
export const getExcellentAnchorAction = (limit, type) => {
  return (dispatch) => {
    getAnchorCategory(limit, type).then((res) => {
      const item = res && res.djRadios;
      dispatch(changeAnchorExcellent(item));
    });
  };
};

// 分类排行榜
export const getBannerCategoryAction = (limit, offset, cateId) => {
  return (dispatch) => {
    getBannerCategory(limit, offset, cateId).then((res) => {
      console.log(res);
      const total = res && res.count;
      const item = res && res.djRadios;
      dispatch(changeAnchorCategoryRanking(item));
      dispatch(changeAnchorTotal(total));
    });
  };
};

// 分页
export const getRankingCommentTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeAnchorCurrentPage(currentPage));
  };
};
