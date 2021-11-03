import React, { memo, useState, useCallback } from "react";

import { ArtistDetailWrapper, ArtistMenu } from "./style";
import HYArtistHeader from "./c-cpns/artist-header";
import HYArtistRight from "./c-cpns/artist-right";
import { artistMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { getQueryObject } from "@/utils/format-utils";

export default memo(function HYArtistDetail(props) {
  const [currentClass, setCurrentClass] = useState(0);
  const { route } = props;
  const { id } = getQueryObject();

  const clickItem = useCallback(
    (id) => {
      if (id !== currentClass) {
        setCurrentClass(id);
      }
    },
    [currentClass]
  );
  return (
    <ArtistDetailWrapper className="wrap-v2">
      <div className="left wrap-v3">
        <HYArtistHeader />
        <ArtistMenu className="tab_icon">
          {artistMenu &&
            artistMenu.map((item, index) => {
              return (
                <div
                  className={
                    "child tab_icon " +
                    (item.id === currentClass ? "active" : "")
                  }
                  onClick={(e) => clickItem(item.id)}
                  key={index}
                >
                  <NavLink to={item.link + `?id=${id}`}>{item.title}</NavLink>
                </div>
              );
            })}
        </ArtistMenu>
        {renderRoutes(route.routes)}
      </div>
      <div className="right wrap-v4">
        <HYArtistRight />
      </div>
    </ArtistDetailWrapper>
  );
});
