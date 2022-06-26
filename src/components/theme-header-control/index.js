import React, { memo } from "react";

import { HeaderControlWrapper } from "./style";
import { formatMinuteSecond } from "@/utils/format-utils";
import { useDispatch } from "react-redux";
import {
  getSongDetailAction,
  changeFirstLoad,
} from "@/pages/player/store/actionCreators";
// ThemeHeaderControl
const ThemeHeaderControl = memo((props) => {
  console.log(props);
  const { comment, share, collect, duration, likedCount, id } = props;

  console.log(props);
  const dispatch = useDispatch();
  const playMusic = () => {
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(id));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  return (
    <HeaderControlWrapper>
      <div className="controls">
        {duration === undefined ? (
          <div onClick={() => playMusic(id)} className="sprite_button play">
            <i className="sprite_button inner">
              <em className="sprite_button play-icon"></em>
              播放
            </i>
          </div>
        ) : (
          <div className="sprite_button anchor-play">
            <div className="time">
              播放 {formatMinuteSecond(duration, "分", "秒")}
            </div>
          </div>
        )}
        {likedCount !== undefined ? (
          <div className="liked sprite_button">
            <div className="icon sprite_button"></div>
            <div className="num">({likedCount})</div>
          </div>
        ) : (
          ""
        )}
        <div className="sprite_button favorite">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>
            {collect}收藏
          </i>
        </div>
        <div className="sprite_button share">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>
            {share}分享
          </i>
        </div>
        <div className="sprite_button download">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em>
            下载
          </i>
        </div>
        <div className="sprite_button comment">
          <i className="sprite_button inner">
            <em className="sprite_button favorite-icon"></em> ({comment})
          </i>
        </div>
      </div>
    </HeaderControlWrapper>
  );
});
export default ThemeHeaderControl;
