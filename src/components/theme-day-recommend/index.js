import React, { memo } from "react";

import { ScheduleWrapper } from "./style";

export default memo(function ThemeSchedule() {
  const DATE = new Date();
  const day = DATE.getDay();
  const weekday = new Array(7);
  weekday[0] = "星期日";
  weekday[1] = "星期一";
  weekday[2] = "星期二";
  weekday[3] = "星期三";
  weekday[4] = "星期四";
  weekday[5] = "星期五";
  weekday[6] = "星期六";

  return (
    <ScheduleWrapper>
      <div className="day sprite_02">
        <div className="image">
          <div className="week">{weekday[DATE.getDay()]}</div>
          <div className="data">{day}</div>
        </div>
      </div>
    </ScheduleWrapper>
  );
});
