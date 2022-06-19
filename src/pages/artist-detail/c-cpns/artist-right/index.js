import React, { memo, useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { ArtistRightWrapper } from "./style";
import { getArtistCategoryAction } from "../../store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";
import { Link } from "react-router-dom";

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
  }, [dispatch]);

  const pageReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <ArtistRightWrapper>
      <div className="header">热门歌手</div>
      <div className="avatar">
        {likedArtist &&
          likedArtist.map((item) => {
            return (
              <Link
                onClick={pageReload}
                to={`/discover/artist/detail?id=${item.id}`}
                className="image"
                key={item.id}
                replace
              >
                <div className="img">
                  <img src={getSizeImage(item.picUrl, 50, "y")} alt="" />
                </div>
                <div className="name">{item.name}</div>
              </Link>
            );
          })}
      </div>
    </ArtistRightWrapper>
  );
});
