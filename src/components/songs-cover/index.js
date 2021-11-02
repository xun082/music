import React, { memo } from "react";

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from "./style";

export default memo(function HYSongsCover(props) {
  const { info } = props;

  const creator = info && info.creator && info.creator.nickname;
  const create = info.copywriter || creator;
  const id = info && info.id;

  return (
    <SongsCoverWrapper>
      <a rel="noopener noreferrer" href={`#/discover/playlist?id=${id}`}>
        <div className="cover-top">
          <img
            src={getSizeImage(info.picUrl || info.coverImgUrl, 140)}
            alt=""
          />
          <div className="cover sprite_cover">
            <div className="info sprite_cover">
              <span>
                <i className="sprite_icon erji"></i>
                {getCount(info.playCount)}
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="cover-bottom text-nowrap">{info.name}</div>
        <div className="cover-source text-nowrap">by {create}</div>
      </a>
    </SongsCoverWrapper>
  );
});
