import React, { memo } from "react";

import { renderRoutes } from "react-router-config";
import { UserWrapper } from "./style";
import UserHeader from "./c-cpns/header";
import { useGetUserinfo } from "@/hooks/get-userinfo";
import LatterDraggable from "@/components/draggable-latter";

const UserHome = memo((props) => {
  const { route } = props;
  // 获取用户登录信息缓存
  useGetUserinfo();
  return (
    <UserWrapper className="wrap-v2">
      <UserHeader />
      {renderRoutes(route.routes)}
      <LatterDraggable />
    </UserWrapper>
  );
});

export default UserHome;
