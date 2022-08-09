import {
  ManOutlined,
  PlayCircleOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeRecommendRcm from "@/components/theme-header-rcm";
import Authentication from "@/components/Authentication";
import SongCover from "@/components/songs-cover";
import RecordCard from "@/components/record-card";
import { getUserSongList, setCreateUserSongList } from "@/services/user";
import { changeIsVisible } from "@/components/theme-login/store/actionCreator";
import { getCity, getSizeImage } from "@/utils/format-utils";
import { ProfileWrapper } from "./style";
import Modal from "antd/lib/modal/Modal";
import { Input, message } from "antd";

import {
  getUserDetailInfoAction,
  getUserPlayRecordAction,
} from "@/components/theme-login/store/actionCreator";

export default memo(function Profile(props) {
  // props/state
  const [playlist, setPlaylist] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  // redux
  const dispatch = useDispatch();

  const { isLogin, userInfo, cookie, userDetail, playRecord } = useSelector(
    (state) => ({
      isLogin: state.getIn(["loginState", "isLogin"]),
      userInfo: state.getIn(["loginState", "profile"]),
      cookie: state.getIn(["loginState", "cookie"]),
      userDetail: state.getIn(["loginState", "userDetails"]),
      playRecord: state.getIn(["loginState", "playRecord"]),
    }),
    shallowEqual
  );

  // handle constant
  const userPic =
    userInfo && userInfo.avatarUrl && getSizeImage(userInfo.avatarUrl, 180);
  const nickname = userInfo && userInfo.nickname;
  const gender = userInfo && userInfo.gender === 1 ? "man" : "woman";
  const dynamic = [
    {
      name: "动态",
      value: userInfo && userInfo.authStatus,
    },
    {
      name: "关注",
      value: userInfo && userInfo.follows,
    },
    {
      name: "粉丝",
      value: userInfo && userInfo.followeds,
    },
  ];
  const signature = userInfo && userInfo.signature;
  const city = userInfo && userInfo.city && getCity(userInfo.city);
  const songListCount = userInfo && userInfo.playlistCount;
  const userId = userInfo && userInfo.userId;
  const level = userDetail && userDetail.level;
  const recordCount = playRecord && playRecord.length;

  // other hook
  useEffect(() => {
    dispatch(getUserDetailInfoAction(userId));
    dispatch(getUserPlayRecordAction(1, userId));
    getUserSongList(userId, 30, 0, cookie).then((res) => {
      setPlaylist(res.playlist);
    });
  }, [userId, dispatch, cookie]);
  // handle
  const toRedirect = useCallback(() => {
    props.history.push("/");
  }, [props.history]);

  const showModal = useCallback(() => {
    dispatch(changeIsVisible(true));
  }, [dispatch]);

  // modal function
  const showModalDom = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setCreateUserSongList(playlistName, cookie).then((res) => {
      if (res.code === 200) {
        message.success("创建成功😉").then(() => {
          window.location.reload();
        });
      }
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // template
  const renderDynamicList = () => {
    return dynamic.map((item) => {
      return (
        <div className="dynamic-item" key={item.name}>
          <strong className="count">{item.value}</strong>
          <span>{item.name}</span>
        </div>
      );
    });
  };

  const renderCreatePlaylist = () => {
    return (
      <span className="creator" onClick={showModalDom}>
        创建歌单
      </span>
    );
  };

  return (
    <ProfileWrapper className="wrap-v2 wrap-back">
      {/* 登录鉴权组件 */}
      <Authentication flag={isLogin} to={toRedirect} showModal={showModal} />
      <div className="user-info">
        <div className="user-pic">
          <img src={userPic} alt="" />
        </div>
        <div className="user-detail">
          <div className="nickname-wrap">
            <h3 className="nickname gap">{nickname}</h3>
            <span className="icon-small lev">
              LV:{level}
              <i className="icon-small"></i>
            </span>
            <div className="gender-icon">
              {gender === "man" ? (
                <ManOutlined className="gender-icon man" />
              ) : (
                <WomanOutlined className="gender-icon" color="#e60026" />
              )}
            </div>
            <a
              rel="noopener noreferrer"
              href="#/user/update"
              className="update-info sprite_button"
            >
              编辑个人资料
            </a>
          </div>
          <div className="dynamic-wrap">{renderDynamicList()}</div>
          <div className="recommend">个人介绍：{signature}</div>
          <div className="address">所在地区：{city}</div>
        </div>
      </div>
      <div className="play-record">
        <ThemeRecommendRcm
          title={`听歌排行`}
          keywords={[`累积听歌${recordCount}首`]}
          right={"最近一周"}
          showIcon={true}
        />
        <div className="record-list">
          {playRecord &&
            playRecord.map((item, index) => {
              return <RecordCard info={item} keywords={index} key={index} />;
            })}
        </div>
      </div>
      <div className="play-list">
        <ThemeRecommendRcm
          title={`我的歌单(${songListCount})`}
          right={renderCreatePlaylist()}
          showIcon={true}
        />
        <div className="playlist">
          {playlist &&
            playlist.map((item) => {
              return (
                <SongCover className="cover-top" info={item} key={item.id} />
              );
            })}
        </div>
      </div>
      <Modal
        title="创建歌单"
        okText="确认"
        cancelText="取消"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          key="back"
          size="large"
          placeholder="请输入歌单"
          prefix={<PlayCircleOutlined />}
          value={playlistName}
          onInput={({ target }) => setPlaylistName(target.value)}
        />
      </Modal>
    </ProfileWrapper>
  );
});
