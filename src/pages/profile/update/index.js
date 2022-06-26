import React, { memo } from "react";

import { UpdateWrapper } from "./style";

const UserUpdate = memo(() => {
  return (
    <UpdateWrapper className="wrap-v2">
      <h1>个人设置</h1>
    </UpdateWrapper>
  );
});

export default UserUpdate;
