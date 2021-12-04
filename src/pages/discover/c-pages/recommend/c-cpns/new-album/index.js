import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import HYAlbumCover from "@/components/album-cover";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import { AlbumWrapper } from "./style";

export default memo(function HYNewAlbum() {
  // redux hooks
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums &&
                    newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                      return (
                        <HYAlbumCover
                          key={item.id}
                          info={item}
                          size={100}
                          width={118}
                          bgp="-570px"
                          play={23}
                          play_bgp="0 -110px"
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
