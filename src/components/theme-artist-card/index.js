import React, { memo } from "react";

import { ArtistCardWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeArtistCard(props) {
  const { info } = props;
  console.log(info);
  const name = info?.name;
  const picUrl = info?.img1v1Url || info?.picUrl;
  const id = info?.id;
  return (
    <ArtistCardWrapper>
      <a rel="noopener noreferrer" href={`#/discover/artist/detail?id=${id}`}>
        <div className="image">
          <img src={getSizeImage(picUrl, 130)} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="tag sprite_icon2"></div>
        </div>
      </a>
    </ArtistCardWrapper>
  );
});
