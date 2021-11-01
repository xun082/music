import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  hotAlbum: [],
  currentPage: 1,
  albumTotal: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      return state.set("hotAlbum", action.res);
    case actionTypes.CHANGE_ALBUM_PAGE:
      return state.set("currentPage", action.res);
    case actionTypes.CHANGE_ALBUM_TOTAL:
      return state.set("albumTotal", action.res);
    default:
      return state;
  }
}

export default reducer;
