import React, { memo } from "react";

import { SongCardWrapper } from "./style";
import { formatMinuteSecond } from "@/utils/format-utils.js";

export default memo(function ThemeSongCard(props) {
  const { index, info } = props;

  const name = info.name;
  const time = info && info.dt;
  const album = info && info.al && info.al.name;
  //   console.log(info);
  return (
    <SongCardWrapper>
      <div className="play">
        <div className="index">{index + 1}</div>
        <div className="icon sprite_icon"></div>
      </div>
      <div className="song-name">
        <a href="#/" className="name">
          {name}
        </a>
        {info.mv !== 0 ? (
          <a href="#/info.mv" className="tv sprite_table">
            {""}
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="length">
        <div className="control">
          <div className="sprite_icon2 icon add"></div>
          <div className="sprite_icon2 icon collect"></div>
          <div className="sprite_icon2 icon share"></div>
          <div className="sprite_table icon down"></div>
        </div>
        <div className="time">{formatMinuteSecond(time)}</div>
      </div>
      <a href="#/" className="album">
        {album}
      </a>
    </SongCardWrapper>
  );
});
