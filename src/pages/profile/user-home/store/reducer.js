import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  userInfo: {},
  userEvent: {},
  userFollows: [],
  userFans: [],
  isVisible: false,
  loginUserFollow: [],
  currentPage: 1,
  fansCurrentPage: 1,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_OTHER_USER_INFO:
      return state.set("userInfo", action.userInfo);
    case actionTypes.CHANGE_USER_EVENT:
      return state.set("userEvent", action.userEvent);
    case actionTypes.CHANGE_USER_FOLLOWS:
      return state.set("userFollows", action.userFollows);
    case actionTypes.CHANGE_VISIBLE_STATE:
      return state.set("isVisible", action.isVisible);
    case actionTypes.CHANGE_LOGIN_USER_FOLLOW:
      return state.set("loginUserFollow", action.loginUserFollow);
    case actionTypes.CHANGE_OTHER_USER_PAGE:
      return state.set("currentPage", action.currentPage);
    case actionTypes.CHANGE_USER_FANS_PAGE:
      return state.set("fansCurrentPage", action.fansCurrentPage);
    case actionTypes.CHANGE_USER_FANS:
      return state.set("userFans", action.userFans);
    default:
      return state;
  }
}

export default reducer;
