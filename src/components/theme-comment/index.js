import React, { memo, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import { CommentWrapper } from "./style";
import { formatMonthDay, getSizeImage } from "@/utils/format-utils.js";
import { changeIsVisible } from "@/components/theme-login/store/index";
import { sendLikeComment } from "@/services/comment";
import { getRoute } from "@/utils/format-utils.js";

export default memo(function CommentCard(props) {
  const [flag, setFlag] = useState(false);

  const { info } = props;
  const time = formatMonthDay(info.time, "MM月dd日");
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

  const sendCommentLink = () => {
    console.log(liked);
    console.log(likedCount);
    if (!isLogin) {
      // 没登陆
      dispatch(changeIsVisible(true));
    }
    if (!flag) {
      liked = true;
      likedCount += 1;
      sendLikeComment(getRoute(), id, 1, 2, cookie).then((res) => {
        console.log(res);
        if (res.code === 200) message.success("点赞成功");
      });
    } else {
      liked = false;
      likedCount -= 1;
      setFlag(true);
      sendLikeComment(getRoute(), id, 0, 2, cookie).then((res) => {
        if (res.code === 200) message.success("点赞成功");
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
          {info.user.nickname}
        </a>
        <span className="content">： {info.content}</span>
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
