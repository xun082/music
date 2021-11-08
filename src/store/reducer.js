import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
import { reducer as loginReducer } from "@/components/theme-login/store";
import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store";
import { reducer as anchorReducer } from "../pages/discover/c-pages/anchor/store";
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";
import { reducer as artistDetailReducer } from "../pages/artist-detail/store";
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";
import { reducer as playlistReducer } from "../pages/playList/store";
import { reducer as albumDetailReducer } from "../pages/album-detail/store";
import { reducer as anchorDetailReducer } from "../pages/anchor-detail/store";
import { reducer as mvReducer } from "../pages/movie/store";
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  loginState: loginReducer,
  songList: songsReducer,
  anchor: anchorReducer,
  artist: artistReducer,
  album: albumReducer,
  playlist: playlistReducer,
  artistDetail: artistDetailReducer,
  albumDetail: albumDetailReducer,
  anchorDetail: anchorDetailReducer,
  mv: mvReducer,
});

export default cReducer;
