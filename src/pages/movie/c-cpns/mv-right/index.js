import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { MvMainWrapper } from "./style";
import { getQueryObject, getCount, formatMonthDay } from "@/utils/format-utils";
import { getSimilarMvAction } from "../../store/actionCreators";
export default memo(function HYMvMain() {
  const { mvInfo, similarMv } = useSelector(
    (state) => ({
      mvInfo: state.getIn(["mv", "mvInfo"]),
      similarMv: state.getIn(["mv", "similarMv"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const { publishTime, desc, playCount } = mvInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSimilarMvAction(id));
  }, [dispatch, id]);
  return (
    <MvMainWrapper>
      <div className="header">MV简介</div>
      <div className="info">发布时间:{formatMonthDay(publishTime)}</div>
      <div className="info">播放次数:{getCount(playCount)}</div>
      <div className="desc">{desc || null}</div>
      <div className="header">相关推荐</div>
      {similarMv &&
        similarMv.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="image">
                <img src={item.coverUrl + "?param=96y54"} alt="" />
                <div className="count mask_icon">
                  <div className="icon sprite_icon3"></div>
                  <div className="num">{getCount(item.playTime)}</div>
                </div>
              </div>

              <div className="info">
                <div className="name">{item.title}</div>
                <div className="name">{item.durationms}</div>
                <div className="name">by {item.creator[0].userName}</div>
              </div>
            </div>
          );
        })}
    </MvMainWrapper>
  );
});
