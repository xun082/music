import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { FieldTimeOutlined } from "@ant-design/icons";

import { HeaderWrapper } from "./style";
import { getSizeImage, formatMonthDay } from "@/utils/format-utils.js";
import ThemeHeaderControl from "@/components/theme-header-control";

export default memo(function RankingHeader() {
  const { titleInfo } = useSelector(
    (state) => ({
      titleInfo: state.getIn(["ranking", "rankingTitleInfo"]),
    }),
    shallowEqual
  );

  console.log(titleInfo);
  // other handle
  const picUrl = titleInfo && titleInfo.coverImgUrl;
  const name = titleInfo && titleInfo.name;
  const updateTime = titleInfo && titleInfo.trackNumberUpdateTime;
  const comment = titleInfo && titleInfo.commentCount;
  const share = titleInfo && titleInfo.shareCount;
  const collect = titleInfo && titleInfo.subscribedCount;

  return (
    <HeaderWrapper>
      <div className="title-image">
        <img src={getSizeImage(picUrl, 150)} alt="" />
        <div className="image_cover msk"></div>
      </div>
      <div className="title-info">
        <h2>{name}</h2>
        <div className="update-info">
          <FieldTimeOutlined className="timer" />
          最近更新: {formatMonthDay(updateTime)}
        </div>
        <ThemeHeaderControl comment={comment} share={share} collect={collect} />
      </div>
    </HeaderWrapper>
  );
});
