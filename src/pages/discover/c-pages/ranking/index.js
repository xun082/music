import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import qs from "query-string";

import {
  getRankingListAction,
  getRanKingListTitleInfoAction,
} from "./store/actionCreators";
import {
  RankingWrapper,
  RankingWrapperLeft,
  RankingWrapperRight,
} from "./style";
import RankingLeftRcm from "./c-cpns/ranking-left";
import RankingHeader from "./c-cpns/rankin-header";
import RanKingMain from "./c-cpns/ranking.main";

export default memo(function HYRanking(props) {
  // redux hooks
  const { ranKingList, currentRanKingListId } = useSelector(
    (state) => ({
      ranKingList: state.getIn(["ranking", "ranKingList"]),
      currentRanKingListId: state.getIn(["ranking", "currentRanKingListId"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // 19723756
  useEffect(() => {
    dispatch(getRankingListAction());
    // 派发榜单标题信息Action
    // 把对象转成查询字符串或者把查询字符串转成对象用
    let { id } = qs.parse(props.location.search);
    id = id ? id : currentRanKingListId;
    dispatch(getRanKingListTitleInfoAction(id));
  }, [dispatch, currentRanKingListId, props]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingWrapperLeft>
        <div className="header">
          <div className="header">云音乐特色榜</div>
        </div>
        {ranKingList &&
          ranKingList.map((item, index) => {
            return (
              <RankingLeftRcm
                key={item.id}
                info={item}
                index={index}
                history={props.history}
              />
            );
          })}
      </RankingWrapperLeft>
      <RankingWrapperRight>
        <RankingHeader />
        <RanKingMain />
      </RankingWrapperRight>
    </RankingWrapper>
  );
});
