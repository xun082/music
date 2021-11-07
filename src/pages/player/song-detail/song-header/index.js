import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { SongHeaderWrapper } from "./style";
import {
  getSongLyricAction,
  getSongInfoAction,
} from "../../store/actionCreators";
import { getSizeImage, getQueryObject } from "@/utils/format-utils";
import ThemeHeaderControl from "@/components/theme-header-control";

export default memo(function HYSongHeader() {
  const { songInfo, songLyric, commentTotal } = useSelector(
    (state) => ({
      songInfo: state.getIn(["player", "songInfo"]),
      songLyric: state.getIn(["player", "songLyric"]),
      commentTotal: state.getIn(["player", "commentTotal"]),
    }),
    shallowEqual
  );

  const { name, mv, al, ar } = songInfo;
  const albumName = al && al.name;
  const picUrl = al && al.picUrl;

  // const singer=
  const { id } = getQueryObject();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongLyricAction(id));
    dispatch(getSongInfoAction(id));
  }, [dispatch, id]);
  return (
    <SongHeaderWrapper>
      <div className="image sprite_cover">
        <img src={getSizeImage(picUrl, 131)} alt="" />
      </div>
      <div className="content">
        <div className="header">
          <div className="category sprite_icon2"></div>
          <div className="name">{name}</div>
          {mv !== 0 ? <div className="mv sprite_icon2"></div> : ""}
        </div>
        {ar &&
          ar.map((item, index) => {
            return (
              <div className="info" key={index}>
                <span className="text">歌手:</span>
                <a href="#/">{item.name}</a>
              </div>
            );
          })}
        <div className="info">
          <span className="text">所属专辑:</span>
          <a href="#/">{albumName}</a>
        </div>
        <div className="control">
          <ThemeHeaderControl comment={commentTotal} />
        </div>
        <div className="lyric">
          {songLyric &&
            songLyric.map((item, index) => {
              return (
                <div className="lyric-list" key={index}>
                  {item.content}
                </div>
              );
            })}
        </div>
      </div>
    </SongHeaderWrapper>
  );
});
