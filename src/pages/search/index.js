import React, { memo, useState, useCallback } from "react";

import { SearchWrapper } from "./style";
import { Input } from "antd";
import { useGetUserinfo } from "@/hooks/get-userinfo";
import { getSearchSuggest } from "@/services/search";
import XXSearchModel from "@/components/search-model";
import { searchCategory } from "@/common/local-data";
import { NavLink } from "react-router-dom";
import { getQueryObject } from "@/utils/format-utils";
import { getSearchResult } from "@/services/search";
import HYAlbumCover from "@/components/album-cover";
import ThemeArtistCard from "@/components/theme-artist-card";
import XXVideoCard from "@/components/theme-video-card";

const XXSearch = memo((props) => {
  useGetUserinfo();
  const { type } = getQueryObject();
  const [searchValue, setSearchValue] = useState("陈奕迅");
  const [suggest, setSuggest] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [currentClass, setCurrentClass] = useState(Number(type));
  const [count, setCount] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const onSearch = (value) => {
    //   默认搜索单曲
    getSearchResult(searchValue, 100, 0, type).then((res) => {
      setSearchResult(res?.result?.songs);
      setCount(res?.result?.songCount);
    });
    setIsShow(false);
  };

  const onChange = (e) => {
    setIsShow(true);
    setSearchValue(e.target.value);
    //   发送网络请求，获取搜索建议
    getSearchSuggest(searchValue).then((res) => {
      const result = res?.result;
      setSuggest(result);
    });
  };

  const songs = suggest?.songs;
  const artists = suggest?.artists;
  const playlists = suggest?.playlists;
  const album = suggest?.album;

  const clickItem = useCallback(
    (id) => {
      if (id !== currentClass) {
        setCurrentClass(id);
      }
    },
    [currentClass]
  );

  const changeSearchType = () => {
    setSearchResult([]);
    const { type } = getQueryObject();
    //   切换搜索类型
    getSearchResult(searchValue, 30, 0, type).then((res) => {
      switch (Number(type)) {
        case 1:
          setSearchResult(res?.result?.songs);
          setCount(res?.result?.songCount);
          break;
        case 10:
          setSearchResult(res?.result?.albums);
          setCount(res?.result?.albumCount);
          break;
        case 100:
          setSearchResult(res?.result?.artists);
          setCount(res?.result?.artistCount);
          break;
        case 1000:
          setSearchResult(res?.result?.playlists);
          setCount(res?.result?.playlistCount);
          break;
        case 1002:
          setSearchResult(res?.result?.userprofiles);
          setCount(res?.result?.userprofileCount);
          break;
        case 1006:
          setSearchResult(res?.result?.songs);
          setCount(res?.result?.songCount);
          break;
        case 1009:
          setSearchResult(res?.result?.djRadios);
          setCount(res?.result?.djRadioCount);
          break;
        default:
          setSearchResult(res?.result?.videos);
          setCount(res?.result?.videoCount);
          break;
      }
      console.log(searchResult);
    });
  };

  return (
    <SearchWrapper className="wrap-v2" isVisible={isShow}>
      <div className="search">
        <Input.Search
          placeholder="音乐/视频/电台/用户"
          allowClear
          value={searchValue}
          onSearch={onSearch}
          onChange={onChange}
          style={{ width: 400 }}
        />
      </div>
      <div className="suggest">
        <div className="title">搜索 "{searchValue}" 相关用户</div>
        {songs !== undefined ? (
          <XXSearchModel content={songs} title="单曲" />
        ) : (
          ""
        )}
        {artists !== undefined ? (
          <XXSearchModel content={artists} title="歌手" />
        ) : (
          ""
        )}
        {album !== undefined ? (
          <XXSearchModel content={album} title="专辑" />
        ) : (
          ""
        )}
        {playlists !== undefined ? (
          <XXSearchModel content={playlists} title="歌单" />
        ) : (
          ""
        )}
      </div>
      <div className="count">
        搜索“{searchValue}”，找到 {count} 个视频
      </div>
      <div className="tab tab_icon">
        {searchCategory &&
          searchCategory.map((item, index) => {
            return (
              <div
                className={
                  "child tab_icon " +
                  (item.type === currentClass ? "active" : "")
                }
                onClick={(e) => {
                  clickItem(item.type);
                  changeSearchType();
                }}
                key={index}
              >
                <NavLink to={`search?type=${item.type}`}>{item.title}</NavLink>
              </div>
            );
          })}
      </div>
      <div className="result">
        {searchResult &&
          searchResult.map((item, index) => {
            switch (Number(getQueryObject().type)) {
              case 10:
                return <HYAlbumCover key={index} info={item} />;
              case 100:
                return <ThemeArtistCard key={index} info={item} />;
              case 1014:
                return <XXVideoCard key={index} info={item} />;

              default:
                return <div>{getQueryObject().type}</div>;
            }
          })}
      </div>
    </SearchWrapper>
  );
});

export default XXSearch;
