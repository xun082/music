import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";
import { useAddPlaylist } from "@/hooks/change-music";

import { getSizeImage } from "@/utils/format-utils.js";
import {
  getSongDetailAction,
  changeFirstLoad,
} from "@/pages/player/store/actionCreators";

import { SongItemWrapper } from "./style";
import { PlayCircleOutlined } from "@ant-design/icons";
import { message } from "antd";

function SongItem(props) {
  // props/state
  const {
    currentRanking,
    coverPic,
    duration,
    singer,
    songId,
    songName,
    className = "",
    singerId,
  } = props;

  // redux hook
  const dispatch = useDispatch();
  const { playlist } = useSelector(
    (state) => ({
      playlist: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  // other function
  const playMusic = (e, item) => {
    // 如果不跳转,那么组织超链接的默认行为

    e.preventDefault();
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  const addPlaylist = useAddPlaylist(playlist, message);

  return (
    <SongItemWrapper className={className} isPic={coverPic}>
      <div className="song-item rank-count">{currentRanking}</div>
      {coverPic && (
        <a
          rel="noopener noreferrer"
          href={`#/discover/song?id=${songId}`}
          className="song-item"
        >
          <img src={getSizeImage(coverPic, 50)} alt="" />
        </a>
      )}
      <div className="song-item song-info">
        <div className="left-info">
          <PlayCircleOutlined
            className="font-active"
            onClick={(e) => playMusic(e, songId)}
          />
          <a
            rel="noopener noreferrer"
            href={`#/discover/song?id=${songId}`}
            className="text-nowrap"
          >
            {songName}
          </a>
        </div>
        <div className="right-operator">
          <button
            href="/discover/recommend"
            className="sprite_icon2 btn addto"
            onClick={(e) => addPlaylist(e, songId)}
          ></button>
        </div>
      </div>
      <div className="song-item duration">{duration}</div>
      <a
        rel="noopener noreferrer"
        href={`#/discover/artist/detail?id=${singerId}`}
        className="song-item singer"
      >
        {singer}
      </a>
    </SongItemWrapper>
  );
}

SongItem.propTypes = {
  currentRanking: propTypes.number.isRequired,
  coverPic: propTypes.string,
  duration: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  songId: propTypes.number.isRequired,
  className: propTypes.string,
  songName: propTypes.string.isRequired,
};

export default memo(SongItem);
