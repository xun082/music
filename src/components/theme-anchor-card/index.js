import React, { memo } from "react";

import { RadioCardWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function ThemeAnchorCard(props) {
  const { info } = props;

  const name = info && info.name;
  const intervenePicUrl = info && info.intervenePicUrl;
  const text = info && info.rcmdtext;
  return (
    <RadioCardWrapper>
      <div className="image">
        <img src={getSizeImage(intervenePicUrl, 120)} alt="" />
      </div>
      <div className="content">
        <div className="radio">{name}</div>
        <div className="name">{text}</div>
      </div>
    </RadioCardWrapper>
  );
});
