import React, { memo, useEffect } from "react";

import { getSettleSingerAction } from "../../store/actionCreators";
import { SETTLE_SINGER } from "@/common/constants";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HYThemeRightRcm from "@/components/theme-right-rcm";
import HYListCardRcm from "@/components/list-card";
import { SetterSinger } from "./style";

export default memo(function HYSettleSinger() {
  //  redux hooks
  const { settleSinger } = useSelector(
    (state) => ({
      settleSinger: state.getIn(["recommend", "settleSinger"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSettleSingerAction(SETTLE_SINGER));
  }, [dispatch]);
  return (
    <SetterSinger>
      <HYThemeRightRcm
        title="入驻歌手"
        rightContent="查看全部➤"
      ></HYThemeRightRcm>
      {settleSinger &&
        settleSinger.map((item, index) => {
          return <HYListCardRcm key={item.id} info={item} />;
        })}
      <a href="/#" className="button">
        申请成为网易音乐人
      </a>
    </SetterSinger>
  );
});
