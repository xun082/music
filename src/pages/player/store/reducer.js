import { Map } from "immutable";
import * as actionType from "./actionType";
// 使用immutable管理state

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0, // 0循环播放  1随机播放  2单曲循环
  firstLoad: true,
  lyricList: [],
  currentLyricIndex: 0,
  addSongDetail: {},
  playListCount: 5,
  hotComments: [],
  currentCommentTotal: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set("playSequence", action.sequence);
    case actionType.CHANGE_FIRST_LOAD:
      return state.set("firstLoad", action.isLoad);
    case actionType.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyric);
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionType.CHANGE_ADD_SONG_DETAIL:
      return state.set("addSongDetail", action.addSongDetail);
    case actionType.CHANGE_PLAY_LIST_COUNT:
      return state.set("playListCount", action.count);
    case actionType.CHANGE_HOT_COMMENT:
      return state.set("hotComments", action.hotComments);
    case actionType.CHANGE_CURRENT_TOTAL:
      return state.set("currentCommentTotal", action.total);
    default:
      return state;
  }
}

export default reducer;
