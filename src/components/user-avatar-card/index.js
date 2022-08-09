import React, { memo } from "react";

import { AvatarWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { Link } from "react-router-dom";
import { parseTime } from "@/utils/format-utils";

const XXUserAvatar = memo((props) => {
  const { user, time } = props;
  const avatarUrl = user?.avatarUrl;
  const userId = user?.userId;
  const nickname = user?.nickname;

  return (
    <AvatarWrapper>
      <img src={getSizeImage(avatarUrl, 45)} alt="" />
      <div className="info">
        <Link className="link" to={`/users/home?id=${userId}`}>
          {nickname}
        </Link>
        <div className="time">{parseTime(time, "{m}月{d}日 {h}:{i}")}</div>
      </div>
    </AvatarWrapper>
  );
});

export default XXUserAvatar;
