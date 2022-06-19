import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  userInfo: {},
  userEvent: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_OTHER_USER_INFO:
      return state.set("userInfo", action.userInfo);
    case actionTypes.CHANGE_USER_EVENT:
      return state.set("userEvent", action.userEvent);
    default:
      return state;
  }
}

export default reducer;
