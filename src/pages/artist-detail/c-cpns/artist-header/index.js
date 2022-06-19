import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getArtistDetailAction } from "../../store/actionCreators";
import { ArtistHeaderWrapper } from "./style";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYArtistHeader() {
  const { artistDetail } = useSelector(
    (state) => ({
      artistDetail: state.getIn(["artistDetail", "artistDetail"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const name = artistDetail && artistDetail.name;
  const cover = artistDetail && artistDetail.cover;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistDetailAction(id));
  }, [dispatch, id]);

  console.log(artistDetail);
  return (
    <ArtistHeaderWrapper>
      <div className="header">
        <div className="name">{name}</div>
        <div className="another"></div>
      </div>
      <div className="image">
        <img className="img" src={cover + `?param=${640}y${300}`} alt="" />
        <div className="mask ban_mask"></div>
        <div className="icon">
          <div className="user sprite_icon"></div>
          <div className="collect sprite_icon"></div>
        </div>
      </div>
    </ArtistHeaderWrapper>
  );
});
