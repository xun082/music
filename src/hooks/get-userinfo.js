import { useDispatch } from "react-redux";
import { loginInfo } from "@/config/token.js";
import { setLoginInfo, getLoginInfo } from "@/utils/secret-key";
import { getLoginProfileInfo } from "@/components/theme-login/store/actionCreator";

// 获取用户登录信息缓存
export function useGetUserinfo() {
  const dispatch = useDispatch();

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
}
