import React, { memo, useEffect, useCallback } from "react";

import { FollowWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getUserFollowsList } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import XXUserFollow from "@/components/user-follow-card";
import HYPagination from "@/components/pagination/index";
import { getUserFollowPageAction } from "../../store/actionCreators";

const UserFollow = memo(() => {
  const { id } = getQueryObject();

  const { UserFollows, cookie, userInfo, currentPage } = useSelector(
    (state) => ({
      UserFollows: state.getIn(["otherUser", "userFollows"]),
      cookie: state.getIn(["loginState", "cookie"]),
      userInfo: state.getIn(["otherUser", "userInfo"]),
      currentPage: state.getIn(["otherUser", "currentPage"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const targePageCount = (currentPage - 1) * 20;
  useEffect(() => {
    dispatch(getUserFollowsList(id, 20, targePageCount, cookie));
  }, [dispatch, id, cookie, targePageCount]);

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getUserFollowPageAction(currentPage));
    },
    [dispatch]
  );

  return (
    <FollowWrapper>
      <HYThemeHeaderRCM
        showIcon={false}
        title="关注"
        keywords={[`(${userInfo?.profile?.follows})`]}
        right={false}
      />
      <div className="follow">
        {UserFollows &&
          UserFollows.map((item, index) => {
            return <XXUserFollow key={index} follow={item} />;
          })}
      </div>
      <div className="pageNation">
        {/* 分页 */}
        <HYPagination
          currentPage={currentPage}
          pageSize={20}
          total={userInfo?.profile?.follows}
          onPageChange={(currentPage) => changePage(currentPage)}
        />
      </div>
    </FollowWrapper>
  );
});

export default UserFollow;
