import React, { memo } from "react";

import { renderRoutes } from "react-router-config";
import { UserWrapper } from "./style";
import UserHeader from "./c-cpns/header";

const UserHome = memo((props) => {
  const { route } = props;

  return (
    <UserWrapper className="wrap-v2">
      <UserHeader />
      {renderRoutes(route.routes)}
    </UserWrapper>
  );
});

export default UserHome;
