import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { CommentFormWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils.js";
import { Input } from "antd";
import { changeIsVisible } from "@/components/theme-login/store";
const { TextArea } = Input;

function CommentForm(props) {
  const { handle } = props;
  // redux
  const dispatch = useDispatch();

  const { isLogin, avatarUrl } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      avatarUrl: state.getIn(["loginState", "profile", "avatarUrl"]),
    }),
    shallowEqual
  );

  const defaultImg = "https://i.ibb.co/DYwLdM9/header-1af6756a.png";
  const picUrl = avatarUrl || defaultImg;

  const Editor = () => (
    <TextArea
      id="my-input"
      className="textArea"
      placeholder="评论..."
      rows={4}
    />
  );

  const handleLogin = () => {
    if (!isLogin) dispatch(changeIsVisible(true));
  };

  return (
    <CommentFormWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl, 50)} alt="" />
      </div>
      <div
        className="form"
        onClick={(e) => {
          handleLogin();
        }}
      >
        <div className="input">
          <Editor />
        </div>
        <div className="form-control">
          <div className="left-icon">
            <div className="express sprite_icon2"></div>
            <div className="ai-te sprite_icon2"></div>
          </div>
          <div className="button sprite_button2" onClick={handle}>
            评论
          </div>
        </div>
      </div>
    </CommentFormWrapper>
  );
}

export default memo(CommentForm);
