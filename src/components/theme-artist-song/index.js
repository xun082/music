import React, { memo } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { SongCardWrapper } from "./style";
import { formatMinuteSecond } from "@/utils/format-utils.js";
import {
  getSongDetailAction,
  changeFirstLoad,
} from "@/pages/player/store/actionCreators";
import { useAddPlaylist } from "@/hooks/change-music";
import { message } from "antd";

export default memo(function ThemeSongCard(props) {
  const { index, info } = props;

  const { playlist } = useSelector(
    (state) => ({
      playlist: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  const name = info.name;
  const time = info && info.dt;
  const album = info && info.al && info.al.name;
  const albumId = info && info.al && info.al.id;
  const id = info && info.id;
  const mv = info && info.mv;
  // 待完成
  // const singer =
  //   info &&
  //   info.ar &&
  //   info.ar.map((item) => {
  //     return item.name;
  //   });
  const dispatch = useDispatch();
  const playMusic = (e, item) => {
    e.preventDefault();
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  const addPlaylist = useAddPlaylist(playlist, message);
  return (
    <SongCardWrapper>
      <div className="play">
        <div className="index">{index + 1}</div>
        <div
          className="icon sprite_icon"
          onClick={(e) => playMusic(e, id)}
        ></div>
      </div>
      <div className="song-name">
        <a
          rel="noopener noreferrer"
          href={`#/discover/song?id=${id}`}
          className="name"
        >
          {name}
        </a>
        {info.mv !== 0 ? (
          <a
            rel="noopener noreferrer"
            href={`#/discover/mv?id=${mv}`}
            className="tv sprite_table"
          >
            {""}
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="length">
        <div className="control">
          <div
            className="sprite_icon2 icon add"
            onClick={(e) => addPlaylist(e, id)}
          ></div>
          <div className="sprite_icon2 icon collect"></div>
          <div className="sprite_icon2 icon share"></div>
          <div className="sprite_table icon down"></div>
        </div>
        <div className="time">{formatMinuteSecond(time)}</div>
      </div>
      <a
        rel="noopener noreferrer"
        href={`#/discover/album/detail?id=${albumId}`}
        className="album"
      >
        {album}
      </a>
    </SongCardWrapper>
  );
});
