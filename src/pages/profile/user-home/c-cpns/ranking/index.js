import React, { memo, useEffect } from "react";

import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { getQueryObject } from "@/utils/format-utils";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import XXHistoryPlay from "@/components/history-ranking";
import { useGetUserinfo } from "@/hooks/get-userinfo";
import { getUserPlayHistoryAction } from "../../store/actionCreators";

const SongRanking = memo(() => {
  // 获取用户登录信息缓存
  useGetUserinfo();

  const { length, id } = getQueryObject();

  const { playHistory } = useSelector(
    (state) => ({
      playHistory: state.getIn(["otherUser", "playHistory"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlayHistoryAction(0, id));
  }, [dispatch, id]);

  return (
    <div
      className="wrap-v2"
      style={{ padding: "40px", backgroundColor: "#fff" }}
    >
      <HYThemeHeaderRCM
        showIcon={false}
        title="听歌排行"
        keywords={[`累积听歌${length}首`]}
        right={false}
      />
      {playHistory &&
        playHistory.map((item, index) => {
          return (
            <XXHistoryPlay songInfo={item} index={index} key={item?.song?.id} />
          );
        })}
    </div>
  );
});

export default SongRanking;
