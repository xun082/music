import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { MvHeaderWrapper } from "./style";
import { getMvInfoAction, getMvLinkAction } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import Player from "xgplayer";

export default memo(function HYMvHeader() {
  const { mvInfo, mvLink } = useSelector(
    (state) => ({
      mvInfo: state.getIn(["mv", "mvInfo"]),
      mvLink: state.getIn(["mv", "mvLink"]),
    }),
    shallowEqual
  );
  const { id } = getQueryObject();
  const {
    name,
    artistName,
    artistId,
    cover,
    commentCount,
    shareCount,
    subCount,
  } = mvInfo;

  const { url } = mvLink;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMvInfoAction(id));
    dispatch(getMvLinkAction(id));
  }, [dispatch, id]);

  // 视频
  new Player({
    id: "video",
    url: url,
    width: 640,
    height: 360,
    volume: 0.6,
    poster: cover,
    miniplayer: true,
    miniplayerConfig: {
      bottom: 200,
      right: 0,
      width: 340,
      height: 200,
    },
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    defaultPlaybackRate: 1,
    keyShortcut: "on",
    definitionActive: "hover",
    keyShortcutStep: {
      //设置调整步长
      currentTime: 5, //播放进度调整步长，默认10秒
      volume: 0.2, //音量调整步长，默认0.1
    },
  });

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
        <div id="video"></div>
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
