import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { PlayRightWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { getSongList } from "@/pages/discover/c-pages/songs/store/actionCreators";

export default memo(function HYPlayRight() {
  const { playListLiked, playlists } = useSelector(
    (state) => ({
      playListLiked: state.getIn(["playlist", "playListLiked"]),
      playlists: state.getIn(["songList", "categorySongs", "playlists"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongList(0, 8));
  }, [dispatch]);
  return (
    <PlayRightWrapper>
      <div className="header">喜欢这个歌单的人</div>
      <div className="avatar">
        {playListLiked &&
          playListLiked.map((item, index) => {
            return (
              <div className="image" key={index}>
                <img src={getSizeImage(item.avatarUrl, 40)} alt="" />
              </div>
            );
          })}
      </div>
      <div className="header">热门歌单</div>

      {playlists &&
        playlists.map((item, index) => {
          return (
            <div className="playlist" key={index}>
              <div className="img">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
              </div>

              <a
                rel="noopener noreferrer"
                href={`#/discover/playlist?id=${item.id}`}
                className="info"
              >
                <div className="text">{item.name}</div>
                <div className="text">{item.creator.nickname}</div>
              </a>
            </div>
          );
        })}
    </PlayRightWrapper>
  );
});
