import React, { memo, useEffect, useCallback } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { PlayMainWrapper } from "./style";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import ThemeSongHeader from "@/components/theme-song-header";
import ThemeSongCard from "@/components/theme-song-card";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import CommentCard from "@/components/theme-comment";
import CommentForm from "@/components/comment-form";
import HYPagination from "@/components/pagination/index";
import { getQueryObject } from "@/utils/format-utils";
import {
  getRanKingHotCommentAction,
  getRanKingNewCommentAction,
  getRankingCommentTotalAction,
} from "@/pages/discover/c-pages/ranking/store/actionCreators";

export default memo(function HYPlayMain() {
  const {
    playListInfo,
    playListArray,
    currentPage,
    hotCommentList,
    newCommentList,
    commentTotal,
  } = useSelector(
    (state) => ({
      playListInfo: state.getIn(["playlist", "playListInfo"]),
      playListArray: state.getIn(["playlist", "playListArray"]),
      currentPage: state.getIn(["ranking", "currentPage"]),
      hotCommentList: state.getIn(["ranking", "hotCommentList"]),
      newCommentList: state.getIn(["ranking", "newCommentList"]),
      commentTotal: state.getIn(["ranking", "commentTotal"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();
  const playCount = playListInfo && playListInfo.playCount;
  const item = playListInfo && playListInfo.tracks;
  const length = item && item.length;

  const targePageCount = (currentPage - 1) * 20;
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getRanKingHotCommentAction(id, 2));
    dispatch(getRanKingNewCommentAction(id, 20, targePageCount));
  }, [dispatch, id, targePageCount]);

  const rightSlot = (
    <span>
      播放：<em style={{ color: "#c20c0c" }}>{playCount}</em>次
    </span>
  );

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getRankingCommentTotalAction(currentPage));
    },
    [dispatch]
  );

  // 评论
  const handleClick = () => {
    console.log(111);
  };

  return (
    <PlayMainWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={[`${length}首歌`]}
        showIcon={false}
        right={rightSlot}
      />
      <ThemeSongHeader />
      {playListArray &&
        playListArray.map((item, index) => {
          return <ThemeSongCard key={index} index={index + 1} info={item} />;
        })}
      {/* 评论 */}
      <div className="comment">
        <ThemeHeaderRcm title="评论" showIcon={false} right={false} />
        <div className="comment-control">
          <CommentForm handle={(e) => handleClick(e)} />
        </div>
        <div className="comment-list">
          {hotCommentList ? (
            <div className="hot">
              <ThemeHeaderRcm title="精彩评论" showIcon={false} right={false} />
              {hotCommentList &&
                hotCommentList.map((item, index) => {
                  return (
                    <CommentCard
                      key={index}
                      info={item}
                      actions={(item, index)}
                    />
                  );
                })}
            </div>
          ) : (
            ""
          )}
          <div className="new">
            <ThemeHeaderRcm title="最新评论" showIcon={false} right={false} />
            {newCommentList &&
              newCommentList.map((item, index) => {
                return <CommentCard key={index} info={item} />;
              })}{" "}
            {/* 分页 */}
            <HYPagination
              currentPage={currentPage}
              pageSize={20}
              total={commentTotal}
              onPageChange={(currentPage) => changePage(currentPage)}
            />
          </div>
        </div>
      </div>
    </PlayMainWrapper>
  );
});
