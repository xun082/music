import React, { memo, useEffect } from "react";

import { HomeWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { getQueryObject } from "@/utils/format-utils";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SongCover from "@/components/songs-cover";
import {
  getUserPlayHistoryAction,
  getUserSongListAction,
} from "../../store/actionCreators";
import XXHistoryPlay from "@/components/history-ranking";
import { Link } from "react-router-dom";

const Home = memo(() => {
  const { id } = getQueryObject();

  const { playHistory, profile, cookie, songList, userInfo } = useSelector(
    (state) => ({
      playHistory: state.getIn(["otherUser", "playHistory"]),
      profile: state.getIn(["loginState", "profile"]),
      cookie: state.getIn(["loginState", "cookie"]),
      songList: state.getIn(["otherUser", "songList"]),
      userInfo: state.getIn(["otherUser", "userInfo"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // 获取登录 用户id
  const songCount = playHistory?.length;
  const LoginName = profile?.nickname;
  const user = userInfo?.profile;
  const nickname = user?.nickname;

  useEffect(() => {
    dispatch(getUserPlayHistoryAction(0, id));
    dispatch(getUserSongListAction(id, 30, 0, cookie));
  }, [dispatch, id, cookie]);

  return (
    <HomeWrapper>
      {playHistory ? (
        <>
          <HYThemeHeaderRCM
            showIcon={false}
            title="听歌排行"
            keywords={[`累积听歌${songCount}首`]}
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
          {songCount > 10 ? (
            <div className="more">
              <Link to={`/user/songs/rank?length=${songCount}&id=${id}`}>
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

      <HYThemeHeaderRCM
        showIcon={false}
        title={`${nickname !== LoginName ? nickname : "我 "}创建的歌单`}
        keywords={[`(${songList?.length})`]}
        right={false}
      />
      <div className="song_card">
        {songList &&
          songList.map((item) => {
            return <SongCover info={item} key={item.id} />;
          })}
      </div>
    </HomeWrapper>
  );
});

export default Home;
