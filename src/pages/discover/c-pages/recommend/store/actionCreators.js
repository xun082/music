import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopLists,
  getSettleSinger,
  getHotAnchor,
} from "@/services/recommend";

// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// 热门推荐
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

// 新碟上架
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.weekData,
});

// 榜单
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

// 入驻歌手
const changeSettleSingerAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists,
});

// 热门主播
const changeHotAnchorAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  hotAnchors: res.toplist,
});

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

// 入驻歌手
export const getSettleSingerAction = (limit) => {
  return (dispatch) => {
    getSettleSinger(limit).then((res) => {
      dispatch(changeSettleSingerAction(res));
    });
  };
};

// 热门主播
export const getHotAnchorAction = (limit, type) => {
  return (dispatch) => {
    getHotAnchor(limit, type).then((res) => {
      dispatch(changeHotAnchorAction(res));
    });
  };
};

// 榜单
export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopLists(id).then((res) => {
      switch (id) {
        case 3778678:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 19723756:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};
