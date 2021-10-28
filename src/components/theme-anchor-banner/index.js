import React, { memo, useState, useRef } from "react";

import { Carousel } from "antd";
import { AnchorBannerWrapper } from "./style";
import { anchor } from "@/common/local-data";

export default memo(function AnchorBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 轮播图点击
  const bannerRef = useRef();

  const handleClick = (id) => {
    if (id !== currentIndex) {
      setCurrentIndex(id);
    }
  };
  return (
    <AnchorBannerWrapper>
      <div className="banner">
        <div className="control">
          <div
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></div>
          <div
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></div>
        </div>
        <Carousel ref={bannerRef}>
          {[0, 1].map((item) => {
            return (
              <div key={item} className="page">
                {anchor.slice(item * 18, (item + 1) * 18).map((item, index) => {
                  return (
                    <div
                      className={
                        "tag anchor_icon " +
                        (item.id === currentIndex ? "active" : "")
                      }
                      onClick={() => {
                        handleClick(item.id);
                      }}
                      key={index}
                    >
                      <div
                        className="image"
                        style={{
                          backgroundImage: "url(" + item.Image + ")",
                        }}
                      ></div>
                      <div className="name">{item.tag}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    </AnchorBannerWrapper>
  );
});
