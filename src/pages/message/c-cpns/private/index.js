import React, { useEffect, useState } from "react";

import { PrivateWrapper } from "./style";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getMessagePrivateAction } from "../../store/actionCreators";
import { getSizeImage, parseTime } from "@/utils/format-utils";
import { getPrivateHistory } from "@/services/message";

const MessagePrivate = () => {
  const dispatch = useDispatch();
  const { cookie, Private } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      Private: state.getIn(["message", "private"]),
    }),
    shallowEqual
  );

  const [message, setMessage] = useState({});
  const [userId, setUserId] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const [historyMessage, setHistoryMessage] = useState([]);

  console.log(historyMessage);

  useEffect(() => {
    dispatch(getMessagePrivateAction(30, 0, cookie));
  }, [dispatch, cookie]);

  const getMessageDetail = (index) => {
    setMessage(Private[index]);
    setUserId(message?.fromUser?.userId);
    getPrivateHistory(userId, 30, cookie).then((res) => {
      console.log(res);
      setHistoryMessage(res?.msgs);
    });
    setIsShow(!isShow);
  };

  return (
    <PrivateWrapper isShow={isShow}>
      {Private &&
        Private.map((item, index) => {
          return (
            <div
              className="private"
              onClick={() => getMessageDetail(index)}
              key={index}
            >
              <img src={getSizeImage(item?.fromUser.avatarUrl, 50)} alt="" />
              <div className="content">
                <div className="nickname">{item?.fromUser.nickname}</div>
                <div className="info text-nowrap">
                  {JSON.parse(item?.lastMsg)?.msg}
                </div>
              </div>
              <div className="right">
                <div className="time">
                  {parseTime(item?.lastMsgTime, "{m} 月 {d}日  {h}:{i}")}
                </div>
                <div className="del">删除</div>
              </div>
            </div>
          );
        })}
      <div
        className="model"
        onClick={(e) => {
          e.stopPropagation();
          setIsShow(!isShow);
        }}
      >
        <div
          className="message"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="header">
            <div className="nickname">{message?.fromUser?.nickname}</div>
            <div className="del">删除</div>
          </div>
          <div className="content">
            {historyMessage &&
              historyMessage.map((item, index) => {
                return <div key={index}>1111</div>;
              })}
          </div>
        </div>
      </div>
    </PrivateWrapper>
  );
};

export default MessagePrivate;
