import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotAnchorAction } from "../../store/actionCreators";
import { HotAnchor } from "./style";
import HYThemeRightRcm from "@/components/theme-right-rcm";
import AllRankingCardRcm from "@/components/all-ranking-card";

export default memo(function HYHotAnchor() {
  //  redux hooks
  const { hotAnchors } = useSelector(
    (state) => ({
      hotAnchors: state.getIn(["recommend", "hotAnchors"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotAnchorAction(5));
  }, [dispatch]);

  console.log(hotAnchors);

  return (
    <HotAnchor>
      <HYThemeRightRcm title="热门主播"></HYThemeRightRcm>
      <div>
        {hotAnchors &&
          hotAnchors.map((item, index) => {
            return <AllRankingCardRcm key={item.id} info={item} />;
          })}
      </div>
    </HotAnchor>
  );
});
