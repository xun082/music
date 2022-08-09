import React, { useEffect } from "react";

import { CommentWrapper } from "./style";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getMessageCommentAction } from "../../store/actionCreators";
import { getSizeImage, parseTime } from "@/utils/format-utils";

const MessageComment = () => {
  const dispatch = useDispatch();
  const { cookie, comment, profile } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      profile: state.getIn(["loginState", "profile"]),
      comment: state.getIn(["message", "comment"]),
    }),
    shallowEqual
  );

  const userId = profile?.userId;

  console.log(comment);

  useEffect(() => {
    dispatch(getMessageCommentAction(userId, 30, cookie));
  }, [dispatch, cookie, userId]);
  return (
    <CommentWrapper>
      {comment &&
        comment.map((item) => {
          return (
            <div className="comment" key={item.combindId}>
              <div className="avatar">
                <img src={getSizeImage(item?.user?.avatarUrl, 50)} alt="" />
              </div>
              <div className="container">
                <div className="header">
                  <div className="nickname">{item?.user?.nickname}</div>
                  <div className="time">
                    {parseTime(item?.time, "{y}年{m}月{d}日 {h}:{i}")}
                  </div>
                </div>
                <div className="content">{item?.content}</div>
                <div className="source">
                  <div className="song">{item?.beRepliedContent}</div>
                  <div className="control">
                    <span className="del">删除</span>
                    <span className="reply">回复</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </CommentWrapper>
  );
};

export default MessageComment;
