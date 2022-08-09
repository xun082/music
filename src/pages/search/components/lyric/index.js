import React, { useState } from "react";

import { LyricWrapper } from "./style";
import Single from "../single";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const Lyric = (props) => {
  const { info } = props;

  const [unfold, setUnfold] = useState(false);

  const lyrics = info?.lyrics;

  return (
    <LyricWrapper unfold={unfold}>
      <Single info={info} />
      <div className="lyric">
        {lyrics.map((item, index) => {
          return (
            <div
              className="lyric_list"
              dangerouslySetInnerHTML={{ __html: item }}
              key={index}
            ></div>
          );
        })}
      </div>
      <div
        className="unfold"
        onClick={() => {
          setUnfold(!unfold);
        }}
      >
        {unfold === true ? (
          <div>
            展开
            <DownOutlined className="icon" />
          </div>
        ) : (
          <div>
            收起
            <UpOutlined className="icon" />
          </div>
        )}
      </div>
    </LyricWrapper>
  );
};

export default Lyric;
