import React, { memo } from "react";
// import { useDispatch } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import {
  getSongDetailAction,
  changeFirstLoad,
} from "@/pages/player/store/actionCreators";

import { TopRankingWrapper } from "./style";
import { useDispatch } from "react-redux";

export default memo(function HYTopRanking(props) {
  // props and state
  const { info } = props;

  const tracks = info && info.tracks;
  const cover = info && info.coverImgUrl;
  const name = info && info.name;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (e, item) => {
    e.preventDefault();
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item.id));
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(cover)} alt="" />
          <a href="/" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/">{name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button
                      className="btn sprite_02 play"
                      onClick={(e) => playMusic(e, item)}
                    ></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <a href="/">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
