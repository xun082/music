import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";
import { useGetUserinfo } from "@/hooks/get-userinfo";

export default memo(function HYDiscover(props) {
  const { route } = props;

  // 获取用户登录信息缓存
  useGetUserinfo();

  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {discoverMenu.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </TopMenu>
        </div>
        {renderRoutes(route.routes)}
      </DiscoverWrapper>
    </div>
  );
});
