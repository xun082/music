import styled from "styled-components";

export const SongCardWrapper = styled.div`
  height: 30px;
  width: 710px;
  border-left: 1px solid #d9d9d9;
  border-top: none;
  border-bottom: none;
  display: flex;
  div {
    height: 100%;
    padding: 0 10px;
    line-height: 30px;
    box-sizing: border-box;
  }
  .index {
    display: flex;
    width: 75px;
    justify-content: space-between;
    align-items: center;
    div {
      color: #999;
      width: 19px;
      height: 19px;
    }
    .icon {
      background-position: -2px -216px;
    }
  }
  .song-title {
    width: 235px;
  }
  .length {
    width: 111px;
    position: relative;
    .control,
    time {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .control {
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
    &:hover {
      .control {
        opacity: 1;
        z-index: 11;
      }
      .time {
        opacity: 0;
        /* display: none; */
      }
    }
  }
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 91px;
    span {
      width: 100%;
    }
  }
  .album {
    width: 127px;
  }
`;
