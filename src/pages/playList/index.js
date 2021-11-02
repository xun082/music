import React, { memo } from "react";

import { PlayListWrapper } from "./style";
import HYPlayHeader from "./c-cpns/play-header";
import HYPlayMain from "./c-cpns/play-main";
import HYPlayRight from "./c-cpns/play-right";

export default memo(function HYPlayList() {
  return (
    <PlayListWrapper className="wrap-v2">
      <div className="left">
        <HYPlayHeader />
        <HYPlayMain />
      </div>
      <div className="right">
        <HYPlayRight />
      </div>
    </PlayListWrapper>
  );
});
