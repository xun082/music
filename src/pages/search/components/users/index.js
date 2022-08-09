import React from "react";

import { UserSWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

const Users = (props) => {
  const { info } = props;
  console.log(info);

  const avatarUrl = info?.avatarUrl;
  const signature = info?.signature;
  const nickname = info?.nickname;
  const gender = info?.gender;
  const followeds = info?.followeds;
  const playlistCount = info?.playlistCount;

  return (
    <UserSWrapper>
      <img src={getSizeImage(avatarUrl, 50)} alt="" />
      <div className="user_info">
        <div className="name">
          <div className="nickname">{nickname}</div>
          <div className="gender">{gender}</div>
        </div>
        <div className="signature">{signature}</div>
      </div>
      <div className="playlistCount">歌单: {playlistCount}</div>
      <div className="fans">粉丝: {followeds}</div>
    </UserSWrapper>
  );
};

export default Users;
