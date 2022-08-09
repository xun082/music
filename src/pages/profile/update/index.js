import React, { useState } from "react";

import { UpdateWrapper } from "./style";
import { Button, Radio, Form, Input } from "antd";
import { useGetUserinfo } from "@/hooks/get-userinfo";
import { useSelector, shallowEqual } from "react-redux";

const UserUpdate = () => {
  // 获取登陆信息
  useGetUserinfo();

  const { userInfo } = useSelector(
    (state) => ({
      userInfo: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );
  // gender
  const [nickname] = useState(userInfo?.nickname);
  const [signature] = useState(userInfo?.signature);
  const [gender] = useState(userInfo?.gender);
  console.log(userInfo);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <UpdateWrapper className="wrap-v2">
      <h1>个人设置</h1>
      <Form
        className="form"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="昵称" initialValue={nickname} name="nickname">
          <Input />
        </Form.Item>
        <Form.Item label="介绍" initialValue={signature} name="desc">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item name="gender" initialValue={gender} label="性别">
          <Radio.Group>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </UpdateWrapper>
  );
};

export default UserUpdate;
