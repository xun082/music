import styled from "styled-components";

export const SingleWrapper = styled.div`
  width: 100%;
  height: 43px;
  background-color: #f7f7f7;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .play {
    width: 17px;
    height: 17px;
    background-position: 0 -103px;
    :hover {
      background-position: 0 -128px;
    }
  }
  .single_info {
    width: 370px;
    display: flex;
    align-items: center;
    .single_name {
      margin: 0 10px;
    }
    .mv {
      background-position: 0 -151px;
      width: 23px;
      height: 17px;
      cursor: pointer;
    }
  }
  .control {
    opacity: 0;
    width: 96px;
    height: 100%;
  }
  .singer {
    width: 140px;
    margin-left: 10px;
    font-size: 12px;
    color: #0c73c2;
    cursor: pointer;
  }
  .al {
    color: #666;
    cursor: pointer;
    width: 170px;
    font-size: 12px;
  }
  &:hover {
    background-color: #f2f2f2;
    .control {
      opacity: 1;
    }
  }
`;
