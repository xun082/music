import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

export default memo(function HYAlbumCover(props) {
  // console.log(props);
  const {
    info,
    size = 130,
    width = 153,
    bgp = "-845px",
    play = 24,
    play_bgp = "-43px -54px",
  } = props;

  return (
    <AlbumWrapper
      size={size}
      width={width}
      bgp={bgp}
      play={play}
      play_bgp={play_bgp}
    >
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a
          rel="noopener noreferrer"
          href={`#/discover/album/detail?id=${info.id}`}
          className="cover image_cover"
        >
          ''
        </a>
        <div className="play sprite_icon"></div>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">
          {info.artist.name ||
            info?.ar?.map((item) => {
              return <span key={item.id}>{item.name}</span>;
            })}
        </div>
      </div>
    </AlbumWrapper>
  );
});
