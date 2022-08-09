import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getUserEventList,
  getUserFollowsList,
} from "../../store/actionCreators";
import { getQueryObject, getSizeImage } from "@/utils/format-utils";
import { UserEventWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import XXUserAvatar from "@/components/user-avatar-card";

const UserEvent = memo(() => {
  const { id } = getQueryObject();
  const dispatch = useDispatch();

  const { UserEvent, UserFollows } = useSelector(
    (state) => ({
      UserEvent: state.getIn(["otherUser", "userEvent"]),
      UserFollows: state.getIn(["otherUser", "userFollows"]),
    }),
    shallowEqual
  );

  const size = UserEvent?.size;
  const events = UserEvent?.events;

  useEffect(() => {
    dispatch(getUserEventList(id));
    dispatch(getUserFollowsList(id, 6));
  }, [dispatch, id]);

  return (
    <UserEventWrapper>
      <HYThemeHeaderRCM
        showIcon={false}
        title="TA的动态"
        keywords={[`(${size}条动态)`]}
        right={false}
      />
      <div className="wrapper">
        <div className="event-list">
          {events &&
            events.map((item) => {
              return (
                <div className="event" key={item.id}>
                  <XXUserAvatar user={item.user} time={item.eventTime} />
                  <div className="content">
                    <div className="title">{JSON.parse(item.json).msg}</div>
                    <div className="song">
                      <img
                        src={JSON.parse(item?.json)?.song?.img80x80}
                        alt=""
                      />
                      <div className="info">
                        <div className="song_name">
                          {JSON.parse(item?.json)?.song?.name}
                        </div>
                        {/* artists */}
                        <div className="song_create">
                          {JSON.parse(item?.json)?.song?.artists.map((item) => {
                            return item.name;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="pics">
                      {item?.pics?.map((item, index) => {
                        return (
                          <img
                            src={getSizeImage(item?.originUrl, 110)}
                            alt=""
                            key={index}
                          />
                        );
                      })}
                    </div>
                    <div className="support">
                      <div className="common link">
                        <div className="frd_dyn_sprite"></div>
                        {item?.info?.likedCount !== 0 ? (
                          <div className="count info">
                            ({item?.info?.likedCount})
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="common share">
                        <div className="info">转发</div>
                        {item?.info?.shareCount !== 0 ? (
                          <div className="count info">
                            ({item?.info?.shareCount})
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="common comment">
                        <div className="info">评论</div>{" "}
                        {item?.info?.commentCount !== 0 ? (
                          <div className="count info">
                            ({item?.info?.commentCount})
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="fans">
          <h4>TA的关注</h4>
          <div className="fans_list">
            {UserFollows &&
              UserFollows.map((item, index) => {
                return (
                  <div className="list" key={index}>
                    <img src={getSizeImage(item.avatarUrl, 64)} alt="" />
                    <div className="name text-nowrap">{item.nickname}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </UserEventWrapper>
  );
});

export default UserEvent;
