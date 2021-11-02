import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  playListInfo: {},
  playListArray: [],
  playListLiked: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PLAYLIST_DETAIL:
      return state.set("playListInfo", action.res);
    case actionTypes.CHANGE_PLAYLIST_ARRAY:
      return state.set("playListArray", action.res);
    case actionTypes.CHANGE_PLAYLIST_SUBSCRIBERS:
      return state.set("playListLiked", action.res);
    default:
      return state;
  }
}

export default reducer;
