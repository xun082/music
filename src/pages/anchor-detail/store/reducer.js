import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  anchorInfo: {},
  program: {},
  programInfo: {},
  programNewComment: [],
  programHotComment: [],
  currentPage: 1,
  commentTotal: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ANCHOR_DETAIL:
      return state.set("anchorInfo", action.res);
    case actionTypes.CHANGE_ANCHOR_PROGRAM:
      return state.set("program", action.res);
    case actionTypes.CHANGE_PROGRAM_DETAIL:
      return state.set("programInfo", action.res);
    case actionTypes.CHANGE_NEW_COMMENT:
      return state.set("programNewComment", action.res);
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set("programHotComment", action.res);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.res);
    case actionTypes.CHANGE_PAGE_TOTAL:
      return state.set("commentTotal", action.res);
    default:
      return state;
  }
}

export default reducer;
