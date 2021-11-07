import React, { memo } from "react";

import { PlayListRightWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemePlayListRight(props) {
  const { info } = props;
  const name = info && info.name;
  const nickname = info && info.creator && info.creator.nickname;
  const coverImgUrl = info && info.coverImgUrl;
  const id = info && info.id;
  return (
    <PlayListRightWrapper>
      <div className="img">
        <img src={getSizeImage(coverImgUrl, 50)} alt="" />
      </div>
      <a
        rel="noopener noreferrer"
        href={`#/discover/playlist?id=${id}`}
        className="info"
      >
        <div className="text">{name}</div>
        <div className="text">by {nickname}</div>
      </a>
    </PlayListRightWrapper>
  );
});
