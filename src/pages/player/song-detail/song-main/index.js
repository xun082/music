import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProgramMainWrapper } from "./style";
import { getQueryObject } from "@/utils/format-utils";
import {
  getHotCommentAction,
  getSongCommentTotalAction,
} from "../../store/actionCreators";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import CommentForm from "@/components/comment-form";
import CommentCard from "@/components/theme-comment";
import HYPagination from "@/components/pagination";

export default memo(function HYSongMain() {
  const { newComments, hotComments, commentTotal, currentPage } = useSelector(
    (state) => ({
      newComments: state.getIn(["player", "newComments"]),
      hotComments: state.getIn(["player", "hotComments"]),
      commentTotal: state.getIn(["player", "commentTotal"]),
      currentPage: state.getIn(["player", "currentPage"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();

  const targePageCount = (currentPage - 1) * 20;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotCommentAction(id, 20, targePageCount));
  }, [dispatch, id, targePageCount]);

  // 评论
  const handleClick = () => {
    console.log(111);
  };

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getSongCommentTotalAction(currentPage));
    },
    [dispatch]
  );
  return (
    <ProgramMainWrapper>
      <ThemeHeaderRcm
        title="评论"
        keywords={[`共${commentTotal}条评论`]}
        showIcon={false}
        right={false}
      />
      <div className="content">
        <div className="comment-control">
          <CommentForm handle={(e) => handleClick(e)} />
        </div>
        {hotComments !== null ? (
          <div className="comment-list">
            <div className="comment-header">精彩评论</div>
            {hotComments &&
              hotComments.map((item, index) => {
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
        <div className="comment-list">
          {newComments ? (
            <div className="hot">
              <div className="comment-header">最新评论</div>
              {newComments &&
                newComments.map((item, index) => {
                  return (
                    <CommentCard
                      key={index}
                      info={item}
                      actions={(item, index)}
                    />
                  );
                })}
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
    </ProgramMainWrapper>
  );
});
