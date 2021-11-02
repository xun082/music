import React, { memo } from "react";

import { AppRightDownWrapper } from "./style";

export default memo(function ThemeAppRightDown() {
  return (
    <AppRightDownWrapper>
      <div className="header">网易云音乐多端下载</div>
      {/* <div className="icon">
        <div className="iphone"></div>
      </div> */}
    </AppRightDownWrapper>
  );
});
