import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ThemePlayListRight from "@/components/theme-right-playlist";

import { SongRightWrapper } from "./style";
import {
  getSimilarSongAction,
  getSimilarAlbumAction,
  getSongDetailAction,
  changeFirstLoad,
} from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import { useAddPlaylist } from "@/hooks/change-music";
import { message } from "antd";

export default memo(function HYSoneRight() {
  const { similarSong, similarAlbum, playlist } = useSelector(
    (state) => ({
      similarSong: state.getIn(["player", "similarSong"]),
      similarAlbum: state.getIn(["player", "similarAlbum"]),
      playlist: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );
  const { id } = getQueryObject();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSimilarSongAction(id));
    dispatch(getSimilarAlbumAction(id));
  }, [dispatch, id]);

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
    <SongRightWrapper>
      <div className="header">包含这首歌的歌单</div>
      <div className="playlist">
        {similarAlbum &&
          similarAlbum.map((item, index) => {
            return <ThemePlayListRight key={index} info={item} />;
          })}
      </div>
      <div className="header">相似歌曲</div>
      {similarSong &&
        similarSong.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="name">
                <a href="#/" className="text song">
                  {item.name}
                </a>
                {item.artists &&
                  item.artists.map((items, index) => {
                    return (
                      <a
                        rel="noopener noreferrer"
                        href={`#/discover/artist/detail?id=${items.id}`}
                        className="text singer"
                        key={index}
                      >
                        {items.name}
                      </a>
                    );
                  })}
              </div>
              <div className="control">
                <div
                  className="play sprite_icon3"
                  onClick={(e) => playMusic(e, item.id)}
                ></div>
                <div
                  className="add sprite_icon3"
                  onClick={(e) => addPlaylist(e, item.id)}
                ></div>
              </div>
            </div>
          );
        })}
    </SongRightWrapper>
  );
});
