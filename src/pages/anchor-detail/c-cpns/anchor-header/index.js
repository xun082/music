import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { AnchorHeaderWrapper } from "./style";
import { getSizeImage, getQueryObject } from "@/utils/format-utils";
import AnchorDetailControl from "@/components/anchor-detail-control";
import { getAnchorDetailAction } from "../../store/actionCreators";

export default memo(function HYAnchorHeader() {
  const { anchorInfo } = useSelector(
    (state) => ({
      anchorInfo: state.getIn(["anchorDetail", "anchorInfo"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const name = anchorInfo && anchorInfo.name;
  const picUrl = anchorInfo && anchorInfo.picUrl;
  const avatar = anchorInfo && anchorInfo.avatarUrl;
  const nickname = anchorInfo && anchorInfo.nickname;
  const desc = anchorInfo && anchorInfo.desc;
  const category = anchorInfo && anchorInfo.category;
  const shareCount = anchorInfo && anchorInfo.shareCount;
  const subCount = anchorInfo && anchorInfo.subCount;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnchorDetailAction(id));
  }, [dispatch, id]);
  return (
    <AnchorHeaderWrapper>
      <div className="image">
        <img src={getSizeImage(picUrl, 200)} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <div className="tag sprite_icon2"></div>
          <div className="text">{name}</div>
        </div>
        <div className="user-info">
          <div className="image">
            <img src={getSizeImage(avatar, 35)} alt="" />
          </div>
          <a rel="noopener noreferrer" href="#/#" className="name">
            {nickname}
          </a>
        </div>
        <div className="control">
          <AnchorDetailControl shareCount={shareCount} subCount={subCount} />
        </div>
        <div className="category">
          <div className="icon">{category}</div>
          {desc}
        </div>
      </div>
    </AnchorHeaderWrapper>
  );
});
