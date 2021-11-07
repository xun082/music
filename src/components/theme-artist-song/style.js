import styled from "styled-components";

export const SongCardWrapper = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f7f7f7;
  display: flex;
  .play {
    width: 95px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    .icon {
      background-position: -2px -218px;
      &:hover {
        background-position: -2px -112px;
      }
    }
    div {
      width: 18px;
      height: 18px;
    }
  }
  .song-name {
    width: 300px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    a {
      display: block;
    }
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 100%;
      max-width: 270px;
      line-height: 30px;
      margin-right: 10px;
    }
    .tv {
      width: 23px;
      height: 18px;
      background-position: 0 -151px;
    }
  }
  .length {
    width: 90px;
    height: 30px;
    position: relative;
    .time {
      position: absolute;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 30px;
    }
    .control {
      position: absolute;
      opacity: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 18px;
        height: 18px;
      }
      .add {
        background-position: -20px -698px;
      }
      .collect {
        background-position: -44px -108px;
      }
      .share {
        background-position: -45px -158px;
      }
      .down {
        background-position: -104px -172px;
      }
    }
  }
  &:hover {
    .control {
      opacity: 1;
      z-index: 11;
    }
    .time {
      opacity: 0;
    }
  }
  .album {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 150px;
    height: 30px;
    line-height: 30px;
    padding-left: 3px;
    box-sizing: border-box;
  }
`;
