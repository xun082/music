import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getUserEventList } from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import { UserEventWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import XXUserAvatar from "@/components/user-avatar-card";

const UserEvent = memo(() => {
  const { id } = getQueryObject();
  const dispatch = useDispatch();

  const { UserEvent } = useSelector(
    (state) => ({
      UserEvent: state.getIn(["otherUser", "userEvent"]),
    }),
    shallowEqual
  );
  const size = UserEvent?.size;
  const events = UserEvent?.events;

  useEffect(() => {
    dispatch(getUserEventList(id));
  }, [dispatch, id]);

  return (
    <UserEventWrapper>
      <HYThemeHeaderRCM
        showIcon={false}
        title="TA的动态"
        keywords={[`(${size}条动态)`]}
        right={false}
      />
      <div className="event-list">
        {events &&
          events.map((item) => {
            return (
              <div className="event" key={item.id}>
                <XXUserAvatar user={item.user} time={item.eventTime} />
                <div className="content">
                  <div className="title">{JSON.parse(item.json).msg}</div>
                </div>
              </div>
            );
          })}
      </div>
    </UserEventWrapper>
  );
});

export default UserEvent;
