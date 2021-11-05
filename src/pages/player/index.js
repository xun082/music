import React, { memo } from "react";

import { PlayerWrapper} from "./style";

export default memo(function HYSongDetail() {
  return (
    <PlayerWrapper>
      <div className="wrap-back wrap-v2">
        <div className="left">
          <h2>HYPlayerInfo</h2>
          <h2>HYSongContent</h2>
        </div>
        <div className="right"></div>
      </div>
    </PlayerWrapper>
  );
});
