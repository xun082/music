import React, { memo } from "react";

import { SongModelWrapper } from "./style";
import Draggable from "react-draggable";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";
import { changeAddSongList } from "@/pages/profile/user-home/store/actionCreators";
import { SendAddSongList } from "@/services/songs";
import { message } from "antd";

const XXSongListModel = memo(() => {
  const dispatch = useDispatch();

  const { cookie, addSongListModel, songList } = useSelector(
    (state) => ({
      cookie: state.getIn(["loginState", "cookie"]),
      profile: state.getIn(["loginState", "profile"]),
      addSongListModel: state.getIn(["otherUser", "addSongListModel"]),
      songList: state.getIn(["otherUser", "songList"]),
    }),
    shallowEqual
  );

  const closeModel = () => {
    dispatch(changeAddSongList(false));
  };

  // 添加歌单 第二个参数是歌单id，第三个是歌曲id TODO
  const addSongList = (id) => {
    SendAddSongList("add", 2496716268, 28940048, cookie).then((res) => {
      message.error({
        content: "接口错误???，操作无效",
      });
      setTimeout(() => {
        dispatch(changeAddSongList(false));
      }, 500);
    });
  };

  return (
    <Draggable handle=".drag-handler">
      <SongModelWrapper isShow={addSongListModel}>
        <div className="header latter_mask drag-handler">
          <span>添加到歌单</span>
          <div className="close latter_mask" onClick={() => closeModel()}></div>
        </div>
        <div className="addSongList">
          <div className="add sprite_icon2"></div>
          <span>新歌单</span>
        </div>
        <div className="song_List">
          {songList &&
            songList.map((item) => {
              return (
                <div
                  className="song_card"
                  key={item.id}
                  onClick={() => addSongList(item.id)}
                >
                  <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                  <div className="info">
                    <span className="name">{item.name}</span>
                    <span className="total">{item.trackCount}首</span>
                  </div>
                </div>
              );
            })}
        </div>
      </SongModelWrapper>
    </Draggable>
  );
});

export default XXSongListModel;
