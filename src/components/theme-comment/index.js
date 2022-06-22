import React, { memo, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import { CommentWrapper } from "./style";
import { formatMonthDay, getSizeImage } from "@/utils/format-utils.js";
import { changeIsVisible } from "@/components/theme-login/store/index";
import { sendLikeComment } from "@/services/comment";
import { getQueryObject } from "@/utils/format-utils.js";

export default memo(function CommentCard(props) {
  const [flag, setFlag] = useState(false);

  const { info } = props;
  const timer = info && info.time;
  const time = formatMonthDay(timer);
  const picUrl = info && info.user.avatarUrl;
  const dispatch = useDispatch();

  const { isLogin, cookie } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      cookie: state.getIn(["loginState", "cookie"]),
    }),
    shallowEqual
  );

  const id = info && info.commentId;
  let liked = info && info.liked;
  let likedCount = info && info.likedCount;
  const name = info && info.user && info.user.nickname;
  const content = info && info.content;

  const sendCommentLink = () => {
    if (!isLogin) {
      // 没登陆
      dispatch(changeIsVisible(true));
    }
    if (!flag) {
      liked = !liked;
      likedCount += 1;
      sendLikeComment(getQueryObject(), id, 1, 2, cookie).then((res) => {
        if (res.code === 200) message.success("点赞成功");
      });
    } else {
      liked = !liked;
      likedCount -= 1;
      setFlag(true);
      sendLikeComment(getQueryObject(), id, 0, 2, cookie).then((res) => {
        if (res.code === 200) message.success("已取消点赞");
      });
    }
    setFlag(!flag);
  };

  return (
    <CommentWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl, 50)} alt="" />
      </div>
      <div className="main">
        <a href="/#" className="name">
          {name}
        </a>
        <span className="content">： {content}</span>
        <div className="control">
          <div className="time">{time}</div>
          <div className="right-control">
            <div
              className="like sprite_icon2"
              onClick={() => sendCommentLink()}
            ></div>
            <div className="like-count">({likedCount})</div>
            <div className="answer">回复</div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  );
});
