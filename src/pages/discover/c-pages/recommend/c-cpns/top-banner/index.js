import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function HYTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联，获取数据进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      // recommend是跟store目录的recommend
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 轮播图点击
  const bannerRef = useRef();

  // 轮播图背景
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
  const bgImage = topBanners[currentIndex]?.imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2 wrap-back">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    src={item.imageUrl}
                    className="image"
                    alt={item.typeTile}
                  />
                </div>
              );
            })}
          </Carousel>
          ,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
