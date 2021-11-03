import * as actionTypes from "./constants";

import { getArtistCategory } from "@/services/artist";

export const changeArtistCategoryAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_CATEGORY,
  res,
});

export const changeArtistHeaderAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_HEADER,
  res,
});

// 获取歌手列表
export const getArtistCategoryAction = (limit, offset, type, area, initial) => {
  return (dispatch) => {
    getArtistCategory(limit, offset, type, area, initial).then((res) => {
      const item = res && res.artists;
      dispatch(changeArtistCategoryAction(item));
    });
  };
};

// 获取头部信息
export const getArtistHeaderAction = (name) => {
  return (dispatch) => {
    dispatch(changeArtistHeaderAction(name));
  };
};
