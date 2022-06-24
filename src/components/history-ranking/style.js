import styled from "styled-components";

export const HistoryPlayWrapper = styled.div`
  height: 38px;
  width: 100%;
  display: flex;
  :nth-child(2n) {
    background-color: #f7f7f7;
  }
  .content {
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .ranking {
      padding: 0 8px;
      width: 45px;
      height: 100%;
      line-height: 38px;
      text-align: right;
      font-size: 16px;
      color: rgb(102, 102, 102);
    }
    .play {
      width: 17px;
      height: 17px;
      background-position: 0 -103px;
      :hover {
        background-position: 0 -128px;
      }
    }
    .link {
      line-height: 38px;
      padding-left: 10px;
      height: 100%;
      cursor: pointer;
    }
    .song_list {
      color: #333;
      font-size: 14px;
    }
    .singer {
      color: #aeaeae;
      font-size: 14px;
    }
    .control {
      position: absolute;
      top: 0;
      right: 10px;
      width: 111px;
      height: 100%;
      opacity: 0;
    }
  }
  .count {
    width: 35%;
    height: 100%;
  }
  &:hover {
    .control {
      opacity: 1;
    }
  }
`;
