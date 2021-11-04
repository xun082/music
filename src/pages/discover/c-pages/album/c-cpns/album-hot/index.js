import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HotAlbumWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import {
  getHotAlbumAction,
  getAlbumTotalAction,
} from "../../store/actionCreators";
import HYAlbumCover from "@/components/album-cover";
import HYPagination from "@/components/pagination";

export default memo(function HYHotAlbum() {
  // redux hooks
  const { hotAlbum, albumTotal, currentPage } = useSelector(
    (state) => ({
      hotAlbum: state.getIn(["album", "hotAlbum"]),
      albumTotal: state.getIn(["album", "albumTotal"]),
      currentPage: state.getIn(["album", "currentPage"]),
    }),
    shallowEqual
  );

  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();

  const dispatch = useDispatch();
  const targePageCount = (currentPage - 1) * 40;
  useEffect(() => {
    dispatch(getHotAlbumAction(targePageCount, 40, "ALL", "hot", YEAR, MONTH));
  }, [dispatch, YEAR, MONTH, targePageCount]);

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getAlbumTotalAction(currentPage));
    },
    [dispatch]
  );

  return (
    <HotAlbumWrapper>
      <ThemeHeaderRcm title="热门新碟" showIcon={false} right={false} />
      <div className="content">
        {hotAlbum &&
          hotAlbum.slice(0, 20).map((item, index) => {
            return (
              <HYAlbumCover
                key={index}
                info={item}
                size={130}
                width={153}
                bgp="-845px"
                play={23}
                play_bgp="-43px -53px"
              />
            );
          })}

        <div className="pageNation">
          {/* 分页 */}
          <HYPagination
            currentPage={currentPage}
            pageSize={40}
            total={albumTotal}
            onPageChange={(currentPage) => changePage(currentPage)}
          />
        </div>
      </div>
    </HotAlbumWrapper>
  );
});
