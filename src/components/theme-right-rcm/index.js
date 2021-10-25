import React, { memo } from "react";
import PropTypes from "prop-types";

import { RightWrapper } from "./style";

const HYThemeRightRcm = memo(function (props) {
  const { title, rightContent } = props;
  return (
    <RightWrapper>
      <div className="header">
        <div className="left">{title}</div>
        <div className="right">{rightContent}</div>
      </div>
    </RightWrapper>
  );
});

HYThemeRightRcm.proTypes = {
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.string.isRequired,
};

export default HYThemeRightRcm;
