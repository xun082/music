import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  anchorRecommend: [],
  anchorRanking: [],
  anchorMusic: [],
  anchorLife: [],
  anchorKnowledge: [],
  anchorCreate: [],
  anchorEmotion: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ANCHOR_RECOMMEND:
      return state.set("anchorRecommend", action.res);
    case actionTypes.CHANGE_ANCHOR_RANKING:
      return state.set("anchorRanking", action.res);
    case actionTypes.CHANGE_ANCHOR_MUSIC:
      return state.set("anchorMusic", action.res);
    case actionTypes.CHANGE_ANCHOR_LIFE:
      return state.set("anchorLife", action.res);
    case actionTypes.CHANGE_ANCHOR_CREATE:
      return state.set("anchorKnowledge", action.res);
    case actionTypes.CHANGE_ANCHOR_KNOWLEDGE:
      return state.set("anchorCreate", action.res);
    case actionTypes.CHANGE_ANCHOR_EMOTION:
      return state.set("anchorEmotion", action.res);
    default:
      return state;
  }
}

export default reducer;
