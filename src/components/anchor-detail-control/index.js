import React, { memo } from "react";

import { AnchorDetailControlWrapper } from "./style";

export default memo(function AnchorDetailControl(props) {
  const { subCount, shareCount } = props;
  return (
    <AnchorDetailControlWrapper>
      <div className="subscribe sprite_button">
        <div className="text">订阅({subCount})</div>
      </div>
      <div className="play sprite_button">
        <div className="text">播放全部</div>
      </div>
      <div className="share sprite_button">
        <div className="text">分享({shareCount})</div>
      </div>
    </AnchorDetailControlWrapper>
  );
});
