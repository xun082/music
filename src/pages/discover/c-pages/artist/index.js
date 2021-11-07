import React, { memo } from "react";

import { ArtistWrapper, ArtistWrapperLeft, ArtistWrapperRight } from "./style";
import HYArtistCategory from "./c-cpns/artist-category";
import HYArtistList from "./c-cpns/artist-list";

export default memo(function HYArtist() {
  return (
    <ArtistWrapper className="wrap-v2 wrap-back">
      <ArtistWrapperLeft>
        <HYArtistCategory />
      </ArtistWrapperLeft>
      <ArtistWrapperRight>
        <HYArtistList />
      </ArtistWrapperRight>
    </ArtistWrapper>
  );
});
