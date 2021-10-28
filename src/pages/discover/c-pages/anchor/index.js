import React, { memo } from "react";

import { AnchorWrapper } from "./style";
import AnchorBanner from "./c-cpns/anchor-banner";
import AnchorLeft from "./c-cpns/anchor-left";
import AnchorRight from "./c-cpns/anchor-right";

export default memo(function HYAnchor() {
  return (
    <AnchorWrapper className="wrap-v2">
      <AnchorBanner />
      <div className="content">
        <div className="recommend">
          <AnchorLeft />
          <AnchorRight />
        </div>
      </div>
    </AnchorWrapper>
  );
});
