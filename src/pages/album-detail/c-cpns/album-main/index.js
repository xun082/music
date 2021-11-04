import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { AlbumMainWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { getQueryObject } from "@/utils/format-utils";
import {
  getAlbumNewCommentAction,
  getAlbumHotCommentAction,
  getAlbumCommentTotalAction,
} from "../../store/actionCreators";
import ThemeSongCard from "@/components/theme-artist-song";
import CommentForm from "@/components/comment-form";
import CommentCard from "@/components/theme-comment";
import HYPagination from "@/components/pagination";

export default memo(function HYAlbumMain() {
  const {
    albumSongs,
    albumHotComment,
    albumNewComment,
    commentTotal,
    currentPage,
  } = useSelector(
    (state) => ({
      albumSongs: state.getIn(["albumDetail", "albumSongs"]),
      albumHotComment: state.getIn(["albumDetail", "albumHotComment"]),
      albumNewComment: state.getIn(["albumDetail", "albumNewComment"]),
      commentTotal: state.getIn(["albumDetail", "commentTotal"]),
      currentPage: state.getIn(["albumDetail", "currentPage"]),
    }),
    shallowEqual
  );

  const length = albumSongs && albumSongs.length;
  const targePageCount = (currentPage - 1) * 20;
  const dispatch = useDispatch();
  const { id } = getQueryObject();
  useEffect(() => {
    dispatch(getAlbumNewCommentAction(id, 20, targePageCount));
    dispatch(getAlbumHotCommentAction(id));
  }, [dispatch, id, targePageCount]);

  // 评论
  const handleClick = (e) => {
    console.log(e);
  };

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getAlbumCommentTotalAction(currentPage));
    },
    [dispatch]
  );
  return (
    <AlbumMainWrapper>
      <div className="content">
        <ThemeHeaderRcm
          title="包含歌曲列表"
          keywords={[`${length}首歌`]}
          showIcon={false}
          right={false}
        />
        <div className="song-header">
          <div className="sprite_table none"></div>
          <div className="sprite_table title">歌曲标题</div>
          <div className="sprite_table time">时长</div>
          <div className="sprite_table singer">歌手</div>
        </div>
        <div className="song-list">
          {albumSongs &&
            albumSongs.map((item, index) => {
              return <ThemeSongCard key={index} index={index} info={item} />;
            })}
        </div>
        <div className="comment">
          <ThemeHeaderRcm
            title="评论"
            keywords={[`共${commentTotal}评论`]}
            showIcon={false}
            right={false}
          />
          <div className="comment-control">
            <CommentForm handle={(e) => handleClick(e)} />
          </div>
          {albumHotComment.length !== 0 ? (
            <div className="comment-list">
              <div className="comment-header">精彩评论</div>
              {albumHotComment &&
                albumHotComment.map((item, index) => {
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
          {albumNewComment.length !== 0 ? (
            <div className="comment-list">
              <div className="comment-header">最新评论</div>
              {albumNewComment &&
                albumNewComment.map((item, index) => {
                  return (
                    <CommentCard
                      key={index}
                      info={item}
                      actions={(item, index)}
                    />
                  );
                })}
              {/* 分页 */}
              <HYPagination
                currentPage={currentPage}
                pageSize={20}
                total={commentTotal}
                onPageChange={(currentPage) => changePage(currentPage)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </AlbumMainWrapper>
  );
});
