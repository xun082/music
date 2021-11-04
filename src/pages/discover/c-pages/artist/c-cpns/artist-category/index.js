import React, { memo, useState, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";

import {
  getArtistCategoryAction,
  getArtistHeaderAction,
} from "../../store/actionCreators";
import { ArtistCategoryWrapper } from "./style";
import { singerCategories } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYArtistCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  let { type, area } = getQueryObject();
  const dispatch = useDispatch();
  useEffect(() => {
    //   默认获取的信息
    dispatch(getArtistCategoryAction(100, 0, type, area, -1));
  }, [dispatch, type, area]);

  const clickItem = useCallback(
    (id, name) => {
      if (id !== currentIndex) {
        setCurrentIndex(id);
      }
      dispatch(getArtistCategoryAction(100, 0, type, area, -1));
      dispatch(getArtistHeaderAction(name));
    },
    [currentIndex, dispatch, type, area]
  );

  return (
    <ArtistCategoryWrapper>
      {singerCategories &&
        singerCategories.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="header">{item.title}</div>
              {item &&
                item.artists.map((items, index) => {
                  return (
                    <NavLink
                      to={`/discover/artist?type=${items.type}&area=${item.area}`}
                      key={index}
                      className="link"
                    >
                      <div
                        className={
                          "tag singer " +
                          (items.id === currentIndex ? "bgc" : "")
                        }
                        onClick={() => clickItem(items.id, items.name)}
                      >
                        {items.name}
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          );
        })}
    </ArtistCategoryWrapper>
  );
});
