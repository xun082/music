import React, { memo } from "react";

import { CommentWrapper } from "./style";
import { formatMonthDay, getSizeImage } from "@/utils/format-utils.js";

export default memo(function CommentCard(props) {
  const { info } = props;
  const time = formatMonthDay(info.time, "MM月dd日");
  const picUrl = info && info.user.avatarUrl;
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
            <div className="like sprite_icon2"></div>
            <div className="like-count">({info.likedCount})</div>
            <div className="answer">回复</div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  );
});
