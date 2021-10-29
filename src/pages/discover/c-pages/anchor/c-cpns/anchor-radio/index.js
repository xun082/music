import React, { memo } from "react";

import { RadioWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeAnchorCard from "@/components/theme-anchor-card";

export default memo(function AnchorRadio(props) {
  const { title, info } = props;

  return (
    <RadioWrapper>
      <ThemeHeaderRcm title={title} showIcon={true} />
      <div className="content">
        {info &&
          info.map((item, index) => {
            return <ThemeAnchorCard key={index} info={item} />;
          })}
      </div>
    </RadioWrapper>
  );
});
