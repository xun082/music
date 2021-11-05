import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { AnchorMainWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import ThemeProgramCard from "@/components/theme-program-card";
import { getQueryObject } from "@/utils/format-utils";
import { getAnchorProgramAction } from "../../store/actionCreators";

export default memo(function HYAnchorMain() {
  const { program } = useSelector(
    (state) => ({
      program: state.getIn(["anchorDetail", "program"]),
    }),
    shallowEqual
  );

  const length = program && program.count;
  // 节目列表
  const programs = program && program.programs;

  const dispatch = useDispatch();
  const { id } = getQueryObject();

  useEffect(() => {
    dispatch(getAnchorProgramAction(id));
  }, [dispatch, id]);
  return (
    <AnchorMainWrapper>
      <ThemeHeaderRcm
        title="节目列表"
        keywords={[`共${length}期`]}
        showIcon={false}
        right={false}
      />
      <div className="content">
        {programs &&
          programs.map((item, index) => {
            return <ThemeProgramCard key={index} index={index} info={item} />;
          })}
      </div>
    </AnchorMainWrapper>
  );
});
