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
  const { info, index } = props;

  const { playlist } = useSelector(
    (state) => ({
      playlist: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  const name = info && info.name;
  const time = info && info.dt;
  const singer = info && info.ar;
  const album = info && info.al && info.al.name;
  const albumId = info && info.al && info.al.id;
  console.log(info.al);
  const id = info && info.id;

  const dispatch = useDispatch();
  // 播放音乐
  const playMusic = (e, item) => {
    e.preventDefault();
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  // 添加音乐
  const addPlaylist = useAddPlaylist(playlist, message);

  return (
    <SongCardWrapper>
      <div className="index">
        <div className="number">{index}</div>
        <div
          className="icon sprite_icon"
          onClick={(e) => playMusic(e, id)}
        ></div>
      </div>
      <a
        className="link"
        rel="noopener noreferrer"
        href={`#/discover/song?id=${id}`}
      >
        <div className="song-title">{name}</div>
      </a>
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
      <div className="name">
        {singer &&
          singer.map((item, index) => {
            return (
              <a
                rel="noopener noreferrer"
                href={`#/discover/artist/detail?id=${item.id}`}
                key={index}
              >
                {item.name}
              </a>
            );
          })}
      </div>
      <a
        rel="noopener noreferrer"
        href={`#/discover/album/detail??id=${albumId}`}
        className="album"
      >
        {album}
      </a>
    </SongCardWrapper>
  );
});
