import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { ArtistRightWrapper } from "./style";
import { getArtistCategoryAction } from "../../store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function HYArtistRight() {
  const { likedArtist } = useSelector(
    (state) => ({
      likedArtist: state.getIn(["artistDetail", "likedArtist"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistCategoryAction());
  });

  return (
    <ArtistRightWrapper>
      <div className="header">热门歌手</div>
      <div className="avatar">
        {likedArtist &&
          likedArtist.map((item, index) => {
            return (
              <div className="image" key={index}>
                <div className="img">
                  <img src={getSizeImage(item.picUrl, 50, "y")} alt="" />
                </div>
                <div className="name">{item.name}</div>
              </div>
            );
          })}
      </div>
    </ArtistRightWrapper>
  );
});
