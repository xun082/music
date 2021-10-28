import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  anchorRecommend: [],
  anchorRanking: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ANCHOR_RECOMMEND:
      return state.set("anchorRecommend", action.res);
    case actionTypes.CHANGE_ANCHOR_RANKING:
      return state.set("anchorRanking", action.res);
    default:
      return state;
  }
}

export default reducer;
