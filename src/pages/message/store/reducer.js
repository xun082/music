import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  notify: [],
  at: [],
  comment: [],
  private: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE_NOTIFY:
      return state.set("notify", action.res);
    case actionTypes.CHANGE_MESSAGE_AT:
      return state.set("at", action.res);
    case actionTypes.CHANGE_MESSAGE_COMMENT:
      return state.set("comment", action.res);
    case actionTypes.CHANGE_MESSAGE_PRIVATE:
      return state.set("private", action.res);
    default:
      return state;
  }
}
export default reducer;
