import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 0, // 0循环 1随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0,
  addSongDetail: {},
  playListCount: 5,
  hotComments: [],
  currentCommentTotal: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_ADD_SONG_DETAIL:
      return state.set("addSongDetail", action.addSongDetail);
    case actionTypes.CHANGE_PLAY_LIST_COUNT:
      return state.set("playListCount", action.count);
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set("hotComments", action.hotComments);
    case actionTypes.CHANGE_CURRENT_TOTAL:
      return state.set("currentCommentTotal", action.total);
    default:
      return state;
  }
}

export default reducer;
