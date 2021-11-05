import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  getSizeImage,
  getQueryObject,
  formatMonthDay,
} from "@/utils/format-utils";
import { ProgramHeaderWrapper } from "./style";
import { getProgramDetailAction } from "../../store/actionCreators";
import ThemeHeaderControl from "@/components/theme-header-control";

export default memo(function HYProgramHeader() {
  const { programInfo } = useSelector(
    (state) => ({
      programInfo: state.getIn(["anchorDetail", "programInfo"]),
    }),
    shallowEqual
  );
  const { pid } = getQueryObject();
  const coverUrl = programInfo && programInfo.coverUrl;
  const name = programInfo && programInfo.name;
  const categoryName = programInfo && programInfo.categoryName;
  const createTime = programInfo && programInfo.createTime;
  const listenerCount = programInfo && programInfo.listenerCount;
  const description = programInfo && programInfo.description;
  const shareCount = programInfo && programInfo.shareCount;
  const commentCount = programInfo && programInfo.commentCount;

  const programInfos = programInfo && programInfo.radio;
  const nickname = programInfos && programInfo.radio.name;
  const subCount = programInfos && programInfos.subCount;
  const programCount = programInfos && programInfos.programCount;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgramDetailAction(pid));
  }, [dispatch, pid]);
  return (
    <ProgramHeaderWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(coverUrl, 140)} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <div className="tag sprite_icon2"></div>
            <div className="text text-nowrap">{name}</div>
          </div>
          <div className="info">
            <div className="common music sprite_icon3"></div>
            <div className="common name">{nickname}</div>
            <div className="common sub sprite_button">
              <div className="text">订阅 ({subCount}) </div>
            </div>
          </div>
          <div className="category">
            <div className="tag">{categoryName}</div>
            <div className="text">{nickname}</div>
            <div className="text">第{programCount}期</div>
          </div>
          <div className="program">
            <div className="count">{formatMonthDay(createTime)} 创建</div>
            <div className="count">
              播放<span className="number">{listenerCount}</span>次
            </div>
          </div>
        </div>
      </div>
      <div className="control">
        <ThemeHeaderControl share={shareCount} comment={commentCount} />
      </div>
      <div className="desc">简介:{description}</div>
    </ProgramHeaderWrapper>
  );
});
