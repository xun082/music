import React from "react";

import { AnchorWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

const Anchor = (props) => {
  const { info } = props;
  const picUrl = info?.picUrl;
  const name = info?.name;
  const nickname = info?.dj?.nickname;

  return (
    <AnchorWrapper>
      <img src={getSizeImage(picUrl, 150)} alt="" />
      <div className="anchor text-nowrap">{name}</div>
      <div className="nickname">by {nickname}</div>
    </AnchorWrapper>
  );
};

export default Anchor;
