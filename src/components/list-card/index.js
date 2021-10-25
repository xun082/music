import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { getSizeImage } from "@/utils/format-utils.js";
import { ListCard } from "./style";

export default memo(function HYListCardRcm(props) {
  const { info } = props;
  return (
    <NavLink to="/a/a" >
      <ListCard>
        <img className="image" src={getSizeImage(info.picUrl, 62)} alt="" />
        <div className="content">
          <div className="name">{info.name}</div>
          <div className="name">{info.name}</div>
        </div>
      </ListCard>
    </NavLink>
  );
});
