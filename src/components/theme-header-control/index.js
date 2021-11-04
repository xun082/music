import React, { memo } from "react";

import { HeaderControlWrapper } from "./style";

export default memo(function ThemeHeaderControl(props) {
  const { comment, share, collect } = props;
  return (
    <HeaderControlWrapper>
      <div className="controls">
        <div className="sprite_button play">
          <i className="sprite_button inner">
            <em className="sprite_button play-icon"></em>
            播放
          </i>
        </div>
        <div className="sprite_button favorite">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>
            {collect}收藏
          </i>
        </div>
        <div className="sprite_button share">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>({share})
          </i>
        </div>
        <div className="sprite_button download">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>
            下载
          </i>
        </div>
        <div className="sprite_button comment">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em> ({comment})
          </i>
        </div>
      </div>
    </HeaderControlWrapper>
  );
});
