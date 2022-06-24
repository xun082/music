import React, { memo } from "react";

import { SongControlWrapper } from "./style";
import { useAddPlaylist } from "@/hooks/change-music";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { message } from "antd";
import {
  changeAddSongList,
  getUserSongListAction,
} from "@/pages/profile/user-home/store/actionCreators";

const XXSongControlCard = memo((props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const { playlist, cookie, profile } = useSelector(
    (state) => ({
      playlist: state.getIn(["player", "playList"]),
      cookie: state.getIn(["loginState", "cookie"]),
      profile: state.getIn(["loginState", "profile"]),
    }),
    shallowEqual
  );

  // 获取登录 用户id
  const userId = profile?.userId;

  // 添加音乐
  const addPlayList = useAddPlaylist(playlist, message);

  // 收藏
  const collectSongList = () => {
    dispatch(changeAddSongList(true));
    dispatch(getUserSongListAction(userId, 30, 0, cookie));
  };

  return (
    <SongControlWrapper>
      <div
        className="sprite_icon2 icon add"
        onClick={(e) => addPlayList(e, id)}
      ></div>
      <div
        className="sprite_icon2 icon collect"
        onClick={() => collectSongList()}
      ></div>
      <div className="sprite_icon2 icon share"></div>
      <div className="sprite_table icon down"></div>
    </SongControlWrapper>
  );
});

export default XXSongControlCard;
