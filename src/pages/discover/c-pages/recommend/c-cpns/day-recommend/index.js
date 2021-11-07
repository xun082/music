import React, { memo } from "react";

import { DayRecommendWrapper } from "./style";

import HYDayHeader from "./c-cpns/day-header";
import HYDayMain from "./c-cpns/day-main";
import HYDayDesc from "./c-cpns/day-right";

export default memo(function HYDayRecommend() {
  return (
    <DayRecommendWrapper className="wrap-v2 wrap-back">
      <div className="left">
        <HYDayHeader />
        <HYDayMain />
      </div>
      <div className="right">
        <HYDayDesc />
      </div>
    </DayRecommendWrapper>
  );
});
