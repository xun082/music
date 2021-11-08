import React, { memo } from "react";

import { PlayerWrapper } from "./style";
import HYSongHeader from "./song-detail/song-header";
import HYSongMain from "./song-detail/song-main";
import HYSoneRight from "./song-detail/song-right";
export default memo(function HYSongDetail() {
  return (
    <PlayerWrapper className="wrap-v2 wrap-back">
      <div className="left">
        <HYSongHeader />
        <HYSongMain />
      </div>
      <div className="right">
        <HYSoneRight />
      </div>
    </PlayerWrapper>
  );
});
