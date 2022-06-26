import React, { memo, useState, useEffect } from "react";
import { SearchModelWrapper } from "./style";
import { Link } from "react-router-dom";

const XXSearchModel = memo((props) => {
  const { content, title } = props;
  const [targetLink, setTargetLink] = useState("");

  useEffect(() => {
    switch (title) {
      case "单曲":
        setTargetLink("/discover/song");
        break;
      case "歌手":
        setTargetLink("/discover/artist/detail");
        break;
      case "歌单":
        setTargetLink("/discover/playlist");
        break;
      default:
        setTargetLink("/discover/album/detail");
        break;
    }
  }, [title]);

  return (
    <SearchModelWrapper>
      <div className="name">{title}</div>
      <div className="song_list list">
        {content &&
          content.map((item) => {
            return (
              <Link
                to={`${targetLink}?id=${item.id || item?.album?.id}`}
                key={item.id}
                className="item"
              >
                {item.name}
                {item?.album !== undefined ? <>-{item?.album?.name}</> : ""}
              </Link>
            );
          })}
      </div>
    </SearchModelWrapper>
  );
});

export default XXSearchModel;
