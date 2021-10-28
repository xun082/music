import * as actionTypes from "./constants";

import {
  getTopListInfo,
  getTopListDetail,
  getTopListComment,
  getTopListNewComment,
} from "@/services/ranking";

// 左边的排行榜
const changeRankingListAction = (res) => ({
  type: actionTypes.CHANGE_RANKING_LIST,
  ranKingList: res.list,
});

// 改变当前索引Action
export const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index,
});

// 改变当前歌单的ID_Action
export const changeCurrentRanKingListIdAction = (id) => ({
  type: actionTypes.CHANGE_CURRENT_RANKING_LIST_ID,
  id,
});

// 改变榜单标题详情Action
const changeRankingListTitleInfo = (titleInfo) => ({
  type: actionTypes.CHANGE_CURRENT__RANKING_LIST_TITLE_INFO,
  titleInfo,
});

// 改变不同榜单列表Action;
const changeCurrentRanKingList = (list) => ({
  type: actionTypes.CHANGE_CURRENT_RANKING_LIST,
  list,
});

// 歌单热门评论;
const changeRankingHotComment = (list) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  list,
});

// 最新评论
const changeRankingNewComment = (list) => ({
  type: actionTypes.CHANGE_NEW_COMMENT,
  list,
});

// 分页初始页
const changeRankingCurrentPage = (list) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  list,
});

// 评论total
const changeRankingTotal = (list) => ({
  type: actionTypes.CHANGE_PAGE_TOTAL,
  list,
});

// 榜单标题信息 network
export const getRanKingListTitleInfoAction = (id = 19723756) => {
  return (dispatch) => {
    getTopListDetail(id).then((res) => {
      console.log(res);
      // 取出榜单标题详情信息
      const {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      } = res && res.playlist;
      const ranKingListTitleInfo = {
        coverImgUrl,
        name,
        trackNumberUpdateTime,
        playCount,
        subscribedCount,
        commentCount,
        shareCount,
      };
      dispatch(changeRankingListTitleInfo(ranKingListTitleInfo));
    });
  };
};
// 左边排行榜
export const getRankingListAction = () => {
  return (dispatch) => {
    getTopListInfo().then((res) => {
      console.log(res);
      dispatch(changeRankingListAction(res));
    });
  };
};

// 榜单列表详情信息 network 音乐列表
export const getRanKingListItemAction = (id = 19723756) => {
  return (dispatch) => {
    getTopListDetail(id).then((res) => {
      // 榜单列表详情信息
      const currentRanKingList = res && res.playlist && res.playlist.tracks;
      dispatch(changeCurrentRanKingList(currentRanKingList));
    });
  };
};

//获取歌单热门评论
export const getRanKingHotCommentAction = (id, type) => {
  return (dispatch) => {
    getTopListComment(id, type).then((res) => {
      const data = res && res.data && res.data.comments;
      dispatch(changeRankingHotComment(data));
    });
  };
};

//获取歌单热门评论
export const getRanKingNewCommentAction = (id, limit = 20, offset) => {
  return (dispatch) => {
    getTopListNewComment(id, limit, offset).then((res) => {
      const comment = res && res.comments;
      const total = res && res.total;
      dispatch(changeRankingNewComment(comment));
      dispatch(changeRankingTotal(total));
    });
  };
};

// 分页
export const getRankingCommentTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeRankingCurrentPage(currentPage));
  };
};
