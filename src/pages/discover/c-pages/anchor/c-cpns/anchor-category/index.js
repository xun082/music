import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import {
  getExcellentAnchorAction,
  getBannerCategoryAction,
  getRankingCommentTotalAction,
} from "../../store/actionCreators";
import { CategoryAnchorWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeAnchorExcellent from "@/components/theme-anchor-excellent";
import ThemeAnchorCard from "@/components/theme-anchor-card";
import HYPagination from "@/components/pagination/index";
import { getRoute } from "@/utils/format-utils.js";

function CategoryAnchor() {
  const { anchorExcellent, categoryRanking, anchorTotal, currentPage } =
    useSelector(
      (state) => ({
        anchorExcellent: state.getIn(["anchor", "anchorExcellent"]),
        categoryRanking: state.getIn(["anchor", "categoryRanking"]),
        anchorTotal: state.getIn(["anchor", "anchorTotal"]),
        currentPage: state.getIn(["anchor", "currentPage"]),
      }),
      shallowEqual
    );

  const dispatch = useDispatch();
  const targePageCount = (currentPage - 1) * 20;
  useEffect(() => {
    dispatch(getExcellentAnchorAction(getRoute()));
    dispatch(getBannerCategoryAction(22, targePageCount, getRoute()));
  }, [dispatch, targePageCount]);

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getRankingCommentTotalAction(currentPage));
    },
    [dispatch]
  );

  return (
    <CategoryAnchorWrapper>
      <ThemeHeaderRcm title="优秀新电台" showIcon={true} />
      <div className="excellent">
        {anchorExcellent &&
          anchorExcellent.slice(0, 5).map((item, index) => {
            return <ThemeAnchorExcellent key={index} info={item} />;
          })}
      </div>
      <ThemeHeaderRcm title="电台排行榜" showIcon={true} />

      <div className="ranking">
        {categoryRanking &&
          categoryRanking.slice(0, 20).map((item, index) => {
            return <ThemeAnchorCard key={index} info={item} />;
          })}
      </div>
      <div className="pageNation">
        {/* 分页 */}
        <HYPagination
          currentPage={currentPage}
          pageSize={20}
          total={anchorTotal}
          onPageChange={(currentPage) => changePage(currentPage)}
        />
      </div>
    </CategoryAnchorWrapper>
  );
}

export default memo(CategoryAnchor);
