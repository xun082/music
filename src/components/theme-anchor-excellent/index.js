import React, { memo } from "react";

import { ThemeAnchorExcellentWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeAnchorExcellent(props) {
  const { info } = props;

  const id = info && info.id;
  const name = info && info.name;
  const intervenePicUrl = info && info.intervenePicUrl;
  const text = info && info.rcmdtext;
  return (
    <ThemeAnchorExcellentWrapper>
      <a rel="noopener noreferrer" href={`#/discover/anchor?id=${id}`}>
        <div className="content">
          <div className="image">
            <img src={getSizeImage(intervenePicUrl, 150)} alt="" />
          </div>
          <div className="name">{name}</div>
          <div className="desc">{text}</div>
        </div>
      </a>
    </ThemeAnchorExcellentWrapper>
  );
});
