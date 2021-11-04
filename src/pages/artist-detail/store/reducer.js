import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  artistDetail: {},
  likedArtist: [],
  artistSong: [],
  artistMovie: [],
  artistAlbum: [],
  artistDesc: {},
  currentPage: 1,
  albumTotal: 0,
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
    case actionTypes.CHANGE_ARTIST_ALBUM:
      return state.set("artistAlbum", action.res);
    case actionTypes.CHANGE_ARTIST_DESC:
      return state.set("artistDesc", action.res);
    case actionTypes.CHANGE_ALBUM_PAGE:
      return state.set("currentPage", action.res);
    case actionTypes.CHANGE_ALBUM_TOTAL:
      return state.set("albumTotal", action.res);
    default:
      return state;
  }
}
export default reducer;
