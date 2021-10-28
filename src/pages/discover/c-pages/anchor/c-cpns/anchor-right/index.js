import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getRankingAnchorAction } from "../../store/actionCreators";

import { AnchorRightWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";

export default memo(function AnchorRight() {
  // const { anchorRanking } = useSelector(
  //   (state) => ({
  //     anchorRanking: state.getIn(["anchor", "anchorRanking"]),
  //   }),
  //   shallowEqual
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingAnchorAction());
  }, [dispatch]);

  return (
    <AnchorRightWrapper>
      <ThemeHeaderRcm title="节目排行榜" showIcon={false} />
    </AnchorRightWrapper>
  );
});
