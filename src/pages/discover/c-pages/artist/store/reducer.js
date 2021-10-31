import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  artistArray: [],
  currentHeader: "华语男歌手",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_CATEGORY:
      return state.set("artistArray", action.res);
    case actionTypes.CHANGE_ARTIST_HEADER:
      return state.set("currentHeader", action.res);
    default:
      return state;
  }
}

export default reducer;
