import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  anchorInfo: {},
  program: {},
  programInfo: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ANCHOR_DETAIL:
      return state.set("anchorInfo", action.res);
    case actionTypes.CHANGE_ANCHOR_PROGRAM:
      return state.set("program", action.res);
    case actionTypes.CHANGE_PROGRAM_DETAIL:
      return state.set("programInfo", action.res);
    default:
      return state;
  }
}

export default reducer;
