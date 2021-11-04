import * as actionTypes from "./constants";

import { getNewAlbums } from "@/services/recommend";

// 新碟上架
const changeHotAlbumAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUM,
  res,
});

// 分页初始页
const changeAlbumCurrentPage = (res) => ({
  type: actionTypes.CHANGE_ALBUM_PAGE,
  res,
});

// total
const changeAlbumTotal = (res) => ({
  type: actionTypes.CHANGE_ALBUM_TOTAL,
  res,
});

// 获取碟列表
export const getHotAlbumAction = (offset, limit, area, type, year, month) => {
  return (dispatch) => {
    getNewAlbums(offset, limit, area, type, year, month).then((res) => {
      const item = res && res.monthData;
      const total = item && item.length;
      dispatch(changeHotAlbumAction(item));
      dispatch(changeAlbumTotal(total));
    });
  };
};

// 分页
export const getAlbumTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeAlbumCurrentPage(currentPage));
  };
};
