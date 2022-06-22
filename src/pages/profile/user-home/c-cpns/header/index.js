import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getOtherUser } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import { HeaderWrapper } from "./style";
import { getSizeImage, getCity } from "@/utils/format-utils";
import { Link } from "react-router-dom";
import XXFollowButton from "@/components/follow-button";
import XXEmailButton from "@/components/email-button";
import { SendFollowUser } from "@/services/user";
import { message } from "antd";

const UserHeader = memo(() => {
  const { userInfo, cookie } = useSelector((state) => ({
    userInfo: state.getIn(["otherUser", "userInfo"]),
    cookie: state.getIn(["loginState", "cookie"]),
    shallowEqual,
  }));
  const { id } = getQueryObject();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherUser(id, cookie));
  }, [dispatch, id, cookie]);

  const { profile, level } = userInfo;
  const nickname = profile?.nickname;
  const avatarUrl = profile?.avatarUrl;
  const gender = profile?.gender;

  // 关注，动态，粉丝数量
  const followeds = profile?.followeds;
  const follows = profile?.follows;
  const eventCount = profile?.eventCount;
  const signature = profile?.signature;
  const province = profile?.province;
  const followed = profile?.followed;

  const cancelFollow = () => {
    SendFollowUser(id, 0, cookie).then((res) => {
      message.success({
        content: "取消关注成功",
        duration: 1,
      });
    });
  };
  return (
    <HeaderWrapper gender={gender}>
      <img src={getSizeImage(avatarUrl, 188)} alt="" />
      <div className="content">
        <div className="header">
          <div className="name">{nickname}</div>
          <div className="vip vip_image"></div>
          <div className="level sprite_icon3">{level}</div>
          <div className="gender sprite_icon2"></div>
          <div className="email">
            <XXEmailButton id={id} isShow="none" />
          </div>
          <div className="follow">
            {followed === false ? (
              <XXFollowButton id={id} />
            ) : (
              <div
                className="cancel sprite_button2"
                onClick={() => {
                  cancelFollow();
                }}
              >
                已关注
              </div>
            )}
          </div>
        </div>
        <div className="count">
          <Link className="link" to={`/users/event?id=${id}`}>
            {eventCount} 动态
          </Link>
          <Link className="link" to={`/users/follow?id=${id}`}>
            {follows} 关注
          </Link>
          <Link className="link" to={`/users/fans?id=${id}`}>
            {followeds} 粉丝
          </Link>
        </div>
        <div className="signature">个人介绍: {signature}</div>
        <div className="address">所在地区:{getCity(province)}</div>
      </div>
    </HeaderWrapper>
  );
});

export default UserHeader;
