import styled from "styled-components";

export const AnchorDetailControlWrapper = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  .subscribe {
    margin-right: 5px;
    width: 105px;
    height: 31px;
    background-position: 0 -2516px;
    border-radius: 5px;
    position: relative;
    .text {
      height: 100%;
      line-height: 31px;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translateY(-50%);
    }
  }
  .play {
    margin-right: 5px;
    position: relative;
    background-position: 0 -2285px;
    width: 92px;
    height: 31px;
    .text {
      height: 100%;
      line-height: 31px;
      color: #333;
      position: absolute;
      top: 50%;
      left: 35%;
      transform: translateY(-50%);
    }
  }
  .share {
    position: relative;
    background-position: 0 -1225px;
    width: 85px;
    height: 31px;
    .text {
      height: 100%;
      line-height: 31px;
      color: #333;
      position: absolute;
      top: 50%;
      left: 35%;
      transform: translateY(-50%);
    }
  }
`;
