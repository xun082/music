import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Slider } from "antd";

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { PlayBarWrapper, Control, PlayInfo, Operator } from "./style";
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCUrrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";

export default memo(function HYAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  // 音乐播放
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(316654));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  // other handle 判断有没有值，有值再去拿
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";

  // 时间格式化
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handel function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 播放进度条
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }
    //获取当前的歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      // 未完成
      // const content = lyricList[i - 1] && lyricList[i - 1].content;
      // message.open({
      //   key: "lyric",
      //   className: "lyric-class",
      //   content: content,
      //   duration: 0,
      // });
    }
  };

  // 播放进度条滑动
  const slideChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );
  const slideAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  // 切换循环播放按钮
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  //切换上下首歌曲
  const changeMusic = (tag) => {
    dispatch(changeCUrrentIndexAndSongAction(tag));
  };

  //
  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCUrrentIndexAndSongAction(1));
    }
  };
  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={showCurrentTime}
                onChange={slideChange}
                onAfterChange={slideAfterChange}
                value={progress}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn lyric"></button>
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={handleMusicEnded}
      />
    </PlayBarWrapper>
  );
});
