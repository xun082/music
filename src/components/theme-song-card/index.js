import React, { memo } from "react";

import { SongCardWrapper } from "./style";
import { formatMinuteSecond } from "@/utils/format-utils.js";

export default memo(function ThemeSongCard(props) {
  const { info, index } = props;

  const name = info && info.name;
  const time = info && info.dt;
  const singer = info && info.ar;
  const album = info && info.al && info.al.name;

  return (
    <SongCardWrapper>
      <div className="index">
        <div className="number">{index}</div>
        <div className="icon sprite_icon"></div>
      </div>
      <div className="song-title">{name}</div>
      <div className="length">
        <div className="control">
          <div className="sprite_icon2 icon add"></div>
          <div className="sprite_icon2 icon collect"></div>
          <div className="sprite_icon2 icon share"></div>
          <div className="sprite_table icon down"></div>
        </div>
        <div className="time">{formatMinuteSecond(time)}</div>
      </div>
      <div className="name">
        {singer &&
          singer.map((item, index) => {
            return <span key={index}>{item.name} </span>;
          })}
      </div>
      <div className="album">{album}</div>
    </SongCardWrapper>
  );
});
