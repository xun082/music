import React, { memo, useEffect } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { getPlayListAction } from "../../store/actionCreators";
import { PlayHeaderWrapper } from "./style";
import {
  getSizeImage,
  formatMonthDay,
  getQueryObject,
} from "@/utils/format-utils";
import ThemeHeaderControl from "@/components/theme-header-control";

export default memo(function HYPlayHeader() {
  const { cookie, playListInfo } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      playListInfo: state.getIn(["playlist", "playListInfo"]),
    }),
    shallowEqual
  );

  let { id } = getQueryObject();
  const picUrl = playListInfo && playListInfo.coverImgUrl;
  const name = playListInfo && playListInfo.name;
  const time = playListInfo && playListInfo.createTime;
  const comment = playListInfo && playListInfo.commentCount;
  const share = playListInfo && playListInfo.shareCount;
  const collect = playListInfo && playListInfo.subscribedCount;
  const tags = playListInfo && playListInfo.tags;
  const desc = playListInfo && playListInfo.description;

  const creator = playListInfo && playListInfo.creator;
  const userUrl = creator && creator.avatarUrl;
  const nickname = creator && creator.nickname;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayListAction(id, 8, cookie));
  }, [dispatch, cookie, id]);
  return (
    <PlayHeaderWrapper>
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
            <img src={getSizeImage(userUrl, 35)} alt="" />
          </div>
          <a rel="noopener noreferrer" href="#/#" className="name">
            {nickname}
          </a>
          <div className="time">{formatMonthDay(time)} 创建</div>
        </div>
        <div className="control">
          <ThemeHeaderControl
            comment={comment}
            share={share}
            collect={collect}
          />
        </div>
        <div className="tag">
          标签：
          {tags &&
            tags.map((item, index) => {
              return (
                <div className="icon" key={index}>
                  {item}
                </div>
              );
            })}
        </div>
        <div className="desc">简介：{desc}</div>
      </div>
    </PlayHeaderWrapper>
  );
});
