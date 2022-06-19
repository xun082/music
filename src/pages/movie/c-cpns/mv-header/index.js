import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { MvHeaderWrapper } from "./style";
import { getMvInfoAction, getMvLinkAction } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import ReactPlayer from "react-player";

export default memo(function HYMvHeader() {
  const { mvInfo, mvLink } = useSelector(
    (state) => ({
      mvInfo: state.getIn(["mv", "mvInfo"]),
      mvLink: state.getIn(["mv", "mvLink"]),
    }),
    shallowEqual
  );
  const { id } = getQueryObject();
  const { name, artistName, artistId, commentCount, shareCount, subCount } =
    mvInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMvInfoAction(id));
    dispatch(getMvLinkAction(id));
  }, [dispatch, id]);

  return (
    <MvHeaderWrapper>
      <div className="header">
        <div className="tag sprite_icon3"></div>
        <div className="name">{name}</div>
        <a
          rel="noopener noreferrer"
          href={`#/discover/artist/detail?id=${artistId}`}
        >
          {artistName}
        </a>
      </div>
      {/* 视频播放器 */}
      <div className="player">
        <ReactPlayer
          url={mvLink?.url}
          playing={true}
          controls={true}
          muted={true}
          loop={true}
        />
      </div>
      <div className="control">
        <div className="like sprite_button">
          <div className="icon sprite_button"></div>
          <div className="text">{commentCount}</div>
        </div>
        <div className="collect sprite_button">
          <div className="icon sprite_button"></div>
          <div className="text">{subCount}</div>
        </div>
        <div className="share sprite_button">
          <div className="icon sprite_button"></div>
          <div className="text">{shareCount}</div>
        </div>
      </div>
    </MvHeaderWrapper>
  );
});
