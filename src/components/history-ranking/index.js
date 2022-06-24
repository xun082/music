import React, { memo } from "react";

import { HistoryPlayWrapper } from "./style";
import XXSongControlCard from "../song-control-card";
import { useDispatch } from "react-redux";
import {
  getSongDetailAction,
  changeFirstLoad,
} from "@/pages/player/store/actionCreators";

const XXHistoryPlay = memo((props) => {
  const { songInfo, index } = props;

  const name = songInfo?.song?.name;
  const songId = songInfo?.song?.id;
  const ar = songInfo?.song?.ar;
  const id = songInfo?.song.al?.id;

  const dispatch = useDispatch();
  const playMusic = (id) => {
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(id));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  return (
    <HistoryPlayWrapper>
      <div className="content">
        <div className="ranking">{index + 1}.</div>
        <div
          className="play sprite_table"
          onClick={() => playMusic(songId)}
        ></div>
        <a
          className="link song_list text-nowrap"
          rel="noopener noreferrer"
          href={`#/discover/playlist?id=${id}`}
        >
          {name}
        </a>
        <a
          className="link singer text-nowrap"
          rel="noopener noreferrer"
          href={`#/discover/artist/detail?id=${ar[0].id}`}
        >
          {ar &&
            ar.map((item) => {
              return <span key={item.id}>{item.name}</span>;
            })}
          <span></span>
        </a>
        <div className="control">
          <XXSongControlCard id={songId} />
        </div>
      </div>
      <div className="count"></div>
    </HistoryPlayWrapper>
  );
});

export default XXHistoryPlay;
