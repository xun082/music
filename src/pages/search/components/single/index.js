import React from "react";

import { SingleWrapper } from "./style";
import XXSongControlCard from "@/components/song-control-card";
import { formatMinuteSecond } from "@/utils/format-utils";

const Single = (props) => {
  const { info } = props;
  const name = info?.name;
  const mv = info?.mv;
  const singer = info?.ar;
  const al = info?.al?.name;
  const dt = info?.dt;

  // 遍历歌手
  const singers = [];
  for (const singerName of singer) {
    singers.push(singerName.name);
  }

  return (
    <SingleWrapper>
      <div className="play sprite_table"></div>
      <div className="single_info">
        <div className="single_name">{name}</div>
        {mv !== 0 ? <div className="mv sprite_table "></div> : ""}
      </div>
      <div className="control">
        <XXSongControlCard />
      </div>
      <div className="singer text-nowrap ">{singers.join("-")}</div>
      <div className="al text-nowrap">《{al}》</div>
      <div className="time">{formatMinuteSecond(dt)}</div>
    </SingleWrapper>
  );
};

export default Single;
