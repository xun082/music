import styled from "styled-components";

export const NotifyWrapper = styled.div`
  .notify {
    width: 100%;
    height: 74px;
    padding: 16px 0;
    border-bottom: 1px dotted #ccc;
    cursor: pointer;
    display: flex;
    &:hover {
      background: #f5f5f5;
    }
    .content {
      width: 525px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        .nickname {
          margin-right: 5px;
          color: #000;
          cursor: pointer;
          font-weight: 700;
        }
        .info {
          color: #999;
        }
      }
      .comment {
        color: #666;
      }
    }
    .time {
      width: 100%;
      height: 19px;
      display: flex;
      justify-content: end;
      .info {
        line-height: 14px;
      }
      .sprite_icon2 {
        width: 13px;
        height: 13px;
        background-position: -70px -140px;
        margin-left: 10px;
      }
    }
  }
`;
