import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { AllRankingCard } from "./style";
import { getSizeImage } from "@/utils/format-utils.js";

export default memo(function AllRankingCardRcm(props) {
  const { info } = props;
  return (
    <AllRankingCard>
      <NavLink to="/#" className="link">
        <img
          src={getSizeImage(info.picUrl || info.coverImgUrl, 40)}
          alt=""
          className="image"
        />
        <div className="content">
          <div className="name">{info.name}</div>
          <div className="name">{info.rcmdtext || info.updateFrequency}</div>
        </div>
      </NavLink>
    </AllRankingCard>
  );
});
