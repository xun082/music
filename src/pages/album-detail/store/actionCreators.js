import * as actionTypes from "./constants";

import { getAlbumDetail, getAlbumComment } from "@/services/album";
import { getArtistAlbum } from "@/services/artist";

const changeAlbumInfoAction = (res) => ({
  type: actionTypes.CHANGE_ALBUM_DETAIL,
  res,
});

const changeAlbumSongsAction = (res) => ({
  type: actionTypes.CHANGE_ALBUM_SONGS,
  res,
});

// 歌单热门评论;
const changeAlbumHotComment = (res) => ({
  type: actionTypes.CHANGE_HOT_COMMENT,
  res,
});

// 最新评论
const changeAlbumNewComment = (res) => ({
  type: actionTypes.CHANGE_NEW_COMMENT,
  res,
});

// 分页初始页
const changeAlbumCurrentPage = (res) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  res,
});

// 评论total
const changeAlbumTotal = (res) => ({
  type: actionTypes.CHANGE_PAGE_TOTAL,
  res,
});

// 获取歌手专辑
const changeArtistAlbumAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_ALBUM,
  res,
});

// 获取专辑内容
export const getAlbumDetailAction = (id) => {
  return (dispatch) => {
    getAlbumDetail(id).then((res) => {
      const album = res && res.album;
      const songs = res && res.songs;
      dispatch(changeAlbumInfoAction(album));
      dispatch(changeAlbumSongsAction(songs));
    });
  };
};

// 专辑最新评论
export const getAlbumNewCommentAction = (id) => {
  return (dispatch) => {
    getAlbumComment(id).then((res) => {
      const comments = res && res.comments;
      dispatch(changeAlbumNewComment(comments));
    });
  };
};

// 专辑热门评论
export const getAlbumHotCommentAction = (id, limit, offset, before) => {
  return (dispatch) => {
    getAlbumComment(id, limit, offset, before).then((res) => {
      const total = res && res.total;
      const hotComments = res && res.hotComments;
      dispatch(changeAlbumTotal(total));
      dispatch(changeAlbumHotComment(hotComments));
    });
  };
};

// 分页
export const getAlbumCommentTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeAlbumCurrentPage(currentPage));
  };
};

// 获取歌手其他专辑
export const getArtistAlbumAction = (id, limit) => {
  return (dispatch) => {
    getArtistAlbum(id, limit).then((res) => {
      const album = res && res.hotAlbums;
      dispatch(changeArtistAlbumAction(album));
    });
  };
};
