import React, { memo } from "react";

import { AnchorRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeAnchorCard(props) {
  const { info } = props;

  // 传过来的值
  const item = info && info.program;
  const rank = info && info.rank;
  const picUrl = item && item.coverUrl;
  const anchorName = item && item.mainSong && item.mainSong.name;
  const name = item && item.radio && item.radio.name;
  const id = item && item.id;
  return (
    <AnchorRankingWrapper>
      <a
        className="link"
        rel="noopener noreferrer"
        href={`#/discover/anchor?pid=${id}`}
      >
        <div className="rank">{rank}</div>
        <div className="image">
          <img src={getSizeImage(picUrl, 40)} alt="" />
          <div className="hover sprite_icon"></div>
        </div>
        <div className="content">
          <div className="text">{anchorName}</div>
          <div className="text">{name}</div>
        </div>
        <div className="tag"></div>
      </a>
    </AnchorRankingWrapper>
  );
});
