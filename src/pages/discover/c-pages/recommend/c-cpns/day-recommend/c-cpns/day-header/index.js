import React, { memo } from "react";

import { DayHeaderWrapper } from "./style";
import ThemeSchedule from "@/components/theme-day-recommend";
import ThemeControl from "@/components/theme-control-play";
export default memo(function HYDayHeader() {
  return (
    <DayHeaderWrapper>
      <div className="image recmd_day">
        <div className="day">
          <ThemeSchedule />
        </div>
      </div>
      <div className="control">
        <ThemeControl />
      </div>
    </DayHeaderWrapper>
  );
});
