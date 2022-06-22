import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { PlayRightWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { getSongList } from "@/pages/discover/c-pages/songs/store/actionCreators";
import ThemePlayListRight from "@/components/theme-right-playlist";
import { Link } from "react-router-dom";

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
          playListLiked.map((item) => {
            return (
              <Link
                to={`/users/home?id=${item.userId}`}
                className="image"
                key={item.userId}
              >
                <img src={getSizeImage(item.avatarUrl, 40)} alt="" />
              </Link>
            );
          })}
      </div>
      <div className="header">热门歌单</div>

      {playlists &&
        playlists.map((item, index) => {
          return <ThemePlayListRight key={index} info={item} />;
        })}
    </PlayRightWrapper>
  );
});
