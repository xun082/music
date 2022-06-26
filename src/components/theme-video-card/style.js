import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  width: 160px;
  height: 140px;
  .cover {
    width: 100%;
    height: 90px;
    position: relative;
    img {
      width: 100%;
      height: 90px;
    }
    .play_count {
      position: absolute;
      right: 0;
      top: 0;
      color: #fff;
      text-shadow: -2px 1px rgb(0 0 0 / 40%);
      background-position: -60px -305px;
      padding-left: 20px;
      height: 20px;
      box-sizing: border-box;
    }
    .time {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      text-shadow: -2px 1px rgb(0 0 0 / 40%);
      padding-left: 5px;
    }
  }
  .name {
    display: block;
    height: 18px;
    width: 100%;
    margin: 7px 0 1px;
    border: none;
    font-size: 14px;
    font-weight: normal;
    color: #0c73c2;
  }
  .create {
    width: 100%;
    height: 20px;
    color: #666;
    .link {
      width: auto;
      height: 100%;
    }
  }
`;
