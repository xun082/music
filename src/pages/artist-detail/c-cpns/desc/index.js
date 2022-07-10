import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { ArtistDescWrapper } from "./style";
import { getArtistDescAction } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYArtistDesc() {
  const { artistDesc, artistDetail } = useSelector(
    (state) => ({
      artistDesc: state.getIn(["artistDetail", "artistDesc"]),
      artistDetail: state.getIn(["artistDetail", "artistDetail"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const introduction = artistDesc && artistDesc.introduction;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistDescAction(id));
  }, [dispatch, id]);

  console.log(introduction);
  return (
    <ArtistDescWrapper>
      <div className="content">
        <div className="header">{artistDetail.name}简介</div>
        <div className="info">{artistDesc.briefDesc}</div>
        {introduction &&
          introduction.map((item, index) => {
            return (
              <div className="desc" key={index}>
                <div className="title">{item.ti}</div>
                <div className="works">{item.txt}</div>
              </div>
            );
          })}
      </div>
    </ArtistDescWrapper>
  );
});
