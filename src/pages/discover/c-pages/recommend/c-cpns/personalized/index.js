import React, { memo, useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { PersonalizedWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { getPersonRecommendAction } from "../../store/actionCreators";
import HYSongsCover from "@/components/songs-cover";
import ThemeSchedule from "@/components/theme-day-recommend";

export default memo(function HYPersonalized() {
  const { cookie, personList, isLogin } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      personList: state.getIn(["recommend", "personList"]),
      isLogin: state.getIn(["loginState", "isLogin"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonRecommendAction(cookie));
  }, [dispatch, cookie]);

  return isLogin ? (
    <PersonalizedWrapper>
      <HYThemeHeaderRCM title="个性化推荐" />
      <div className="content">
        <a
          rel="noopener noreferrer"
          href="#/discover/recommend/taste"
          className="day"
        >
          <ThemeSchedule />
          <div className="info">
            <div className="text">每日歌曲推荐</div>
            <div>根据你的口味生成</div>
          </div>
        </a>

        {personList &&
          personList.slice(0, 3).map((item, index) => {
            return <HYSongsCover key={item.id} info={item} />;
          })}
      </div>
    </PersonalizedWrapper>
  ) : (
    ""
  );
});
