import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  albumInfo: {},
  albumSongs: [],
  albumHotComment: [],
  albumNewComment: [],
  currentPage: 1,
  commentTotal: 0,
  artistAlbum: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_DETAIL:
      return state.set("albumInfo", action.res);
    case actionTypes.CHANGE_ALBUM_SONGS:
      return state.set("albumSongs", action.res);
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set("albumHotComment", action.res);
    case actionTypes.CHANGE_NEW_COMMENT:
      return state.set("albumNewComment", action.res);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.res);
    case actionTypes.CHANGE_PAGE_TOTAL:
      return state.set("commentTotal", action.res);
    case actionTypes.CHANGE_ARTIST_ALBUM:
      return state.set("artistAlbum", action.res);
    default:
      return state;
  }
}

export default reducer;
