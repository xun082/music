import * as actionTypes from "./constants";

import { getPlayListDetail } from "@/services/playlist";

export const changePlayListInfoAction = (res) => ({
  type: actionTypes.CHANGE_PLAYLIST_DETAIL,
  res,
});

export const changePlayListArrayAction = (res) => ({
  type: actionTypes.CHANGE_PLAYLIST_ARRAY,
  res,
});

export const changePlayListLikedAction = (res) => ({
  type: actionTypes.CHANGE_PLAYLIST_SUBSCRIBERS,
  res,
});

// 获取歌手列表
export const getPlayListAction = (id, s, cookie) => {
  return (dispatch) => {
    getPlayListDetail(id, s, cookie).then((res) => {
      const item = res && res.playlist;
      const arr = item && item.tracks;
      const subscribers = item && item.subscribers;
      dispatch(changePlayListInfoAction(item));
      dispatch(changePlayListArrayAction(arr));
      dispatch(changePlayListLikedAction(subscribers));
    });
  };
};
