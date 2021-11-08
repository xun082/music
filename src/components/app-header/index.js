import React, { memo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import ThemeLogin from "@/components/theme-login";
import { changeIsVisible } from "@/components/theme-login/store";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { clearLoginState } from "../../utils/secret-key";

export default memo(function HYAppHeader() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  // redux hook
  const dispatch = useDispatch();
  const { isLogin, profile } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      profile: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );

  // 用户下拉JSX
  const profileDownMenu = () => {
    return isLogin ? (
      <Menu>
        <Menu.Item key="1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#/"
            onClick={(e) => e.preventDefault()}
          >
            {profile.nickname}
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a rel="noopener noreferrer" href="#/user">
            我的主页
          </a>
        </Menu.Item>
        <Menu.Item key="3" danger onClick={() => clearLoginState()}>
          退出登录
        </Menu.Item>
      </Menu>
    ) : (
      ""
    );
  };

  const showProfileContent = () => {
    return <img src={profile.avatarUrl} alt="" className="profile-img" />;
  };

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <Dropdown placement="bottomCenter" overlay={profileDownMenu} arrow>
            <div
              className="login"
              onClick={() => !isLogin && dispatch(changeIsVisible(true))}
            >
              <a
                href="https://juejin.cn/user/606586151899166"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {isLogin ? showProfileContent() : "登录"} <DownOutlined />
              </a>
            </div>
          </Dropdown>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      <ThemeLogin />
    </HeaderWrapper>
  );
});
