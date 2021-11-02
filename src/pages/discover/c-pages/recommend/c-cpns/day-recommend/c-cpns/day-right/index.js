import React, { memo } from "react";

import { DayRecommendDescWrapper } from "./style";
import ThemeAppRightDown from "@/components/app-right-down";

export default memo(function HYDayDesc() {
  return (
    <DayRecommendDescWrapper>
      <div className="header">
        <div className="img sprite_icon3"></div>
        <div className="why">个性化推荐如何工作</div>
      </div>
      <div className="content">
        <div className="desc">
          它聪明、熟悉每个用户的喜好，从海量音乐中挑选出你可能喜欢的音乐。
        </div>
        <div>它通过你每一次操作来记录你的口味</div>
        <div className="info">
          <div className="content">
            <div className="list">
              <div className="img one sprite_icon3"></div>
              <div className="number">
                你播放<strong>13</strong>首音乐
              </div>
            </div>
            <div className="list">
              <div className="img two sprite_icon3"></div>
              <div className="number">
                你喜欢了<strong>21</strong>首音乐
              </div>
            </div>
            <div className="list">
              <div className="img three sprite_icon3"></div>
              <div className="number">
                你收藏了<strong>1</strong>1位歌手
              </div>
            </div>
            <div className="you">
              你提供给云音乐的信息越多，它就越了解你的音乐喜好。
            </div>
            <ThemeAppRightDown />
          </div>
        </div>
      </div>
    </DayRecommendDescWrapper>
  );
});
