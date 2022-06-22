import React, { memo, useCallback } from "react";

import { EmailButtonWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeLatterIsVisible } from "@/pages/profile/user-home/store/actionCreators";
import { getLoginUserFollows } from "@/pages/profile/user-home/store/actionCreators";

const XXEmailButton = memo((props) => {
  // isShow如果不传，已关注就显示，传了就为none
  const { id, isShow = "block" } = props;

  const { userInfo } = useSelector(
    (state) => ({
      userInfo: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );

  // 获取登录用户的id，获取该用户的关注列表
  const userId = userInfo?.userId;

  const dispatch = useDispatch();

  const sendLatter = useCallback(
    (id) => {
      dispatch(changeLatterIsVisible(true));
      dispatch(getLoginUserFollows(userId, 30, 0));
    },
    [userId, dispatch]
  );
  return (
    <EmailButtonWrapper isShow="no">
      <div
        className="email sprite_button2"
        onClick={() => {
          sendLatter(id);
        }}
      >
        发私信
      </div>
      <div className="status" style={{ display: isShow }}>
        ✓ 已关注
      </div>
    </EmailButtonWrapper>
  );
});

export default XXEmailButton;
