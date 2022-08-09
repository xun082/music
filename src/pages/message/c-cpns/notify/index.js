import React, { useEffect } from "react";

import { NotifyWrapper } from "./style";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getMessageNotifyAction } from "../../store/actionCreators";
import { getSizeImage, parseTime } from "@/utils/format-utils";

const MessageNotify = () => {
  const dispatch = useDispatch();
  const { cookie, notify } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      notify: state.getIn(["message", "notify"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getMessageNotifyAction(30, -1, cookie));
  }, [dispatch, cookie]);

  return (
    <NotifyWrapper>
      {notify &&
        notify.map((item) => {
          return (
            <div className="notify" key={item.id}>
              <img
                src={getSizeImage(JSON.parse(item?.notice)?.user.avatarUrl, 40)}
                alt=""
              />
              <div className="content">
                <div className="header">
                  <span className="nickname">
                    {JSON.parse(item?.notice)?.user?.nickname}
                  </span>
                  <span className="info">赞了你的评论</span>
                </div>
                <div className="comment">
                  {JSON.parse(item?.notice)?.comment?.content
                    ? JSON.parse(item?.notice)?.comment?.content
                    : `我分享了歌曲 「${
                        JSON.parse(item?.notice)?.track?.json &&
                        JSON.parse(JSON.parse(item?.notice)?.track?.json)?.song
                          ?.name
                      }」by ${
                        JSON.parse(item?.notice)?.track?.json &&
                        JSON.parse(JSON.parse(item?.notice)?.track?.json)?.song
                          ?.artists[0]?.name
                      }`}
                </div>
              </div>
              <div className="time">
                <div className="info">
                  {parseTime(
                    JSON.parse(item?.notice)?.comment?.time ||
                      JSON.parse(item?.notice)?.track?.showTime,
                    "{y}年{m}月{d}日 {h}:{i}"
                  )}
                </div>
                <div className="sprite_icon2"></div>
              </div>
            </div>
          );
        })}
    </NotifyWrapper>
  );
};

export default MessageNotify;
