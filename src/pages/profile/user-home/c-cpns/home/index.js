import React, { memo, useEffect } from "react";

import { HomeWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { getQueryObject } from "@/utils/format-utils";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getUserPlayHistoryAction } from "../../store/actionCreators";
import XXHistoryPlay from "@/components/history-ranking";
import { Link } from "react-router-dom";

const Home = memo(() => {
  const { id } = getQueryObject();

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
  const length = playHistory?.length;

  return (
    <HomeWrapper>
      {playHistory ? (
        <>
          <HYThemeHeaderRCM
            showIcon={false}
            title="听歌排行"
            keywords={[`累积听歌${length}首`]}
            right={false}
          />
          <div className="history">
            {playHistory &&
              playHistory.slice(0, 10).map((item, index) => {
                return (
                  <XXHistoryPlay
                    songInfo={item}
                    index={index}
                    key={item?.song?.id}
                  />
                );
              })}
          </div>
          {playHistory.length > 10 ? (
            <div className="more">
              <Link to={`/user/songs/rank?length=${length}&id=${id}`}>
                查看更多
              </Link>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      <div>1111</div>
    </HomeWrapper>
  );
});

export default Home;
