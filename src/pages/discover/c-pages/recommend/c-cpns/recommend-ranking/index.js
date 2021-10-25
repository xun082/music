import React, { memo, useEffect } from "react";

import { getTopListAction } from "../../store/actionCreators";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function HYRecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(3778678));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(19723756));
  }, [dispatch]);

  return (
    <div>
      <RankingWrapper>
        <HYThemeHeaderRCM title="榜单" />
        <div className="tops">
          <HYTopRanking info={upRanking} />
          <HYTopRanking info={newRanking} />
          <HYTopRanking info={originRanking} />
        </div>
      </RankingWrapper>
    </div>
  );
});
