import React, { memo, useEffect, useCallback } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { ArtistAlbumWrapper } from "./style";
import {
  getArtistAlbumAction,
  getArtistAlbumTotalAction,
} from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import HYAlbumCover from "@/components/album-cover";
import HYPagination from "@/components/pagination";

export default memo(function HYArtistAlbum() {
  const { artistAlbum, albumTotal, currentPage } = useSelector(
    (state) => ({
      artistAlbum: state.getIn(["artistDetail", "artistAlbum"]),
      albumTotal: state.getIn(["artistDetail", "albumTotal"]),
      currentPage: state.getIn(["artistDetail", "currentPage"]),
    }),
    shallowEqual
  );

  const { id } = getQueryObject();

  const dispatch = useDispatch();
  const targePageCount = (currentPage - 1) * 12;
  useEffect(() => {
    dispatch(getArtistAlbumAction(id, 12, targePageCount));
  }, [dispatch, id, targePageCount]);

  // 翻页
  const changePage = useCallback(
    (currentPage) => {
      dispatch(getArtistAlbumTotalAction(currentPage));
    },
    [dispatch]
  );
  return (
    <ArtistAlbumWrapper>
      <div className="content">
        {artistAlbum &&
          artistAlbum.map((item, index) => {
            return (
              <HYAlbumCover
                key={index}
                info={item}
                play={24}
                play_bgp="-43px -54px"
              />
            );
          })}
      </div>
      <div className="pageNation">
        {/* 分页 */}
        <HYPagination
          currentPage={currentPage}
          pageSize={40}
          total={albumTotal}
          onPageChange={(currentPage) => changePage(currentPage)}
        />
      </div>
    </ArtistAlbumWrapper>
  );
});
