import styled from "styled-components";

export const ControlWrapper = styled.div`
  height: 31px;
  display: flex;

  margin-top: 20px;
  .play {
    width: 90px;
    height: 31px;
    line-height: 31px;
    position: relative;
    background-position: 0 -633px;
    div {
      height: 31px;
      line-height: 31px;
      position: absolute;
      left: 40%;
      color: #fff;
    }
  }
  .add {
    width: 31px;
    height: 31px;
    background-position: 0 -1588px;
    margin-right: 8px;
  }
  .collect {
    position: relative;
    width: 83px;
    background-position: 0 -1063px;
    height: 31px;
    div {
      height: 31px;
      line-height: 31px;
      left: 40%;
      position: absolute;
    }
  }
`;
