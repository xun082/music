import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  settleSinger: [],
  hotAnchors: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  personList: [],
  dayRecommend: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case actionTypes.CHANGE_SETTLE_SINGER:
      return state.set("settleSinger", action.settleSinger);
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set("hotAnchors", action.hotAnchors);
    case actionTypes.CHANGE_PERSON_LIST:
      return state.set("personList", action.res);
    case actionTypes.CHANGE_DAY_RECOMMEND:
      return state.set("dayRecommend", action.res);
    default:
      return state;
  }
}
export default reducer;
