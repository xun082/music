import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  mvInfo: {},
  mvLink: "",

  newComments: [],
  hotComments: [],
  commentTotal: 0,
  currentPage: 1,

  similarMv: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MV_INFO:
      return state.set("mvInfo", action.res);
    case actionTypes.CHANGE_MV_LINK:
      return state.set("mvLink", action.res);
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set("hotComments", action.res);
    case actionTypes.CHANGE_NEW_COMMENT:
      return state.set("newComments", action.res);
    case actionTypes.CHANGE_PAGE_TOTAL:
      return state.set("commentTotal", action.res);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.res);
    case actionTypes.CHANGE_SIMILAR_MV:
      return state.set("similarMv", action.res);
    default:
      return state;
  }
}

export default reducer;
