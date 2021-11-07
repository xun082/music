import React, { memo } from "react";

import { AnchorDetailWrapper } from "./style";
import HYAnchorHeader from "./c-cpns/anchor-header";
import HYProgramHeader from "./c-cpns/program-header";
import HYAnchorMain from "./c-cpns/anchor-main";
import HYProgramMain from "./c-cpns/program-main";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYAnchorDetail() {
  // const { pid, id } = getQueryObject();
  return (
    <AnchorDetailWrapper className="wrap-v2 wrap-back">
      <div className="left wrap-v3">
        {getQueryObject().id !== undefined ? (
          <div className="content">
            <HYAnchorHeader />
            <HYAnchorMain />
          </div>
        ) : (
          <div className="content">
            <HYProgramHeader />
            <HYProgramMain />
          </div>
        )}
      </div>
      <div className="right wrap-v4"></div>
    </AnchorDetailWrapper>
  );
});
