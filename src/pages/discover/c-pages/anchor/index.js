import React, { memo, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getAnchorCategoryAction } from "./store/actionCreators";
import { AnchorWrapper } from "./style";
import AnchorBanner from "./c-cpns/anchor-banner";
import AnchorLeft from "./c-cpns/anchor-left";
import AnchorRight from "./c-cpns/anchor-right";
import AnchorRadio from "./c-cpns/anchor-radio";
import CategoryAnchor from "./c-cpns/anchor-category";
import { getRoute } from "@/utils/format-utils.js";

export default memo(function HYAnchor() {
  const {
    anchorMusic,
    anchorLife,
    anchorKnowledge,
    anchorCreate,
    anchorEmotion,
  } = useSelector(
    (state) => ({
      anchorMusic: state.getIn(["anchor", "anchorMusic"]),
      anchorLife: state.getIn(["anchor", "anchorLife"]),
      anchorKnowledge: state.getIn(["anchor", "anchorKnowledge"]),
      anchorCreate: state.getIn(["anchor", "anchorCreate"]),
      anchorEmotion: state.getIn(["anchor", "anchorEmotion"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const isNumber = parseInt(getRoute());

  useEffect(() => {
    dispatch(getAnchorCategoryAction(2));
    dispatch(getAnchorCategoryAction(3));
    dispatch(getAnchorCategoryAction(2001));
    dispatch(getAnchorCategoryAction(11));
    dispatch(getAnchorCategoryAction(6));
  }, [dispatch]);

  return (
    <AnchorWrapper className="wrap-v2">
      <AnchorBanner />
      <div className="content">
        {!isNaN(isNumber) ? (
          <div>
            <div className="banner-category">
              <CategoryAnchor />
            </div>
          </div>
        ) : (
          <div>
            <div className="recommend">
              <AnchorLeft />
              <AnchorRight />
            </div>
            <div className="radio-station wrap-back">
              <AnchorRadio title={"音乐推荐"} info={anchorMusic} />
              <AnchorRadio title={"生活"} info={anchorLife} />
              <AnchorRadio title={"情感"} info={anchorKnowledge} />
              <AnchorRadio title={"创作翻唱"} info={anchorCreate} />
              <AnchorRadio title={"知识"} info={anchorEmotion} />
            </div>
          </div>
        )}
      </div>
    </AnchorWrapper>
  );
});
