import React, { memo } from "react";

import { MovieWrapper } from "./style";

export default memo(function ThemeMovieCard(props) {
  const { info } = props;

  const name = info && info.name;
  const picUrl = info && info.imgurl;
  return (
    <MovieWrapper>
      <div className="image">
        <img src={`${picUrl}?param=${140}x${110}`} alt="" />
        <div className="play sprite_icon"></div>
      </div>
      <div className="content">{name}</div>
    </MovieWrapper>
  );
});
