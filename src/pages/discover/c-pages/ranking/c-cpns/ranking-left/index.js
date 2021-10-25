import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { RankingLeftWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils.js";
import { changeCurrentRanKingListIdAction } from "../../store/actionCreators";

export default memo(function RankingLeftRcm(props) {
  const { info } = props;

  const id = info && info.id;

  const dispatch = useDispatch();
  // other function
  const clickItem = (e) => {
    e.preventDefault();
    dispatch(changeCurrentRanKingListIdAction(id));
    props.history.push(`/discover/ranking?id=${id}`);
  };
  return (
    <RankingLeftWrapper>
      <NavLink
        onClick={(e) => clickItem(e, info.id)}
        to={`/discover/ranking?id=${id}`}
        className="link"
      >
        <img
          src={getSizeImage(info.picUrl || info.coverImgUrl, 40)}
          alt=""
          className="image"
        />
        <div className="content">
          <div className="name">{info.name}</div>
          <div className="name">{info.updateFrequency}</div>
        </div>
      </NavLink>
    </RankingLeftWrapper>
  );
});
