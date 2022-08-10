import React, { useState, useCallback, useEffect } from "react";

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
import Users from "./components/users";
import Single from "./components/single";
import Lyric from "./components/lyric";
import Anchor from "./components/anchor";
import { _debounce } from "@/utils/util";

const XXSearch = () => {
  useGetUserinfo();
  const { type, value } = getQueryObject();

  // 搜索内容
  const [searchValue, setSearchValue] = useState("");
  // 搜索建议
  const [suggest, setSuggest] = useState("");
  const [searchSuggestIsShow, setSearchSuggestIsShow] = useState(false);
  const [currentClass, setCurrentClass] = useState(Number(type));
  const [count, setCount] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (value !== "") {
      getSearchResult(value, 100, 0, type).then((res) => {
        searchCategoriesResult(type, res);
      });
    }
  }, [type, value]);

  const onSearch = () => {
    window.location.hash = `#/search/?type=${type}&value=${searchValue}`;
    //   默认搜索单曲
    getSearchResult(searchValue, 100, 0, type).then((res) => {
      setSearchResult(res?.result?.songs);
      setCount(res?.result?.songCount);
    });
    setSearchSuggestIsShow(false);
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length === 0) {
      setSearchSuggestIsShow(false);
    } else {
      setSearchSuggestIsShow(true);
    }

    /**
     * 发送网络请求，获取搜索建议
     * 防抖
     */
    _debounce(
      getSearchSuggest(searchValue).then((res) => {
        const result = res?.result;
        setSuggest(result);
      }),
      500,
      1
    );
  };

  const songs = suggest?.songs;
  const artists = suggest?.artists;
  const playlists = suggest?.playlists;
  const album = suggest?.album;

  const changeSearchType = useCallback(
    (e) => {
      setSearchResult([]);
      //   切换搜索类型
      getSearchResult(searchValue || value, 30, 0, e).then((res) => {
        searchCategoriesResult(e, res);
      });
      if (e !== currentClass) {
        setCurrentClass(e);
      }
    },
    [searchValue, value, currentClass]
  );

  const searchCategoriesResult = (e, value) => {
    switch (Number(e)) {
      case 1:
        setSearchResult(value?.result?.songs);
        setCount(value?.result?.songCount);
        break;
      case 10:
        setSearchResult(value?.result?.albums);
        setCount(value?.result?.albumCount);
        break;
      case 100:
        setSearchResult(value?.result?.artists);
        setCount(value?.result?.artistCount);
        break;
      case 1000:
        setSearchResult(value?.result?.playlists);
        setCount(value?.result?.playlistCount);
        break;
      case 1002:
        setSearchResult(value?.result?.userprofiles);
        setCount(value?.result?.userprofileCount);
        break;
      case 1006:
        setSearchResult(value?.result?.songs);
        setCount(value?.result?.songCount);
        break;
      case 1009:
        setSearchResult(value?.result?.djRadios);
        setCount(value?.result?.djRadioCount);
        break;
      default:
        setSearchResult(value?.result?.videos);
        setCount(value?.result?.videoCount);
        break;
    }
  };

  return (
    <SearchWrapper className="wrap-v2">
      <div className="search">
        <Input.Search
          onBlur={() => {
            setSearchSuggestIsShow(false);
          }}
          onFocus={() => {
            if (searchValue.length !== 0) {
              setSearchSuggestIsShow(true);
            }
          }}
          placeholder="音乐/视频/电台/用户"
          allowClear
          value={searchValue}
          onSearch={onSearch}
          onChange={onChange}
          style={{ width: 400 }}
        />
      </div>

      {/* 控制搜索建议是否展示 */}
      {searchSuggestIsShow === true ? (
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
      ) : (
        ""
      )}
      <div className="count">
        搜索“{searchValue}”，找到 {count || 0} 个视频
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
                  changeSearchType(item.type);
                }}
                key={index}
              >
                <NavLink to={`?type=${item.type}&value=${searchValue}`}>
                  {item.title}
                </NavLink>
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
              case 1002:
                return <Users key={index} info={item} />;
              case 1:
                return <Single key={index} info={item} />;
              case 1006:
                return <Lyric key={index} info={item} />;
              case 1009:
                return <Anchor key={index} info={item} />;

              default:
                return <div>{getQueryObject().type}</div>;
            }
          })}
      </div>
    </SearchWrapper>
  );
};

export default XXSearch;
