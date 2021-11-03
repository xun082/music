import * as actionTypes from "./constants";

import {
  getArtistDetail,
  getArtistCategory,
  getArtistSong,
  getArtistMovie,
} from "@/services/artist";

export const changeArtistUserInfoAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_DETAIL,
  res,
});

export const changeLikedArtistAction = (res) => ({
  type: actionTypes.CHANGE_LIKED_ARTIST,
  res,
});

// 获取歌手热门歌曲
export const changeArtistSongAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_SONG,
  res,
});

// 获取歌手MV
export const changeArtistMovieAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_MOVIE,
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
      console.log(res);
      // console.log(res.songs);
      const songs = res && res.songs;
      dispatch(changeArtistSongAction(songs));
    });
  };
};

// 获取歌手热门歌曲
export const getArtistMovieAction = (id) => {
  return (dispatch) => {
    getArtistMovie(id).then((res) => {
      const movie = res && res.mvs;
      dispatch(changeArtistMovieAction(movie));
    });
  };
};
