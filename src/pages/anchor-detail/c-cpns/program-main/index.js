import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { ProgramMainWrapper } from "./style";
import { getQueryObject } from "@/utils/format-utils";
import {
  getProgramCommentAction,
  getProgramCommentTotalAction,
} from "../../store/actionCreators";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import CommentForm from "@/components/comment-form";
import CommentCard from "@/components/theme-comment";
import HYPagination from "@/components/pagination";

export default memo(function HYProgramMain() {
  const { NewComment, commentTotal, currentPage, HotComment } = useSelector(
    (state) => ({
      NewComment: state.getIn(["anchorDetail", "programNewComment"]),
      HotComment: state.getIn(["anchorDetail", "programHotComment"]),
      commentTotal: state.getIn(["anchorDetail", "commentTotal"]),
      currentPage: state.getIn(["anchorDetail", "currentPage"]),
    }),
    shallowEqual
  );

  const { pid } = getQueryObject();

  const targePageCount = (currentPage - 1) * 20;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgramCommentAction(pid, 20, targePageCount));
  }, [dispatch, pid, targePageCount]);

  // 评论
  const handleClick = () => {
    console.log(111);
  };

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getProgramCommentTotalAction(currentPage));
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
        {HotComment !== null ? (
          <div className="comment-list">
            <div className="comment-header">精彩评论</div>
            {HotComment &&
              HotComment.map((item, index) => {
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
          {NewComment ? (
            <div className="hot">
              <div className="comment-header">最新评论</div>
              {NewComment &&
                NewComment.map((item, index) => {
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
