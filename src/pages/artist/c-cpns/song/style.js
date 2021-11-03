import styled from "styled-components";

export const ArtistSongWrapper = styled.div`
  padding-right: 10px;
  box-sizing: border-box;
  .header {
    width: 100%;
    height: 31px;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .play {
        width: 66px;
        height: 31px;
        line-height: 31px;
        background-position: 0 -633px;
        position: relative;
        span {
          position: absolute;
          left: 51%;
          cursor: pointer;
          color: #fff;
        }
      }
      .add {
        width: 31px;
        height: 31px;
        background-position: 0 -1588px;
        margin-right: 5px;
        line-height: 31px;
      }
      .collect {
        width: 95px;
        height: 31px;
        position: relative;
        background-position: 0 -977px;
        span {
          color: #333;
          position: absolute;
          left: 29%;
          top: 20%;
        }
      }
    }
    .right {
      width: 105px;
      height: 100%;
      color: #333;
      text-align: center;
      line-height: 31px;
      font-size: 12px;
      cursor: pointer;
      background-position: 0 -1810px;
    }
  }
  .content {
    margin-top: 5px;
  }
`;
