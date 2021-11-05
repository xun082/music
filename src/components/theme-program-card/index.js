import React, { memo } from "react";

import { ProgramCardWrapper } from "./style";
import { formatMonthDay, formatMinuteSecond } from "@/utils/format-utils";

export default memo(function ThemeProgramCard(props) {
  const { index, info } = props;

  const name = info && info.name;
  const listenerCount = info && info.listenerCount;
  const likedCount = info && info.likedCount;
  const createTime = info && info.createTime;
  const duration = info && info.duration;
  return (
    <ProgramCardWrapper>
      <div className="play">
        <div className="index">{index + 1}</div>
        <div className="icon sprite_table"></div>
      </div>
      <div className="program all">
        <a href="#/" className="link text-nowrap">
          {name}
        </a>
        <div className="control">
          <div className="sprite_icon2 add"></div>
          <div className="sprite_icon2 share"></div>
          <div className="sprite_table down"></div>
        </div>
      </div>
      <div className="play-count all">播放{listenerCount}</div>
      <div className="liked all">赞{likedCount}</div>
      <div className="create all">{formatMonthDay(createTime)}</div>
      <div className="time all">{formatMinuteSecond(duration)}</div>
    </ProgramCardWrapper>
  );
});
