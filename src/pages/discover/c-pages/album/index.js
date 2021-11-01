import React, { memo } from "react";

import { AlbumWrapper } from "./style";
import HotAlbumWrapper from "./c-cpns/album-hot";

export default memo(function HYAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <HotAlbumWrapper />
    </AlbumWrapper>
  );
});
