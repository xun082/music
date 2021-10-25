import styled from "styled-components";

export const RecordCardWrapper = styled.div`
  height: 38px;
  display: flex;
  .left {
    position: relative;
    display: flex;
    align-items: center;
    width: 65%;
    height: 100%;
    margin-left: 10px;
    a {
      text-decoration: none;
      display: block;
    }
    .list {
      width: 38px;
      text-align: right;
      line-height: 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      color: #666;
    }
    .play {
      margin: 0 10px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      background-position: -267px -268px;
      cursor: pointer;
    }
    .song {
      cursor: pointer;
      margin-right: 15px;
      color: #333;
      font-size: 13px;
    }
    .singer {
      display: flex;
      width: auto;
      height: 100%;
      cursor: pointer;
      margin-right: 15px;
      color: #666;
      font-size: 12px;
      align-items: center;
      .names {
        width: auto;
        :nth-child(n + 2) {
          ::before {
            content: "/";
          }
        }
      }
    }
    .btn {
      opacity: 0;
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 10px;
      width: 100px;
      height: 100%;
      :hover {
        opacity: 1;
      }
      .btn-list {
        float: left;
        width: 22px;
        height: 20px;
        margin-right: 10px;
        overflow: hidden;
        text-indent: -999px;
        cursor: pointer;
      }
      .btn-list:nth-child(1) {
        background-position: 0 -698px;
      }
      .btn-list:nth-child(2) {
        background-position: -297px -268px;
      }
      .btn-list:nth-child(3) {
        background-position: -45px -135px;
      }
      .btn-list:nth-child(4) {
        background-position: -82px -172px;
      }
    }
  }
  .right {
    width: 35%;
    height: 100%;
    background-color: rgba(78, 180, 245, 0.1);
    position: relative;
    .count {
      position: absolute;
      left: 10px;
      z-index: 1;
      height: 38px;
      line-height: 38px;
      color: #666;
      opacity: 1;
    }
  }
`;
