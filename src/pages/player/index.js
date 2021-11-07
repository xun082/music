import React, { memo } from "react";

import { PlayerWrapper } from "./style";
import HYSongHeader from "./song-detail/song-header";
import HYSongMain from "./song-detail/song-main";
import HYSongRight from "./song-detail/song-right";
export default memo(function HYSongDetail() {
  return (
    <PlayerWrapper>
      <div className="wrap-back wrap-v2">
        <div className="left">
          <HYSongHeader />
          <HYSongMain />
        </div>
        <div className="right">
          <HYSongRight />
        </div>
      </div>
    </PlayerWrapper>
  );
});
