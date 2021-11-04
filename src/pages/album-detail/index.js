import React, { memo } from "react";

import { AlbumDetailWrapper } from "./style";
import HYAlbumHeader from "./c-cpns/album-header";
import HYAlbumMain from "./c-cpns/album-main";
import HYAlbumRight from "./c-cpns/album-right";
export default memo(function HYAlbumDetail() {
  return (
    <AlbumDetailWrapper className="wrap-v2">
      <div className="left wrap-v3">
        <HYAlbumHeader />
        <HYAlbumMain />
      </div>
      <div className="right wrap-v4">
        <HYAlbumRight />
      </div>
    </AlbumDetailWrapper>
  );
});
