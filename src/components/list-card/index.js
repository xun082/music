import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils.js";
import { ListCard } from "./style";

export default memo(function HYListCardRcm(props) {
  const { info } = props;

  return (
    <ListCard>
      <a
        rel="noopener noreferrer"
        href={`#/discover/artist/detail?id=${info.id}`}
        className="a"
      >
        <img className="image" src={getSizeImage(info.picUrl, 62)} alt="" />
        <div className="content">
          <div className="name">{info.name}</div>
          <div className="name">{info.name}</div>
        </div>
      </a>
    </ListCard>
  );
});
