import React, { memo } from "react";

import { RecordCardWrapper } from "./style";

export default memo(function RecordCard(props) {
  const { info, keywords } = props;
  return (
    <RecordCardWrapper>
      <div className="left">
        <div className="list">{keywords + 1}.</div>
        <div className="play sprite_02"></div>
        <a href="/#" className="song">
          {info.song.name}
        </a>
        <a href="/#" className="singer">
          {info.song.ar.map((item, index) => {
            return (
              <div className="names" key={index}>
                {item.name}
              </div>
            );
          })}
        </a>
        <div className="btn">
          <div className="btn-list sprite_icon2"></div>
          <div className="btn-list sprite_02"></div>
          <div className="btn-list sprite_icon2"></div>
          <div className="btn-list sprite_table"></div>
        </div>
      </div>
      <div className="right">
        <div className="count">{info.playCount + 1}次</div>
      </div>
    </RecordCardWrapper>
  );
});
