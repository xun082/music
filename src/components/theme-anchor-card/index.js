import React, { memo } from "react";

import { RadioCardWrapper } from "./style";
import { getSizeImage, getRoute } from "@/utils/format-utils";

export default memo(function ThemeAnchorCard(props) {
  const { info } = props;

  const name = info && info.name;
  const intervenePicUrl = info && info.intervenePicUrl;
  const text = (info && info.rcmdtext) || "佚名";
  const nickname = info && info.dj && info.dj.nickname;
  const programCount = info && info.programCount;
  const subCount = info && info.subCount;

  const isNumber = parseInt(getRoute());

  return (
    <RadioCardWrapper>
      <div className="image">
        <img src={getSizeImage(intervenePicUrl, 120)} alt="" />
      </div>
      <div className="content">
        <div className="radio">{name}</div>
        {!isNaN(isNumber) ? (
          <div className="info">
            <div className="user">
              <div className="image sprite_icon2"></div>
              <div className="name">{nickname}</div>
            </div>
            <div className="anchor-info">
              <span className="collect">共{programCount}期</span>
              <span className="count">订阅{subCount}次</span>
            </div>
          </div>
        ) : (
          <div className="name">{text}</div>
        )}
      </div>
    </RadioCardWrapper>
  );
});
