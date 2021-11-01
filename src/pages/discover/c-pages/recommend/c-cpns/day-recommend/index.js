import React, { memo } from "react";

import { DayRecommendWrapper } from "./style";

import HYDayHeader from "./c-cpns/day-header";
import HYDayMain from "./c-cpns/day-main";

export default memo(function HYDayRecommend() {
  return (
    <DayRecommendWrapper className="wrap-v2">
      <div className="left">
        <HYDayHeader />
        <HYDayMain />
      </div>
    </DayRecommendWrapper>
  );
});
