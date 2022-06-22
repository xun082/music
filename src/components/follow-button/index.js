import React, { memo } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeIsVisible } from "@/components/theme-login/store/index";
import { SendFollowUser } from "@/services/user";
import { BUttonWrapper } from "./style";
import { message } from "antd";

const XXFollowButton = memo((props) => {
  const dispatch = useDispatch();
  const { id } = props;

  const { isLogin, cookie } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      cookie: state.getIn(["loginState", "cookie"]),
    }),
    shallowEqual
  );

  const follow = (id) => {
    if (!isLogin) {
      dispatch(changeIsVisible(true)); //没登录
    } else {
      SendFollowUser(id, 1, cookie).then((res) => {
        message.success({
          content: "关注成功",
          duration: 1,
        });
      });
    }
  };
  return (
    <BUttonWrapper
      className="sprite_button2"
      onClick={() => {
        follow(id);
      }}
    >
      关注
    </BUttonWrapper>
  );
});

export default XXFollowButton;
