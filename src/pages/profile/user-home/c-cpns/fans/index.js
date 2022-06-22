import React, { memo, useEffect, useCallback } from "react";

import { FansWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getUserFansList } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import XXUserFollow from "@/components/user-follow-card";
import HYPagination from "@/components/pagination/index";
import { getUserFansPageAction } from "../../store/actionCreators";

const UserFans = memo(() => {
  const { id } = getQueryObject();

  const { userFans, cookie, userInfo, fansCurrentPage } = useSelector(
    (state) => ({
      userFans: state.getIn(["otherUser", "userFans"]),
      cookie: state.getIn(["loginState", "cookie"]),
      userInfo: state.getIn(["otherUser", "userInfo"]),
      fansCurrentPage: state.getIn(["otherUser", "fansCurrentPage"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const targePageCount = (fansCurrentPage - 1) * 20;
  useEffect(() => {
    dispatch(getUserFansList(id, 20, targePageCount, cookie));
  }, [dispatch, id, cookie, targePageCount]);

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getUserFansPageAction(currentPage));
    },
    [dispatch]
  );
  return (
    <FansWrapper>
      <HYThemeHeaderRCM
        showIcon={false}
        title="粉丝"
        keywords={[`(${userInfo?.profile?.followeds})`]}
        right={false}
      />
      <div className="follow">
        {userFans &&
          userFans.map((item, index) => {
            return <XXUserFollow key={index} follow={item} />;
          })}
      </div>
      <div className="pageNation">
        {/* 分页 */}
        <HYPagination
          currentPage={fansCurrentPage}
          pageSize={20}
          total={userInfo?.profile?.followeds}
          onPageChange={(fansCurrentPage) => changePage(fansCurrentPage)}
        />
      </div>
    </FansWrapper>
  );
});

export default UserFans;
