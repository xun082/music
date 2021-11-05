import React, { memo } from "react";

import { AnchorRecommendWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeAnchorCard(props) {
  const { info } = props;

  const item = info && info.radio;
  const picUrl = info && info.coverUrl;
  const desc = info && info.name;
  const name = item && item.name;
  const category = item && item.category;
  const id = info && info.id;
  return (
    <AnchorRecommendWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl, 40)} alt="" />
        <div className="hover sprite_icon"></div>
      </div>
      <a rel="noopener noreferrer" href={`#/discover/anchor?pid=${id}`}>
        <div className="content">
          <div className="text">{desc}</div>
          <div className="text">{name}</div>
        </div>
      </a>
      <div className="tag">{category}</div>
    </AnchorRecommendWrapper>
  );
});
