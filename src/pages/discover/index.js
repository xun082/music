import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";

import { loginInfo } from "@/config/token.js";
import { setLoginInfo, getLoginInfo } from "@/utils/secret-key";
import { getLoginProfileInfo } from "@/components/theme-login/store/actionCreator";

export default memo(function HYDiscover(props) {
  const { route } = props;

  // redux hook
  const dispatch = useDispatch();
  const initLogin = () => {
    // 存在登录信息
    if (localStorage.getItem("loginInfo") != null) {
      const { username, password } = getLoginInfo("loginInfo");
      username && password
        ? dispatch(getLoginProfileInfo(username, password))
        : console.log("当前登录的默认信息");
    }
    // 不存在登录信息
    else {
      setLoginInfo("loginInfo", loginInfo);
    }
  };
  initLogin();
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {discoverMenu.map((item, index) => {
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
