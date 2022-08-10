import React, { useEffect, useState, createRef } from "react";

import { PrivateWrapper } from "./style";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getMessagePrivateAction } from "../../store/actionCreators";
import { getSizeImage, parseTime } from "@/utils/format-utils";
import { getPrivateHistory } from "@/services/message";
import { Input } from "antd";
import { _debounce } from "@/utils/util";
import { getSendLatter } from "@/services/user";

const MessagePrivate = () => {
  const inputRef = createRef();
  const dispatch = useDispatch();
  const { cookie, Private, profile } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      profile: state.getIn(["loginState", "profile"]),
      Private: state.getIn(["message", "private"]),
    }),
    shallowEqual
  );

  // 设置聊天框对方的名称
  const [nickname, setNickname] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [historyMessage, setHistoryMessage] = useState([]);
  // 留言内容
  const [messageValue, setMessageValue] = useState("");
  const [ids, setIds] = useState();

  // 封装获取聊天内容函数
  const getPrivateHistoryHandle = (ids, cookie) => {
    getPrivateHistory(Number(ids), 30, cookie).then(async (res) => {
      console.log(res);
      const result = await res?.msgs;
      setHistoryMessage(result);
    });
  };

  useEffect(() => {
    dispatch(getMessagePrivateAction(30, 0, cookie));
    // 每一分钟获取最新消息
    if (isShow) {
      setInterval(() => {
        getPrivateHistoryHandle(ids, cookie);
      }, 1000 * 60);
    }
  }, [dispatch, cookie, isShow, ids]);

  // 打开聊天框,获取所有聊天内容
  const getMessageDetail = (userId, index) => {
    setIsShow(!isShow);
    setIds(userId);
    setNickname(Private[index]?.fromUser?.nickname);

    getPrivateHistoryHandle(userId, cookie);
  };

  // 发送留言
  const sendMessage = () => {
    getSendLatter(ids, messageValue.trim(), cookie).then(() => {
      // 清空表单内容
      setMessageValue("");

      // 刷新聊天内容
      getPrivateHistoryHandle(ids, cookie);
    });
  };

  return (
    <PrivateWrapper isShow={isShow}>
      {Private &&
        Private.map((item, index) => {
          return (
            <div
              className="private"
              onClick={() => getMessageDetail(item?.fromUser?.userId, index)}
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
            <div className="nickname">{nickname}</div>
            <div className="del">删除</div>
          </div>
          <div className="chat_frame">
            {historyMessage &&
              historyMessage.map((item, index) => {
                return (
                  <div className="content" key={index}>
                    <div className="time">
                      {parseTime(item?.time, "{m} 月 {d}日  {h}:{i}")}
                    </div>
                    {profile?.userId === item?.fromUser.userId ? (
                      <div className="my user">
                        <div className="info">{JSON.parse(item?.msg).msg}</div>{" "}
                        <img
                          src={getSizeImage(item?.fromUser.avatarUrl, 50)}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="user">
                        <img
                          src={getSizeImage(item?.fromUser.avatarUrl, 50)}
                          alt=""
                        />
                        <div className="info">{JSON.parse(item?.msg).msg}</div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="control">
            <Input.TextArea
              rows={4}
              className="input"
              placeholder="请输入友善的留言"
              value={messageValue}
              ref={inputRef}
              onChange={_debounce(
                (e) => {
                  setMessageValue(e.target.value);
                },
                500,
                1
              )}
            />
            <div className="tag">
              <div className="emo sprite_icon2"></div>
              <div className="submit">
                <div className="count">{200 - messageValue.trim().length}</div>
                <div className="btn sprite_button2" onClick={sendMessage}>
                  发送
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateWrapper>
  );
};

export default MessagePrivate;
