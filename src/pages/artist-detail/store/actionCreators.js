import * as actionTypes from "./constants";

import {
  getArtistDetail,
  getArtistCategory,
  getArtistSong,
  getArtistMovie,
  getArtistAlbum,
  getArtistDesc,
} from "@/services/artist";

const changeArtistUserInfoAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_DETAIL,
  res,
});

const changeLikedArtistAction = (res) => ({
  type: actionTypes.CHANGE_LIKED_ARTIST,
  res,
});

// 获取歌手热门歌曲
const changeArtistSongAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_SONG,
  res,
});

// 获取歌手MV
const changeArtistMovieAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_MOVIE,
  res,
});

// 获取歌手专辑
const changeArtistAlbumAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_ALBUM,
  res,
});

// 获取歌手描述
const changeArtistDescAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_DESC,
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

// 获取歌手详情信息
export const getArtistDetailAction = (id) => {
  return (dispatch) => {
    getArtistDetail(id).then((res) => {
      const user = res && res.data && res.data.artist;
      dispatch(changeArtistUserInfoAction(user));
    });
  };
};

// 获取热门列表
export const getArtistCategoryAction = (
  limit = 6,
  offset = 1,
  type = 1,
  area = 7,
  initial = -1
) => {
  return (dispatch) => {
    getArtistCategory(limit, offset, type, area, initial).then((res) => {
      const item = res && res.artists;
      dispatch(changeLikedArtistAction(item));
    });
  };
};

// 获取歌手热门歌曲
export const getArtistSongAction = (id) => {
  return (dispatch) => {
    getArtistSong(id).then((res) => {
      const songs = res && res.songs;
      dispatch(changeArtistSongAction(songs));
    });
  };
};

// 获取歌手mv
export const getArtistMovieAction = (id) => {
  return (dispatch) => {
    getArtistMovie(id).then((res) => {
      const movie = res && res.mvs;
      dispatch(changeArtistMovieAction(movie));
    });
  };
};

// 获取歌手描述
export const getArtistDescAction = (id) => {
  return (dispatch) => {
    getArtistDesc(id).then((res) => {
      dispatch(changeArtistDescAction(res));
    });
  };
};

// 获取歌手专辑
export const getArtistAlbumAction = (id, limit, offset) => {
  return (dispatch) => {
    getArtistAlbum(id, limit, offset).then((res) => {
      const total = res && res.artist && res.artist.albumSize;
      const album = res && res.hotAlbums;
      dispatch(changeArtistAlbumAction(album));
      dispatch(changeAlbumTotal(total));
    });
  };
};

// 分页
export const getArtistAlbumTotalAction = (currentPage) => {
  return (dispatch) => {
    dispatch(changeAlbumCurrentPage(currentPage));
  };
};
