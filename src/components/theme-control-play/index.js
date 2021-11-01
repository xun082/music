import React, { memo } from "react";

import { ControlWrapper } from "./style";

export default memo(function ThemeControl() {
  return (
    <ControlWrapper>
      <div className="play sprite_button">
        <div>全部播放</div>
      </div>
      <div className="add sprite_button"></div>
      <div className="collect sprite_button">
        <div>收藏全部</div>
      </div>
    </ControlWrapper>
  );
});
