import React, { memo, useState, useRef, useCallback } from "react";

import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { Carousel } from "antd";
import { AnchorBannerWrapper } from "./style";
import { anchor } from "@/common/local-data";
import {
  getExcellentAnchorAction,
  getBannerCategoryAction,
} from "../../store/actionCreators";
import { getQueryObject } from "@/utils/format-utils";
import { NavLink } from "react-router-dom";

export default memo(function AnchorBanner() {
  let { id } = getQueryObject();
  // 把字符转换为数字，一顿操作猛如虎
  const ids = parseInt(id);
  const [currentIndex, setCurrentIndex] = useState(ids);

  const { currentPage } = useSelector(
    (state) => ({
      currentPage: state.getIn(["anchor", "currentPage"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const targePageCount = (currentPage - 1) * 20;
  // 轮播图点击
  const bannerRef = useRef();

  const handleClick = useCallback(
    (id) => {
      if (id !== currentIndex) {
        setCurrentIndex(id);
      }
      dispatch(getExcellentAnchorAction(getQueryObject()));
      dispatch(getBannerCategoryAction(22, targePageCount, getQueryObject()));
    },
    [currentIndex, dispatch, targePageCount]
  );
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
                      <NavLink to={`/discover/djradio?id=${item.id}`}>
                        <div
                          className={
                            "image " + (item.id === currentIndex ? "img" : "")
                          }
                          style={{
                            backgroundImage: "url(" + item.Image + ")",
                          }}
                        ></div>
                      </NavLink>
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
