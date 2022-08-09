import styled from "styled-components";

export const AtWrapper = styled.div`
  .at {
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px dotted #ccc;
    .desc {
      display: flex;
      .content {
        width: 530px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .header {
          font-size: 14px;
          .nickname {
            margin-right: 5px;
            color: #0c73c2;
            cursor: pointer;
          }
          .tag {
            color: #666;
          }
        }
      }
      .time {
        width: 100%;
        text-align: end;
      }
    }
    .source {
      margin-top: 5px;
      width: 100%-70px;
      height: 50px;
      background: #f5f5f5;
      margin-left: 70px;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      .content {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .artist {
          font-size: 12px;
          color: #666;
          span {
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
    }
    .control {
      height: 14px;
      width: 100%;
      display: flex;
      justify-content: end;
      color: #0c73c2;
      margin-top: 15px;
      .view {
        padding-right: 10px;
        border-right: 1px solid #c7c7c7;
        cursor: pointer;
      }
      .reply {
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
`;
