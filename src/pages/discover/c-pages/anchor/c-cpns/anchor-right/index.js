import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getRankingAnchorAction } from "../../store/actionCreators";

import { AnchorRightWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeAnchorCard from "@/components/theme-anchor-ranking";

export default memo(function AnchorRight() {
  const { anchorRanking } = useSelector(
    (state) => ({
      anchorRanking: state.getIn(["anchor", "anchorRanking"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingAnchorAction(10));
  }, [dispatch]);

  return (
    <AnchorRightWrapper>
      <ThemeHeaderRcm title="节目排行榜" showIcon={false} />

      {anchorRanking &&
        anchorRanking.map((item, index) => {
          return <ThemeAnchorCard key={index} info={item} />;
        })}
    </AnchorRightWrapper>
  );
});
