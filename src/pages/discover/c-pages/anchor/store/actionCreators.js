import * as actionTypes from "./constants";

import { getRecommendAnchor, getRankingAnchor } from "@/services/anchor";

// 推荐电台
const changeRecommendAnchor = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_RECOMMEND,
  res,
});

// 电台排行榜
const changeRankingAnchor = (res) => ({
  type: actionTypes.CHANGE_ANCHOR_RANKING,
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
export const getRankingAnchorAction = (limit, offset) => {
  return (dispatch) => {
    getRankingAnchor(100).then((res) => {
      console.log(res);
    });
  };
};
