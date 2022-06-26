import React, { memo } from "react";

import { VideoCardWrapper } from "./style";
import {
  getSizeImage,
  formatMinuteSecond,
  getCount,
} from "@/utils/format-utils";
import { Link } from "react-router-dom";

const XXVideoCard = memo((props) => {
  const { info } = props;
  console.log(props);
  const coverUrl = info?.coverUrl;
  const duration = info?.durationms;
  const playTime = info?.playTime;
  const title = info?.title;
  const creator = info?.creator;
  const vid = info?.vid;

  return (
    <VideoCardWrapper>
      <div className="cover">
        <img src={getSizeImage(coverUrl, 160, 90)} alt="" />
        <div className="time">{formatMinuteSecond(duration)}</div>
        <div className="play_count sprite_icon3">{getCount(playTime)}</div>
      </div>
      <Link className="name text-nowrap" to={`/discover/mv?id=${vid}`}>
        {title}
      </Link>
      <div className="create text-nowrap">
        {creator &&
          creator.map((item) => {
            return (
              <Link
                className="link text-nowrap"
                to={`/discover/artist/detail?id=${item.userId}`}
                key={item.id}
              >
                {item.userName}
                {creator.length > 1 ? <> / </> : ""}
              </Link>
            );
          })}
      </div>
    </VideoCardWrapper>
  );
});

export default XXVideoCard;
