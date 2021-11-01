import React, { memo } from "react";

import { SongHeaderWrapper } from "./style";

export default memo(function ThemeSongHeader() {
  return (
    <SongHeaderWrapper>
      <div className="ranking-main">
        <div className="main-header">
          <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">标题</div>
          <div className="sprite_table header-item header-time">时长</div>
          <div className="sprite_table header-item header-singer">歌手</div>
          <div className="sprite_table header-item header-album">专辑</div>
        </div>
      </div>
    </SongHeaderWrapper>
  );
});
