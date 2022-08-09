import React, { useState, useEffect } from "react";

import { MessageWrapper } from "./style";
import { messageTable } from "@/common/local-data";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { useGetUserinfo } from "@/hooks/get-userinfo";

const Message = (props) => {
  useGetUserinfo();
  const { route } = props;
  const link = window.location.hash;
  const linkName = link.substring(link.lastIndexOf("/") + 1);

  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (linkName) {
      case "at":
        setTitle("@ 我的");
        break;
      case "private":
        setTitle("私信");
        break;
      case "comment":
        setTitle("评论");
        break;

      default:
        setTitle("通知");
        break;
    }
  }, [linkName]);

  return (
    <MessageWrapper className="wrap-v2">
      <div className="left_table">
        <h2>我的消息</h2>
        <div className="table">
          {messageTable &&
            messageTable.map((item, index) => {
              return (
                <Link
                  className={`table_list ${
                    linkName === item.class_name ? "active" : ""
                  }`}
                  to={`${item.link}`}
                  key={index}
                >
                  <div className={`sprite_icon2 ${item.class_name}`}></div>
                  <div className="title">{item.title}</div>
                </Link>
              );
            })}
        </div>
        <div className="read_all">一键已读</div>
      </div>
      <div className="right_content">
        <h3>{title}</h3>
        {renderRoutes(route.routes)}
      </div>
    </MessageWrapper>
  );
};

export default Message;
