import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getOtherUser } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import { HeaderWrapper } from "./style";
import { getSizeImage, getCity } from "@/utils/format-utils";
import { Link } from "react-router-dom";

const UserHeader = memo(() => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.getIn(["otherUser", "userInfo"]),
    shallowEqual,
  }));
  const { id } = getQueryObject();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherUser(id));
  }, [dispatch, id]);

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

  return (
    <HeaderWrapper>
      <img src={getSizeImage(avatarUrl, 188)} alt="" />
      <div className="content">
        <div className="header">
          <div className="name">{nickname}</div>
          <div className="level">Lv:{level}</div>
          <div className="gender">{gender === 1 ? "男" : "女"}</div>
          <div className="button">发私信</div>
          <div className="button">关注</div>
        </div>
        <div className="count">
          <Link className="link" to={`/users/event?id=${id}`}>
            {eventCount}动态
          </Link>
          <Link className="link" to={`/users/follow?id=${id}`}>
            {follows}关注
          </Link>
          <Link className="link" to={`/users/fans?id=${id}`}>
            {followeds}粉丝
          </Link>
        </div>
        <div className="signature">个人介绍: {signature}</div>
        <div className="address">所在地区:{getCity(province)}</div>
      </div>
    </HeaderWrapper>
  );
});

export default UserHeader;
