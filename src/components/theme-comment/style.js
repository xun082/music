import styled from "styled-components";

export const CommentWrapper = styled.div`
  padding: 0 0 0 40px;
  display: flex;
  border-top: 1px solid #c10d0c;
  .image {
    margin-top: 15px;
    width: 50px;
    height: 50px;
  }

  .main {
    box-sizing: border-box;
    margin: 15px 0;
    margin-left: 5px;
    width: 570px;
    height: auto;
    .name {
      color: #0c73c2;
    }
    .content {
      color: #333;
      white-space: pre-wrap;
    }
    .control {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      height: 16px;
      .right-control {
        display: flex;
        .like {
          margin-top: 2px;
          width: 14px;
          height: 14px;
          background-position: -36px -680px;
          margin-right: 5px;
        }
        .like-count {
          margin-right: 5px;
          font-size: 13px;
        }
      }
    }
  }
`;
