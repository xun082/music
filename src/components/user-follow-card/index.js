import React, { memo } from "react";

import { FollowWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { Link } from "react-router-dom";
import XXFollowButton from "../follow-button";
import XXEmailButton from "../email-button";

const XXUserFollow = memo((props) => {
  const { follow } = props;
  const avatarUrl = follow?.avatarUrl;
  const nickname = follow?.nickname;
  const signature = follow?.signature;
  const eventCount = follow?.eventCount;
  const followeds = follow?.followeds;
  const follows = follow?.follows;
  const id = follow?.userId;
  const gender = follow?.gender;
  const followed = follow?.followed;

  return (
    <FollowWrapper genders={gender} className="follow-list">
      <img src={getSizeImage(avatarUrl, 60)} alt="" />
      <div className="info">
        <div className="name">
          <Link to={`/users/home?id=${id}`} className="nickname">
            {nickname}
          </Link>
          <span className="gender sprite_icon2"></span>
        </div>
        <div className="count">
          <Link className="link" to={`/users/event?id=${id}`}>
            动态 {eventCount}
          </Link>
          <Link className="link" to={`/users/follow?id=${id}`}>
            关注 {follows}
          </Link>
          <Link className="link" to={`/users/fans?id=${id}`}>
            粉丝 {followeds}
          </Link>
        </div>
        <div className="desc text-nowrap">{signature}</div>
      </div>
      {/* 关注按钮 */}
      {followed === false ? (
        <XXFollowButton id={id} />
      ) : (
        <XXEmailButton id={id} />
      )}
    </FollowWrapper>
  );
});

export default XXUserFollow;
