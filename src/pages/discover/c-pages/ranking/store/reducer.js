import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  ranKingList: [],
  currentIndex: 0,
  currentRanKingListId: 19723756,
  // currentRanKingListTitleInfo: {},
  rankingTitleInfo: {},
  currentRanKingList: [],
  hotCommentList: [],
  newCommentList: [],
  currentPage: 1,
  commentTotal: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RANKING_LIST:
      return state.set("ranKingList", action.ranKingList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.index);
    case actionTypes.CHANGE_CURRENT_RANKING_LIST_ID:
      return state.set("currentRanKingListId", action.id);
    case actionTypes.CHANGE_RANKING_TITLE:
      return state.set("rankingTitleInfo", action.res);
    case actionTypes.CHANGE_CURRENT_RANKING_LIST:
      return state.set("currentRanKingList", action.list);
    case actionTypes.CHANGE_HOT_COMMENT:
      return state.set("hotCommentList", action.list);
    case actionTypes.CHANGE_NEW_COMMENT:
      return state.set("newCommentList", action.list);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.list);
    case actionTypes.CHANGE_PAGE_TOTAL:
      return state.set("commentTotal", action.list);
    default:
      return state;
  }
}

export default reducer;
