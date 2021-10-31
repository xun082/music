import React, { memo } from "react";

import { shallowEqual, useSelector } from "react-redux";

import { ArtistListWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeArtistCard from "@/components/theme-artist-card";

export default memo(function HYArtistList() {
  const { artistArray, currentHeader } = useSelector(
    (state) => ({
      artistArray: state.getIn(["artist", "artistArray"]),
      currentHeader: state.getIn(["artist", "currentHeader"]),
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <ThemeHeaderRcm title={currentHeader} showIcon={false} right={false} />
      <div className="content">
        {artistArray &&
          artistArray.map((item, index) => {
            return <ThemeArtistCard key={index} info={item} />;
          })}
      </div>
    </ArtistListWrapper>
  );
});
