import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  artistDetail: {},
  likedArtist: [],
  artistSong: [],
  artistMovie: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_DETAIL:
      return state.set("artistDetail", action.res);
    case actionTypes.CHANGE_LIKED_ARTIST:
      return state.set("likedArtist", action.res);
    case actionTypes.CHANGE_ARTIST_SONG:
      return state.set("artistSong", action.res);
      case actionTypes.CHANGE_ARTIST_MOVIE:
        return state.set("artistMovie", action.res);
    default:
      return state;
  }
}
export default reducer;
