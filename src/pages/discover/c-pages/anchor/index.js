import React, { memo } from "react";

import { AnchorWrapper } from "./style";
import AnchorBanner from "./c-cpns/anchor-banner";

export default memo(function HYAnchor() {
  return (
    <AnchorWrapper className="wrap-v2">
      <AnchorBanner />
      11
    </AnchorWrapper>
  );
});
