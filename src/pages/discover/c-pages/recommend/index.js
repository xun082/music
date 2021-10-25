import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import HYTopBanner from "./c-cpns/top-banner";
import HYHotRecommend from "./c-cpns/hot-recommend";
import HYNewAlbum from "./c-cpns/new-album";
import HYRecommendRanking from "./c-cpns/recommend-ranking";
import HYUserLogin from "./c-cpns/user-login";
import HYSettleSinger from "./c-cpns/setter-singer";
import HYHotAnchor from "./c-cpns/hot-anchor";

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend />
          <HYNewAlbum />
          <HYRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin />
          <HYSettleSinger />
          <HYHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(HYRecommend);
