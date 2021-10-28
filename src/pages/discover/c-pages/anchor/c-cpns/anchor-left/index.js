import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getRecommendAnchorAction } from "../../store/actionCreators";

import { AnchorLeftWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeAnchorCard from "@/components/theme-anchor-recommend";

export default memo(function AnchorRecommend() {
  const { anchorRecommend } = useSelector(
    (state) => ({
      anchorRecommend: state.getIn(["anchor", "anchorRecommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendAnchorAction());
  }, [dispatch]);

  return (
    <AnchorLeftWrapper>
      <ThemeHeaderRcm title="推荐节目" showIcon={false} />
      {anchorRecommend &&
        anchorRecommend.map((item, index) => {
          return <ThemeAnchorCard key={index} info={item} />;
        })}
    </AnchorLeftWrapper>
  );
});
