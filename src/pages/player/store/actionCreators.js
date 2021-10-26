import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";
import { addPlaylistId } from "@/utils/localstorage";

import * as actionTypes from "./constants";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

// 更改播放列表Action
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

// 改变歌曲数量
const changePlayListCount = (count) => ({
  type: actionTypes.CHANGE_PLAY_LIST_COUNT,
  count,
});
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

// 歌词
const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICS_LIST,
  lyricList,
});

// 对外暴露的action
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

// 歌词
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

export const changeCUrrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌词
    // dispatch(getLyricAction(currentSong.id));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);

    // 2.判断是否找到歌曲
    let song = null;
    if (songIndex !== -1) {
      // 查找歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    } else {
      // 没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) return;

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 3.请求歌词
        if (!song) return;
        dispatch(getLyricAction(song.id));
      });
    }
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList));
    });
  };
};

// 获取歌曲详情用于添加到播放列表
export const getAddSongDetailAction = (id) => {
  return (dispatch, getState) => {
    getSongDetail(id).then((res) => {
      console.log(res);
      addPlaylistId(id);
      const playList = getState().getIn(["player", "playList"]);
      // 先判断是已经存在播放列表,如果不存在,再进行添加
      const songIndex = playList.findIndex((song) => song.id === id);
      if (songIndex !== -1) return; // 找到了(后续不再执行)
      // 获取要添加播放的歌曲信息
      const willAddSong = res.songs && res.songs[0];
      // 添加到播放列表
      playList.push(willAddSong);
      // 派发action
      dispatch(changePlayListAction(playList));
      dispatch(changePlayListCount(playList.length));
    });
  };
};