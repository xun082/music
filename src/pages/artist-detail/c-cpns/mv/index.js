import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { ArtistMvWrapper } from "./style";
import ThemeMovieCard from "@/components/theme-movie-card";
import { getArtistMovieAction } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYArtistMv() {
  const { artistMovie } = useSelector(
    (state) => ({
      artistMovie: state.getIn(["artistDetail", "artistMovie"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistMovieAction(id));
  }, [dispatch, id]);
  return (
    <ArtistMvWrapper>
      <div className="content">
        {artistMovie &&
          artistMovie.map((item, index) => {
            return <ThemeMovieCard key={index} info={item} />;
          })}
      </div>
    </ArtistMvWrapper>
  );
});
