import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getArtistSongAction } from "../../store/actionCreators";
import { ArtistSongWrapper } from "./style";
import { getQueryObject } from "@/utils/format-utils";
import ThemeSongCard from "@/components/theme-artist-song";

export default memo(function HYArtistSong() {
  const { artistSong } = useSelector(
    (state) => ({
      artistSong: state.getIn(["artistDetail", "artistSong"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistSongAction(id));
  }, [dispatch, id]);
  return (
    <ArtistSongWrapper>
      <div className="header">
        <div className="left">
          <div className="play sprite_button">
            <span>播放</span>
          </div>
          <div className="add sprite_button"></div>
          <div className="collect sprite_button">
            <span>收藏热门50</span>
          </div>
        </div>
        <div className="right sprite_button">热门单曲</div>
      </div>
      <div className="content">
        {artistSong &&
          artistSong.map((item, index) => {
            return <ThemeSongCard key={index} index={index} info={item} />;
          })}
      </div>
    </ArtistSongWrapper>
  );
});
