import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getArtistAlbumAction } from "../../store/actionCreators";
import { AlbumMainWrapper } from "./style";
import { formatMonthDay, getSizeImage } from "@/utils/format-utils";

export default memo(function HYAlbumRight() {
  const { albumInfo, artistAlbum } = useSelector(
    (state) => ({
      albumInfo: state.getIn(["albumDetail", "albumInfo"]),
      artistAlbum: state.getIn(["albumDetail", "artistAlbum"]),
    }),
    shallowEqual
  );

  // 取出用户id
  const id = albumInfo && albumInfo.artist && albumInfo.artist.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistAlbumAction(id, 10));
  }, [dispatch, id]);

  return (
    <AlbumMainWrapper>
      <div className="header">
        <div className="left">Ta的其他热门专辑</div>
        <a
          rel="noopener noreferrer"
          href={`#/discover/artist/detail?id=${id}`}
          className="all"
        >
          全部
        </a>
      </div>
      {artistAlbum &&
        artistAlbum.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="image">
                <img src={getSizeImage(item.picUrl, 50)} alt="" />
              </div>
              <div className="text">
                <div className="name text-nowrap">{item.name}</div>
                <div className="name">{formatMonthDay(item.publishTime)}</div>
              </div>
            </div>
          );
        })}
    </AlbumMainWrapper>
  );
});
