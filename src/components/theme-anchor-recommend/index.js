import React, { memo } from "react";

import { AnchorRecommendWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeAnchorCard(props) {
  const { info } = props;

  // 传过来的值
  const item = info && info.radio;
  const picUrl = info && info.coverUrl;
  const desc = info && info.name;
  const name = item && item.name;
  const category = item && item.category;
  return (
    <AnchorRecommendWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl, 40)} alt="" />
      </div>
      <div className="content">
        <div className="text">{desc}</div>
        <div className="text">{name}</div>
      </div>
      <div className="tag">{category}</div>
    </AnchorRecommendWrapper>
  );
});
