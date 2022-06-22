import React, { memo, useState } from "react";

import Draggable from "react-draggable";
import { LatterWrapper } from "./style";
import { Select, Input, message } from "antd";
import { MehOutlined } from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeLatterIsVisible } from "@/pages/profile/user-home/store/actionCreators";
import { getSendLatter } from "@/services/user";

const LatterDraggable = memo(() => {
  // 被选中的用户
  const [selectedItems, setSelectedItems] = useState([]);
  // 留言内容
  const [defaultValue, setDefaultValue] = useState("");

  const dispatch = useDispatch();

  const { isVisible, loginUserFollow, cookie } = useSelector(
    (state) => ({
      isVisible: state.getIn(["otherUser", "isVisible"]),
      loginUserFollow: state.getIn(["otherUser", "loginUserFollow"]),
      cookie: state.getIn(["loginState", "cookie"]),
    }),
    shallowEqual
  );

  // 数组过滤，还未完成，TODO
  const newArray = loginUserFollow?.filter((item) => {
    return selectedItems.every((list) => {
      return item.userId !== list.userId;
    });
  });
  // 发送私信
  const sendLatter = () => {
    if (defaultValue.trim().length === 0 || selectedItems.length === 0) {
      message.error({
        content: "内容和用发送私信的人不能为空",
        duration: 1,
      });
    } else {
      getSendLatter(selectedItems.join(","), defaultValue, cookie).then(
        (res, rej) => {
          dispatch(changeLatterIsVisible(false));
          setDefaultValue("");
          setSelectedItems([]);
          message.success({
            content: "发送成功",
            duration: 1,
          });
        }
      );
    }
  };
  return (
    <Draggable handle=".drag-handler">
      <LatterWrapper isShow={isVisible}>
        <div className="header latter_mask drag-handler">
          <span>发新私信</span>
          <div
            className="close latter_mask"
            onClick={() => {
              dispatch(changeLatterIsVisible(false));
            }}
          ></div>
        </div>
        <div className="content">
          <Select
            bordered={false}
            mode="multiple"
            placeholder="选择或输入好友昵称"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{
              width: "100%",
            }}
            className="select"
          >
            {newArray &&
              newArray.map((item) => (
                <Select.Option
                  className="item"
                  key={item.userId}
                  value={item.userId}
                >
                  {item.nickname}
                </Select.Option>
              ))}
          </Select>
          <Input.TextArea
            maxLength={200}
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <div className="footer">
            <div className="emo">
              <MehOutlined style={{ fontSize: 16 }} />
            </div>
            <div className="submit">
              <span className="length">{200 - defaultValue.length}</span>
              <div
                className="button sprite_button2"
                onClick={() => {
                  sendLatter();
                }}
              >
                发送
              </div>
            </div>
          </div>
        </div>
      </LatterWrapper>
    </Draggable>
  );
});

export default LatterDraggable;
