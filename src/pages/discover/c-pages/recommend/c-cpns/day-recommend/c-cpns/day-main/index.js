import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getDayRecommendAction } from "../../../../store/actionCreators";

import { DayMainWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import ThemeSongHeader from "@/components/theme-song-header";
import ThemeSongCard from "@/components/theme-song-card";

export default memo(function HYDayMain() {
  const { cookie, dayRecommend } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      dayRecommend: state.getIn(["recommend", "dayRecommend"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const length = dayRecommend && dayRecommend.length;

  useEffect(() => {
    dispatch(getDayRecommendAction(cookie));
  }, [dispatch, cookie]);

  return (
    <DayMainWrapper>
      <div className="content">
        <HYThemeHeaderRCM
          showIcon={false}
          title="热门推荐"
          keywords={[`${length}首歌`]}
          right={false}
        />
        <ThemeSongHeader />
        {dayRecommend &&
          dayRecommend.map((item, index) => {
            return <ThemeSongCard key={index} info={item} index={index + 1} />;
          })}
      </div>
    </DayMainWrapper>
  );
});
