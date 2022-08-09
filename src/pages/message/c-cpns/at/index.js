import React, { useEffect } from "react";

import { AtWrapper } from "./style";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getMessageAtAction } from "../../store/actionCreators";
import { getSizeImage, parseTime } from "@/utils/format-utils";

const MessageAt = () => {
  const dispatch = useDispatch();
  const { cookie, at } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      at: state.getIn(["message", "at"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getMessageAtAction(30, 0, cookie));
  }, [dispatch, cookie]);
  return (
    <AtWrapper>
      {at &&
        at.map((item, index) => {
          return (
            <div className="at" key={index}>
              <div className="desc">
                <img
                  src={getSizeImage(
                    JSON.parse(item.json).comment.user.avatarUrl,
                    50
                  )}
                  alt=""
                />
                <div className="content">
                  <div className="header">
                    <span className="nickname">
                      {JSON.parse(item.json).comment.user.nickname}
                    </span>
                    <span className="tag">评论</span>
                  </div>
                  <div className="comment text-nowrap">
                    {JSON.parse(item.json).comment.content}
                  </div>
                </div>
                <div className="time">
                  {parseTime(
                    JSON.parse(item.json).comment.time,
                    "{y}年{m}月{d}日 {h}:{i}"
                  )}
                </div>
              </div>
              <div className="source">
                <img
                  src={getSizeImage(
                    JSON.parse(item.json).resource.album.picUrl,
                    40
                  )}
                  alt=""
                />
                <div className="content">
                  <div className="song">
                    {JSON.parse(item.json).resource.name}
                  </div>
                  <div className="artist">
                    {JSON.parse(item.json).resource?.artists.map((item) => {
                      return <span key={item.id}>{item.name}</span>;
                    })}
                  </div>
                </div>
              </div>
              <div className="control">
                <div className="view">查看音乐</div>
                <div className="reply">回复</div>
              </div>
            </div>
          );
        })}
    </AtWrapper>
  );
};

export default MessageAt;
