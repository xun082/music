import React, { memo } from "react";

import { MvWrapper } from "./style";
import HYMvHeader from "./c-cpns/mv-header";
import HYMvMain from "./c-cpns/mv-main";
import HYMvRight from "./c-cpns/mv-right";

export default memo(function HYMv() {
  return (
    <MvWrapper className="wrap-v2 wrap-back">
      <div className="left wrap-v3">
        <HYMvHeader />
        <HYMvMain />
      </div>
      <div className="right wrap-v4">
        <HYMvRight />
      </div>
    </MvWrapper>
  );
});
