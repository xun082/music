import styled from "styled-components";

export const ArtistHeaderWrapper = styled.div`
  .header {
    height: 35px;
    width: 100%;
    display: flex;
    div {
      height: 35px;
      line-height: 35px;
    }
    .name {
      font-weight: normal;
      font-size: 24px;
      color: #333;
    }
    .another {
      padding-left: 10px;
      font-size: 14px;
      color: #999;
      font-weight: normal;
    }
  }
  .image {
    width: 640px;
    height: 300px;
    position: relative;
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-position: 0 0;
      z-index: 22;
    }
    .img {
      top: 0;
      left: 0;
      display: block;
      position: absolute;
    }
    .icon {
      z-index: 99;
      width: 200px;
      height: 32px;
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: space-between;
      right: 20px;
      .user {
        width: 96px;
        height: 100%;
        background-position: 0 -1156px;
      }
      .collect {
        width: 76px;
        height: 100%;
        background-position: 0 -500px;
      }
    }
  }
`;
