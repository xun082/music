import styled from "styled-components";

export const SongRightWrapper = styled.div`
  width: 100%;
  .header {
    width: 100%;
    height: 25px;
    line-height: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  .content {
    margin-bottom: 8px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      height: 32px;
      .text {
        display: block;
        height: 16px;
        line-height: 16px;
        cursor: pointer;
      }
      .song {
        color: #333;
      }
      .singer {
        color: #999;
      }
    }
    .control {
      width: 50px;
      height: 12px;
      display: flex;
      justify-content: space-between;

      .add {
        cursor: pointer;
        width: 12px;
        height: 12px;
        background-position: -87px -455px;
      }
      .play {
        cursor: pointer;
        width: 12px;
        height: 12px;
        background-position: -69px -455px;
      }
    }
  }
`;
