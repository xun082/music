import styled from "styled-components";

export const MovieWrapper = styled.div`
  width: 140px;
  height: 140px;
  .image {
    position: relative;
    width: 100%;
    height: 110px;
    .play {
      width: 44px;
      height: 44px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-position: -32px -87px;
      transform: translate(-50%, -50%);
      display: none;
    }
    &:hover {
      .play {
        display: block;
      }
    }
  }
  .content {
    width: 140px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000000;
    font-size: 14px;
  }
`;
