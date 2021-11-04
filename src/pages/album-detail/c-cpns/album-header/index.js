import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getAlbumDetailAction } from "../../store/actionCreators";
import {
  getQueryObject,
  formatMonthDay,
  getSizeImage,
} from "@/utils/format-utils";
import { AlbumHeaderWrapper } from "./style";
import ThemeHeaderControl from "@/components/theme-header-control";

export default memo(function HYAlbumHeader() {
  const { albumInfo } = useSelector(
    (state) => ({
      albumInfo: state.getIn(["albumDetail", "albumInfo"]),
    }),
    shallowEqual
  );
  const name = albumInfo && albumInfo.name;
  const time = albumInfo && albumInfo.publishTime;
  const create = albumInfo && albumInfo.artist && albumInfo.artist.name;
  const compony = albumInfo && albumInfo.company;
  const desc = albumInfo && albumInfo.description;
  const picUrl = albumInfo && albumInfo.picUrl;

  const item = albumInfo && albumInfo.info;
  const comment = item && albumInfo.info.commentCount;
  const share = item && albumInfo.info.shareCount;

  const dispatch = useDispatch();
  const { id } = getQueryObject();
  useEffect(() => {
    dispatch(getAlbumDetailAction(id));
  }, [dispatch, id]);
  return (
    <AlbumHeaderWrapper>
      <div className="header">
        <div className="image sprite_cover">
          <img src={getSizeImage(picUrl, 177)} alt="" />
        </div>
        <div className="info">
          <div className="tag">
            <div className="icon sprite_icon2"></div>
            <div className="name">{name}</div>
          </div>
          <div className="singer">
            歌手:
            <a
              rel="noopener noreferrer"
              href={`#/discover/artist/detail?id=${3684}`}
              className="link"
            >
              {create}
            </a>
          </div>
          <div className="time">发行时间：{formatMonthDay(time)}</div>
          <div className="compony">发行公司：{compony}1</div>
          <div className="control">
            <ThemeHeaderControl comment={comment} share={share} />
          </div>
        </div>
      </div>
      <div className="desc">
        <div className="title">专辑介绍：</div>
        <div className="text">{desc}</div>
      </div>
    </AlbumHeaderWrapper>
  );
});
